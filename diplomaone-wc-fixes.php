<?php
/**
 * DiplomaOne WooCommerce Fixes
 * Add this via WP Admin → Plugins → Code Snippets → Add New,
 * or in your child theme's functions.php.
 *
 * Fixes:
 * 1. Auto-complete virtual (digital) orders after successful payment
 * 2. Disable guest checkout (require sign-in to purchase)
 */

// 1. Auto-complete virtual orders after payment
add_filter('woocommerce_payment_complete_order_status', 'd1_auto_complete_virtual_orders', 10, 2);
function d1_auto_complete_virtual_orders($status, $order_id) {
    $order = wc_get_order($order_id);
    if (!$order) return $status;
    
    // Only auto-complete if all items are virtual
    $all_virtual = true;
    foreach ($order->get_items() as $item) {
        $product = $item->get_product();
        if ($product && !$product->is_virtual()) {
            $all_virtual = false;
            break;
        }
    }
    
    if ($all_virtual) {
        return 'completed';
    }
    return $status;
}

// Also handle orders that are "processing" - auto-complete on thank-you page for virtual orders
add_action('woocommerce_thankyou', 'd1_complete_virtual_on_thankyou');
function d1_complete_virtual_on_thankyou($order_id) {
    if (!$order_id) return;
    $order = wc_get_order($order_id);
    if (!$order) return;
    if ($order->get_status() !== 'processing') return;
    
    $all_virtual = true;
    foreach ($order->get_items() as $item) {
        $product = $item->get_product();
        if ($product && !$product->is_virtual()) {
            $all_virtual = false;
            break;
        }
    }
    
    if ($all_virtual) {
        $order->update_status('completed', 'Auto-completed virtual order (paper purchase).');
    }
}

// 2. Disable guest checkout (users must sign in to buy papers)
add_filter('woocommerce_checkout_registration_required', '__return_true');
add_filter('pre_option_woocommerce_enable_guest_checkout', function($val) { return 'no'; });
