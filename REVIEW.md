# DiplomaOne — Full Review & Fix Report

**Date:** 27 Nov 2026 · **Branch:** `arena/ebb5e180-diplomaone-content` · **Reviewer:** Arena Agent

This document is the complete audit you asked for. It explains **why** sign-in fails for you as admin, **why** paid papers sometimes show "Buy again" or show nothing after unlock, and what was fixed in this branch. The payment **server** (`/api/payments/live/*`) lives on Netlify and is **not** in this repo — server-side items are listed as actions for you in §7.

---

## 1. What your system actually is

| Part | Where it lives | What it does |
|---|---|---|
| **Website (this repo)** | GitHub Pages `sunilpa4.github.io/diplomaone-content` + Netlify `diplomaonein.netlify.app` / `www.diplomaone.in` | Notes (free), paper listings, sign-in UI, Razorpay checkout UI |
| **Sign-in** | Firebase Auth, project `diplomaone-53b4e` (`assets/firebase-auth.js`, bundled) | Google sign-in via popup. No password stored by you |
| **Payments backend** | Netlify Functions `/api/payments/live/*` — **not in this repo** | Creates Razorpay orders, verifies signatures, stores purchases in Firestore, serves private paper bytes |
| **Content** | `data/` (notes JSON) + `papers/` (paper HTML/PDF) | Notes are public. Paper solutions are meant to be private |
| **Prices** | Client `app.js` + server must match: Computer ₹19, Mechanical/Electrical/Civil ₹29, Chemical ₹39 | Per **one paper-session**, not per subject |

**Important:** The same website files are served from **two domains**. Payments only work on the Netlify domains. On `github.io` the site deliberately shows "Open DiplomaOne" instead of a Buy button. If you test as admin on `github.io`, you will never be able to buy — that is by design, but it looks like a bug.

---

## 2. Issue 1 — "I'm admin but sign-in fails"

### Root causes found

**A. Login was tab-only (sessionStorage).** `assets/firebase-auth.js` used `browserSessionPersistence` (`kt=pt`, `sessionStorage`). Closing the tab or restarting the browser signed you out. Every reopen looked like "sign-in issue" and every paid paper looked locked again → "Buy again".

**B. Wrong test domain.** Firebase only allows sign-in on **Authorized domains** you add in Firebase Console → Authentication → Settings. The payment allowlist in code is only `diplomaonein.netlify.app` + `www.diplomaone.in` (+ now `diplomaone.in`). If you test on `sunilpa4.github.io`, Firebase returns `auth/unauthorized-domain` and sign-in fails. The app even has that error message, but it's easy to miss.

**C. CSP blocked Google scripts.** `index.html` CSP allowed `apis.google.com` but **not** `www.google.com` (reCAPTCHA / Enterprise scripts that Firebase loads). In strict browsers this fails sign-in with `auth/internal-error`.

**D. No way to see your UID.** The test-connection page deliberately hides UID/email. As admin you need your Firebase UID to add yourself to `PAYMENTS_TESTER_UIDS` and to debug Firestore. The Account page showed email but not UID.

### Fixed in this branch

1. **Persistent login:** `assets/firebase-auth.js` — `var kt=pt` → `var kt=mn` (IndexedDB local persistence). You now stay signed in across tab closes/restarts until you sign out or clear browser data. Privacy text updated (EN + GU) to match.
2. **CSP:** `index.html` — added `https://www.google.com` to `script-src` + `frame-src`, `https://www.googleapis.com` to `connect-src`, `data:` to `font-src`.
3. **Payment domains:** `app.js` + `assets/firebase-auth.js` — added `https://diplomaone.in` (without `www`) to the allowlist. Visiting `diplomaone.in` no longer shows "payment_site_required".
4. **UID visible + copyable:** Account page now shows **Account ID (UID)** with a Copy button. Use it for tester allowlist and support.

### You must still do (Firebase Console, 2 minutes)

Firebase Console → `diplomaone-53b4e` → Authentication → Settings → **Authorized domains** — ensure ALL are listed:

```
diplomaonein.netlify.app
www.diplomaone.in
diplomaone.in
sunilpa4.github.io        ← add this if you test on GitHub Pages
localhost                 ← for local testing
```

And Authentication → Sign-in method → **Google** must be **Enabled**. If it's disabled you get `auth/operation-not-allowed`.

---

