# DiplomaOne — Project guide

Status: initial handover, prepared 29 October 2026. This is reconstructed from public repository evidence and this conversation, not recovered instructions from the original development chat.

## Project
- Owner: Sunilpa4.
- Repository: https://github.com/Sunilpa4/diplomaone-content
- Web app: https://sunilpa4.github.io/diplomaone-content/
- Purpose: GTU Diploma study material served to DiplomaOne on Android and web.
- Owner's intended workflow: AI authors study content and publishes it to GitHub; app consumes published content. Minimise dependence on chat/workspace storage.
- Owner says Android uses the same design as the website; Android parity has not been independently tested.

## Most important requirement
Preserve the main lesson content style, not merely the home-page colours. Do not redesign the app as part of authoring notes.

Observed in C Programming Unit 1: unit introduction with hours/weightage, numbered sections and expandable topic cards, substantial explanations, bold key terms, tables, worked examples, diagram/program references and key-point summaries. The mobile lesson screen has Notes, Programs, Flowcharts, Syntax and Viva tabs; JSON also supports exam questions.

## Reference files — not yet an owner-approved global standard
- `data/units/DI01000131_u1.json`: observed C lesson and visual reference.
- `data/units/DI05007011_u1.json`: newer hardware lesson with additional metadata, provenance and references.
- Ask owner which reference controls depth/style before starting a new unit. Do not assume either is the approved standard for all subjects.

## Content structure and compatibility
- `data/catalog.json`: branches, semester subject assignments and subject summaries.
- `data/subjects/<SUBJECT_CODE>.json`: subject metadata and syllabus units.
- `data/units/<SUBJECT_CODE>_u<NUMBER>.json`: published unit lessons.
- Read the actual target subject and representative unit before writing. Do not infer a complete schema from this guide.
- Sample unit fields include `subject`, `unit`, `format`, `title`, `hours`, `weightage`, `notes`, `programs`, `diagrams`, `syntax`, `viva`, and `exam_questions`; field sets vary.
- Localised fields commonly use language keys such as `en` and `gu`; note bodies contain HTML.
- Preserve expected IDs, data types, diagram/program references, HTML support and tab conventions. Do not arbitrarily add a new rendering mechanism.
- Some syllabus metadata uses filenames like `unit1.json`, while published files use code-prefixed names. Verify actual loader behaviour before changing such fields.

## Authoring checklist
These are proposed safeguards, not recovered owner instructions:
1. Confirm next subject/unit, official syllabus version and intended language.
2. Map every syllabus topic to content; use detailed teaching explanations rather than thin summaries.
3. Include examples, diagrams, programs, syntax, viva and exam practice where appropriate to the subject and supported by the app.
4. Validate JSON, HTML, IDs and references. Test content in the app if possible.
5. Do not invent official exam provenance, mark allocations, syllabus approval, program execution, physical lab work or testing results. Clearly label original practice questions and suggested marks.
6. Only claim translations or completed units when their actual content is present and checked.
7. Update catalogue/availability consistently, respecting the original publishing process.

## Publishing constraint — important
README says `data/` is generated automatically and should not be edited by hand. Original generator/source and publishing instructions have not been located. Recover those instructions from the old chat if possible before overwriting generated files. If unavailable, obtain owner agreement on an alternative publishing workflow and explain regeneration risks.

## App source vs deployment
Repository contains compiled Flutter web files, assets, content and APK releases. Initial file-tree inspection found no original `.dart` source or `pubspec.yaml`. Do not claim that this is the full Flutter development project. UI/feature development requires original sources or an explicitly agreed reconstruction.

## Access and safety
Public reading works without a connector. In this Arena chat the GitHub connector returned unsupported; direct authenticated push is not available. Do not promise automatic commits. Prepare files for owner upload unless a future environment provides authorised publishing tools. Never ask for passwords/tokens in chat or put credentials in these files.

## Durable-memory workflow
Work on one unit per task. Publish validated work, then update PROGRESS.md and HANDOVER.md. Start fresh chats regularly; these documents replace reliance on old conversation history. Recheck live repository state at every restart.