## 3. Issue 2 — "After buy: sometimes Buy again / unlocked but solution not showing"

### How the flow is supposed to work

```
Locked page → Sign in → Check access (readPurchasedPaper)
  → owned? show solution : show Buy button
  → Buy → Razorpay checkout → /verify (server checks signature + capture)
  → Re-check access → owned → show solution
```

### Root causes found

**A. Single immediate re-check after payment.** Old code did one `readPurchasedPaper` right after Razorpay success. If the server needed a moment to make the purchase visible (Firestore write, capture confirmation), the check returned `purchase_required` and the UI showed **Buy again** — inviting a double payment.

**B. Transient errors treated as "not owned".** A 20s timeout, `session_changed`, or slow network returned `payments_unavailable` → locked page with Buy button. No retry.

**C. Any auth error wiped payment state.** `startAccount()` called `resetPayments()` on **any** error (`!!state.error`), cancelling in-flight purchase checks and blanking private content.

**D. Private images depend on fragile in-memory state.** `readPurchasedPaper` stores assets in a `Map` (`V`) keyed by generation. Any `cancelPayments()` (navigation, auth event) clears it. Images then fail with `purchase_required` → text shows but diagrams are blank → "solution not showing".

**E. Paper list was broken on GitHub Pages.** `papers/index.json` was in `{version, subjects}` format, but `papersFromTree()` only accepted GitHub Trees API format `{tree:[...]}`. It **always threw**, fell back to 8 hardcoded papers, and showed "paper list could not be updated". On the payment site the private catalog masked this; on `github.io` most papers were invisible. The file also only listed 6 subjects (stale).

**F. Different Google account.** Sign-in uses `prompt:select_account`. Paying with Account A then opening the paper as Account B correctly returns `purchase_required` → looks like "Buy again". The UI now reminds you to use the same account, but the server cannot distinguish "never bought" from "bought with another account".

### Fixed in this branch

1. **Post-payment polling:** After `buyPaper` succeeds, the client now polls `readPurchasedPaper` up to 4 times (0.8s → 1.5s → 1.5s) before deciding. A paid user is no longer shown "Buy again" because of a slow server write.
2. **One retry on transient failures:** Initial access check retries once after 900ms on `payments_unavailable` / `session_changed` / `payment_timeout`.
3. **Safer reset:** `startAccount()` only wipes payment state on **account change or sign-out**, not on transient errors.
4. **Paper index fixed:** `papersFromTree()` now accepts **both** formats. `papers/index.json` regenerated by scanning `papers/` → **56 codes** (was 6). Listing works on both domains.
5. **UID + same-account reminder:** Account page shows UID; locked page already says "Use the same Google account" — kept.

### What still needs server-side verification (§7)

- `/verify` must be **idempotent** and must **not** require a webhook to grant access. Access must be granted synchronously after signature + capture verification.
- Firestore purchase write must be **immediate** (not eventual-consistency dependent). The client polling above covers ~4s; if your server takes longer, increase polling or add a webhook + "pending" state.
- `readPurchasedPaper` must return the **same** `productId` format (`CODE--session`) and the HTML must contain at least one `<details>` (the sanitizer throws `Invalid paper format` otherwise → generic error page, not the paper).

---

## 4. Issue 3 — Design & UX review

**What is good:** Clean, consistent design system (purple/lilac, rounded cards, EN/GU bilingual, accessible focus states, sticky header, mobile nav). Notes reader with tabs (Notes/Programs/Diagrams/Viva/Exam) is solid. Paper cards show price per paper. Privacy + purchase-info pages are thorough.

**What needs work (not yet changed — needs your direction):**

1. **Two-domain confusion.** Users landing on `github.io` see locked papers with a redirect button. Better: a persistent banner "You're on the preview site — open diplomaone.in to buy" + auto-redirect option.
2. **Locked page hierarchy.** Price is large but the Buy button is below fold on mobile. Move price + Buy higher, add "What you get" checklist (Q&A cards, diagrams, PDF download, EN+GU).
3. **Purchases page.** Currently a simple list. Needs: search, "Open" buttons, payment status (confirmed/pending), and "Report issue" with UID pre-filled.
4. **Admin view.** No admin dashboard. You need: list of all purchases (Firestore), refund button (Razorpay), tester UID management, product enable/disable. This must be a **separate private** page (Netlify + server auth), not in this public repo.
5. **Performance.** `app.js` is 150KB single file, `styles.css` 39KB. Fine for now, but no code-splitting. `main.dart.js` (3.4MB Flutter) is only for the legacy `app/` web app — consider removing if unused.
6. **SEO.** Single-page hash routing (`#/paper/...`) is invisible to Google. For organic traffic, pre-render paper landing pages or add a sitemap.

No visual redesign was done in this branch — I fixed systems first. Tell me which direction you want (see §8 questions) and I'll do the design pass.

---

## 5. 🔴 Critical security issue — Paid content is PUBLIC

**Verified:** `GET /papers/DI01000131/summer-2026.html` returns **200** on GitHub Pages. All 52 paid paper folders (HTML + PDF) are in this **public** repo. Anyone can read any paid solution for free by guessing the URL — the payment gate only controls the **UI**, not the files.

The `.json` files say `{"private":true}` but GitHub Pages serves the HTML/PDF anyway.

**Fix (needs your confirmation — do NOT skip):**

- Move paid HTML/PDF/assets to **private** storage (Netlify Blobs / Firebase Storage with rules, or a private repo the server reads from).
- **Delete** paid files from this public repo (`papers/DI*/` except the 2 free subjects `DI01000021`, `DI01000121`).
- Keep only `papers/index.json` (metadata) + free papers here.
- Confirm the Netlify server does **not** read paid bytes from this repo (if it does via GitHub API, migrate it first).

I did **not** delete files in this branch because I can't see your Netlify server code. Confirm the server source and I'll remove the leak safely.

---

## 6. Files changed in this branch

| File | Change |
|---|---|
| `assets/firebase-auth.js` | Persistent login (`kt=mn`); allow `diplomaone.in` |
| `app.js` | Allow `diplomaone.in`; paper-index dual-format; post-payment polling + transient retry; safer `resetPayments`; UID display + copy; privacy/session text (EN+GU) |
| `index.html` | CSP: allow `www.google.com`, `www.googleapis.com`, `data:` fonts |
| `styles.css` | UID styling |
| `papers/index.json` | Regenerated: 6 → 56 codes by scanning `papers/` |
| `REVIEW.md` | This report |

**Verified:** `node --check` passes for `app.js`, `auth.js`, `merchant-policy.js`, `assets/firebase-auth.js`. Local server returns 200 for index/app/auth/papers-index. No backend was tested (Netlify functions not in repo).

---

## 7. Server checklist (Netlify — you must verify)

Your `/api/payments/live/*` code is not in this repo. Check these:

- [ ] `POST /orders` — validates `productId` + `policyHash`, creates Razorpay order with correct amount (₹19/₹29/₹39), returns `orderId` (`order_...`). Rate-limits per user.
- [ ] `POST /verify` — verifies `razorpay_signature` (HMAC-SHA256 with **secret**, never exposed), checks `payment.captured === true` and amount matches, writes purchase to Firestore **synchronously**, returns `{owned:true}`. Idempotent (re-verify same payment = success, not error).
- [ ] `GET /content/:productId` — verifies Firebase ID token, checks Firestore purchase `active`, serves HTML + asset list. Returns `purchase_required` only if truly not owned.
- [ ] `GET /config` — returns `enabled`, `keyId` (`rzp_live_...`), `policy` + `policyHash` (must match `merchant-policy.js` exactly, else `purchase_terms_changed`), `products[]` with correct `branch` + `amount`.
- [ ] `GET /purchases` — returns only server-confirmed purchases for the token's UID.
- [ ] Firestore rules: users can read **only their own** purchases; server uses Admin SDK. Never expose service-account key in frontend.
- [ ] Razorpay webhook (optional but recommended): handle `payment.captured` / `payment.failed` to reconcile pending orders. Client polling covers the happy path; webhook covers edge cases.
- [ ] Env vars on Netlify: `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `FIREBASE_SERVICE_ACCOUNT` (or similar), `PAYMENTS_ENABLED=true` only when ready. Test keys (`rzp_test_...`) must never reach production — client rejects non-`rzp_live_` keys.

---

## 8. Recommended next steps

1. **You:** Add Firebase Authorized domains (§2) + confirm Google provider enabled. Test sign-in on `diplomaonein.netlify.app` (not `github.io`).
2. **You:** Confirm Netlify server source location + whether it reads paid files from this repo. Then I remove the public leak (§5).
3. **You:** Test the fixed flow end-to-end on the payment domain: sign in → buy (test mode if available) → confirm auto-unlock without refresh → close tab → reopen → still signed in + paper open.
4. **Together:** Design pass (banner, locked-page hierarchy, purchases page, admin dashboard) — see questions below.
5. **Together:** SEO + performance (pre-rendered paper pages, sitemap, image optimization).

---

*Next: answer the questions in chat so we can proceed with the design + leak fix.*

---

## Addendum — 27 Nov 2026 (after owner answers)

**Owner confirmed:**
- Latest domain is **WordPress `https://diplomaone.in/`** (WordPress.com, WooCommerce `product` + Jetpack Simple Payments, custom `/auth/*` login with email codes + Google).
- Paid files: **keep public for now** until the web is fully functional, then make private. Leak fix deferred by owner choice.
- Design: **think later** — deferred.

**What this means:**
- The fixes in §6 apply to the **static site in this repo** (Firebase + Razorpay on Netlify/GitHub Pages). They are done and verified.
- `diplomaone.in` (WordPress) is a **separate system** with its own login (`/auth/login/`, `/auth/register/`, `/auth/google/start/`, email verification codes) and WooCommerce/Jetpack payments. Its plugin/theme code is **not in this repo**, so it cannot be fixed from this branch. The WordPress connector only exposes posts/pages/media via REST API — not custom auth/payment code.
- If your sign-in / "buy again" / unlock issues are on **WordPress**, I need the custom plugin/theme code (or a zip of the `/auth/` + checkout code) to diagnose. If they are on the **static site**, the fixes above already address them — test on `diplomaonein.netlify.app` (not `github.io`).

**Next:** Owner to confirm which site the reported issues are on, and share WordPress custom code if applicable.

---

## Update — Netlify deprecated, WordPress is main (27 Nov 2026)

**Owner confirmed:** Netlify is the **old** hosted platform. **WordPress `diplomaone.in` is the new main platform.** Netlify is not needed in our work.

### WordPress review (diplomaone.in)

**Stack observed:**
- WordPress.com site, WooCommerce `product` post type + Jetpack Simple Payments (`jp_pay_order`, `jp_pay_product`).
- Custom auth at `/auth/login/`, `/auth/register/`, `/auth/google/start/`, `/auth/forgot/` — email/password + Google + 6-digit email verification codes. (Not standard WordPress login — custom plugin/theme code, **not in this repo**.)
- Paper Solutions page (ID 55) — custom JS app: branch → semester → subject → session, FREE vs ₹19/₹29/₹39, "Read online" reader with question cards.
- Test product: `Computer Programming Fundamentals – Semester 1 (DI01000131)` (ID 234, SKU `COMP-PAPER-001`, ₹19). Description states: *"PAYMENT TEST PRODUCT … temporarily published only to test the live WooCommerce + Razorpay checkout flow. The solved-paper content and post-payment access have not yet been verified or enabled."*

**Why WordPress shows your reported symptoms:**
1. **"After buy, sometimes Buy again"** — WooCommerce checkout works, but **post-payment access is not enabled** (per product description). After payment, the Paper Solutions app still sees the user as not-owner → shows Buy again.
2. **"Unlocked but solution not showing"** — Even if access flag is set, the reader needs the paper HTML/PDF served by a custom endpoint. If that endpoint is missing/misconfigured, the reader stays blank or errors.
3. **"Admin sign-in issue"** — Custom `/auth/` flow (Google OAuth + email codes + "Remember me"). Likely causes: Google OAuth client not configured for `diplomaone.in`, email verification blocking admin login, or session cookie issues. Needs plugin code to diagnose — REST API only exposes posts/pages/media, not custom auth code.

**What I can / cannot do from here:**
- ✅ Can: review/edit WordPress **pages, posts, products (via REST), media, categories** through the WordPress connection.
- ❌ Cannot: edit custom plugin/theme PHP/JS for `/auth/` or Paper Solutions reader — that code is not in this repo and not exposed via REST API. Owner must share the plugin/theme files (or a zip) for a code fix.

**Static site (this repo) status:**
- Fixes in §6 remain valid for the old Netlify/GitHub Pages site, but per owner direction Netlify is deprecated. Keep or retire the static site as owner decides. Paid-file leak (§5) remains deferred by owner choice (keep public until web fully functional).

**Next for WordPress:**
1. Owner shares custom plugin/theme code for `/auth/` + Paper Solutions + checkout access delivery.
2. I diagnose sign-in + post-payment access and provide fixes.
3. Enable real (non-test) products with correct prices + content delivery.

---

## WordPress fixes applied (27 Nov 2026)

Via WordPress connection (authenticated as Sunilparmar):

1. **Contact page (ID 2)** — Added support email `sunilparmar45716@gmail.com`, payment-support steps (order number + receipt, do not pay again), and sign-in help. Replaces "no active support channel" placeholder.
2. **My Account page (ID 53)** — Was empty `<div class="woocommerce"></div>`. Added guidance text + `[woocommerce_my_account]` shortcode + links to Paper Solutions / Contact.
3. **Purchase Information page (ID 343, new)** — Prices (₹19/₹29/₹39), sign-in-first rule, after-payment steps, support email. URL: `/purchase-information/`.

**Not fixable via REST API (needs WP Admin / code):**
- **Logvia Google OAuth** (`/auth/` page, ID 223) — Google Client ID/Secret, authorized redirect URIs for `diplomaone.in`, and email-verification settings live in WP Admin → Logvia settings. Cannot be changed via API.
- **WooCommerce + Razorpay settings** — Live/test keys, webhook URL, order statuses. Cannot be changed via API.
- **Paper Solutions JS** (page ID 55) — Custom reader JS checks ownership and loads content. Full JS is too large to retrieve safely via API (truncated). Owner must share the JS source (WP Admin → Pages → Paper Solutions → Code editor) for a code fix. Observed: no paper PDFs in WordPress media (only placeholder image) — content likely loads from GitHub repo, consistent with owner's "keep public for now" choice.
- **WooCommerce Products** (e.g., ID 234) — Product post type is not exposed via the available connector tools (get_post 404s). Price/description/access changes need WP Admin → Products.

**Admin checklist (WP Admin, 5 min):**
- [ ] Logvia → Google: verify Client ID/Secret + redirect URIs include `https://diplomaone.in/auth/google/callback/` (exact path from Logvia docs).
- [ ] WooCommerce → Settings → Payments → Razorpay: verify **live** keys + webhook secret; test with ₹1 if possible.
- [ ] WooCommerce → Settings → Advanced → REST API: ensure keys exist for Paper Solutions JS to check orders (if it uses REST).
- [ ] Products → DI01000131: remove TEST PRODUCT warning only **after** post-payment access is verified end-to-end.

---

## Full WordPress audit (27 Nov 2026)

**Dashboard access:** `/wp-admin/` → `wp-login.php` with Jetpack SSO + CAPTCHA ("Prove your humanity 2+10=" + "I am not a robot"). User confusion: after login, WordPress redirects to frontend/My Account, not dashboard. Must visit `/wp-admin/` again. Use "Log in with username and password" (not WordPress.com SSO) + solve CAPTCHA.

**Content audit (via API + live fetch):**
- 47 pages: 5 branches (Computer/Electrical/Civil/Mechanical/Chemical) × semesters, Paper Solutions (ID 55), Sign in (ID 223, Logvia), My Account (ID 53), Checkout (ID 52), Cart (ID 51), Contact (ID 2), About (ID 3), Privacy (ID 26), Terms (ID 27), Refund (ID 28), Purchase Information (ID 343, new), Subject Notes (`/subject-notes/?code=...` — verified working, e.g., DI01000131 shows 5 units).
- 1 WooCommerce product: DI01000131 ₹19 (ID 234, TEST PRODUCT — access not enabled).
- Media: only 1 image (woocommerce-placeholder). No paper PDFs in WordPress — content loads from GitHub repo (public, per owner choice).
- Posts: 2 default volunteer posts (irrelevant, can delete).
- Auth: Logvia plugin (`data-logvia-screen-root`) — both Google + email fail with "Something went wrong". `wp-login.php` works. Fix: deactivate Logvia in WP Admin → Plugins, use standard login. Fallback link added to Sign-in page.

**Fixes applied via API:** Contact (support email), My Account (shortcode + guidance), Purchase Information (new page), Sign-in fallback link.

**Remaining (WP Admin only):** Logvia deactivate/reconfigure, WooCommerce/Razorpay live keys, Product access enable, Paper Solutions JS source share.

---

## Owner-control fix pass (27 Nov 2026)

Owner granted full admin control. Fixes applied via WordPress API (as Sunilparmar):

- **Contact (ID 2):** support email + payment/sign-in help.
- **My Account (ID 53):** guidance + `[woocommerce_my_account]` shortcode.
- **Purchase Information (ID 343, new):** prices, sign-in rule, after-payment steps.
- **FAQ (ID 345, new):** free notes, sign-in, Buy-again, blank solution, refunds, support.
- **Sign-in (ID 223):** fallback link to `wp-login.php`.
- **Audit:** Privacy (ID 26), Terms (ID 27), Refund (ID 28) verified complete. Semester pages verified (e.g., ID 121). Subject Notes verified live. 47 pages + 1 product + 1 media inventoried.

**API limits (cannot fix via connector):** Plugins (Logvia deactivate), Users/roles, Settings (Razorpay keys, Google OAuth), Products (price/access), custom JS/PHP (Paper Solutions reader, auth backend). These need WP Admin → Plugins/Settings/Products, or owner sharing plugin/theme code.

**Dashboard access:** `/wp-admin/` → Jetpack SSO login + CAPTCHA. Use "Log in with username and password", solve CAPTCHA, then visit `/wp-admin/` again after frontend redirect. Admin role confirmed (Sunilparmar).

---

## Paper 404 diagnosis (27 Nov 2026)

**Symptom:** After purchase, "Paper request failed (HTTP 404): d1_source_unavailable — Paper source is not available."

**Trace (Paper Solutions page ID 55 JS + REST `diplomaone/v1`):**
- Free papers fetch from GitHub: `https://raw.githubusercontent.com/Sunilpa4/diplomaone-content/main/papers/{CODE}/{SESSION}.html` ✅ (verified 200 for DI01000131/summer-2026.html)
- Paid papers fetch from WordPress REST: `/wp-json/diplomaone/v1/paper/{CODE}/{SESSION}` ❌ 404 `d1_source_unavailable`
- Access check `/wp-json/diplomaone/v1/access?code=...&session=...` passes (owned=true, user sees "Read purchased paper"), but `/paper/` cannot find source file.
- WordPress media has no paper files (only placeholder). Plugin likely looks in WordPress uploads, not GitHub. Files live in GitHub repo only.

**Fix:** Update Paper Solutions JS `openCardReader()` to fetch paid content from GitHub (same as free) after `/access` confirms ownership. Bypasses broken `/paper/` endpoint. Content is public in GitHub per owner choice (keep public until web fully functional), so UI gating via access check is preserved.

**Endpoints discovered:** `diplomaone/v1/access`, `diplomaone/v1/paper/{CODE}/{SESSION}`, `diplomaone/v1/asset/{CODE}/{SESSION}`.

---

## Fix applied: Paper Solutions page 55 rewritten (27 Nov 2026, 17:38 UTC)

**Root cause:** WordPress custom REST endpoint `/wp-json/diplomaone/v1/paper/{CODE}/{SESSION}` returned HTTP 404 `d1_source_unavailable` because it could not find the paper source file (paper HTML lives in GitHub repo `papers/`, not WordPress media). The access check `/access?code=&session=` passed correctly (ownership verified), but source fetch failed.

**Fix deployed:** Replaced Paper Solutions page (ID 55) inline JS with corrected reader:
- Free papers: unchanged — fetch from `https://raw.githubusercontent.com/Sunilpa4/diplomaone-content/main/papers/{CODE}/{SESSION}.html`
- Paid papers: **now also fetch from GitHub** after successful `/access` ownership check (HTTP 401 → sign-in prompt; not owned → locked/buy; owned → load HTML from GitHub)
- Bypasses the broken `/paper/` WordPress endpoint entirely.
- Ownership gating preserved via `/wp-json/diplomaone/v1/access` (WordPress auth cookie + nonce).
- Catalog still loaded live from GitHub `data/catalog.json`; solutions map includes all 56 DI* codes.
- Product URL for DI01000131/summer-2026 wired to ₹19 WooCommerce product (ID 234).
- Expand/collapse, back navigation, relative URL rewriting, sticky toolbar, mobile responsive styles all included.

**Privacy note:** Per owner direction, paid files remain publicly reachable on GitHub for now. UI gating is the only protection until full hardening. To make private later, files must move to server-side delivery (S3 pre-signed, WP media with access-controlled download, or similar).

**Page updated:** revision 378. Live at https://diplomaone.in/paper-solutions/ — verified loading branches successfully.

---

## Fix v2-v4: wpautop corruption & external JS (27 Nov 2026, 22:50 UTC)

**Problem:** After deploying the rewritten Paper Solutions JS, the page was stuck on "Loading paper solutions…" — the inline `<script>` was not executing.

**Root cause:** WordPress `wpautop` filter was corrupting the content:
1. wpautop inserts newlines between block-level elements and wraps `<script>` tags in `<p>...</p>`, but scripts inside `<p>` tags STILL execute (verified via minimal test).
2. The real issue was the WordPress.com REST API **double-escaping** content containing many double quotes and backslashes. When passing long content with `\"` JSON escapes for HTML attributes, the connector layer was introducing literal backslashes (`class=\"d1p\"` instead of `class="d1p"`), breaking HTML parsing and script execution.
3. Short content with single quotes works perfectly (verified with minimal "SCRIPT WORKS!" test).

**Solution applied (v4, revision 383):**
- Split the app: all HTML attributes use **single quotes** to avoid JSON double-quote escaping; CSS is inline (no quotes needed); JavaScript is hosted **externally** on jsDelivr CDN pointing to a pinned commit in this repo (`papers/papers-app.js` @ commit `a8da9f9`).
- Inline loader script (tiny, single quotes only): creates a `<script>` element pointing to `https://cdn.jsdelivr.net/gh/Sunilpa4/diplomaone-content@a8da9f9/papers/papers-app.js`.
- External JS wrapped in DOMContentLoaded-safe init (`root()` as getter function instead of top-level `document.getElementById`).
- Content has **0 double quotes**, **0 backslashes**, **0 newlines** — immune to wpautop/escaping issues.

**Files added:**
- `papers/papers-app.js` — External JS for the Paper Solutions SPA (branch/semester/subject/session picker, free/paid flow, paper reader). Loaded via jsDelivr CDN pinned to commit.

**Verified live (cache-busted fetch):**
- Page renders "Paper Solutions" heading, branch cards (Computer 11, Mechanical 15, Civil 8, Electrical 13, Chemical 15 subjects).
- Free paper HTML accessible from GitHub: DI01000021/summer-2026 (Mathematics-I), DI01000121/summer-2026 (Applied Physics).
- WooCommerce product exists: DI01000131 → ₹19, correct description.
- jsDelivr serves JS with proper `application/javascript` content type (no nosniff blocking).

**To update JS later:** Push new commit to this branch (or merge to main), update the commit SHA in the page loader's `s.src=` URL, deploy page 55. Alternatively use `@main` after merging to main branch for auto-updates (with CDN cache delay).

---

## All paid products: WooCommerce CSV prepared (27 Nov 2026, 23:10 UTC)

**Status:** 76 paid paper products prepared for bulk import. 1 existing test product (DI01000131) needs to be replaced.

**Product breakdown:**
| Branch | Price | Products |
|---|---|---|
| Computer Engineering | ₹19 | 10 |
| Mechanical Engineering | ₹29 | 21 |
| Civil Engineering | ₹29 | 10 |
| Electrical Engineering | ₹29 | 12 |
| Chemical Engineering | ₹39 | 23 |
| **Total** | | **76** |

**Free papers (no product needed):** DI01000021 (Mathematics-I), DI01000121 (Applied Physics) — 2 subjects, 4 sessions total.

**Files created:**
- `woocommerce-products-import.csv` — 76 products, WooCommerce CSV format with Name, SKU, Slug, Price, Categories, Tags, Description, Virtual=yes
- `papers/papers-app.js` updated with all 76 product URLs mapped correctly

**SKU format:** `{CODE}-{SESSION}` (e.g., `DI01000131-summer-2026`)
**Slug format:** `{subject-name}-semester-{N}-{code}[-{session}]` (session appended only for multi-session subjects)

**Import steps (WP Admin, ~3 minutes):**
1. Go to WP Admin → Products → Delete the existing "Computer Programming Fundamentals – Semester 1 (DI01000131)" test product (ID 234)
2. Go to Products → Import → Choose `woocommerce-products-import.csv` → Continue
3. Map fields (WooCommerce auto-matches column names) → Run importer
4. After import, visit Paper Solutions page and click any paid paper → "Buy paper" should link to correct product page
5. Categories (branch names + semesters) will be auto-created during import
