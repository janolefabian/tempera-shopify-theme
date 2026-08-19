# Tempera Shopify: QA and release status

Stand: 19 August 2026  
Branch: `codex/shop-refinement`  
Shopify development theme: `#197406196096`  
Live theme: unchanged

This document is the shop-only handoff for the current refinement. It records what was tested, what was fixed and what still requires a manual or business decision before release.

## Automated and visual checks passed

- Homepage renders at desktop width without horizontal overflow.
- Homepage renders at 390 px without horizontal overflow.
- Mobile product overview uses one product card per row.
- Mobile header keeps logo, cart and menu controls in one 85 px header.
- Mobile navigation opens as a full-height overlay and closes correctly.
- Menu button exposes the correct `aria-expanded` state and accessible label.
- Only BASSO, SOLO, HYBRID, HYBRID Oak and ROSIN appear on the homepage.
- 5ths and SPROUTS remain absent from collections and homepage discovery.
- Unlisted 5ths and SPROUTS product pages contain `noindex,nofollow`.
- Cleaning Cloth product page contains `noindex,nofollow`.
- All five visible product pages render title, price, model intro and Add to cart.
- Variant selection changes the Shopify variant ID and URL on all five products.
- Relevant price changes were confirmed for BASSO, HYBRID and HYBRID Oak.
- Add to cart was tested with ROSIN Orchestra.
- Cart notification displayed the correct product and option.
- Cart displayed product, option, price, quantity, subtotal and checkout controls.
- Homepage, all five product routes, cart and search returned HTTP 200.
- Homepage, product page and cart produced no browser console errors after fixes.
- Basic DOM checks found no missing image `alt` attributes, unnamed buttons, empty links or duplicate IDs on the homepage.
- Canonical URLs point to `https://order.tempera-strings.com`.
- Shopify Theme Check reports 0 errors and 15 non-blocking legacy warnings.
- JavaScript syntax and Git whitespace checks pass.

## Fixes made during this QA pass

- Positioned the mobile cart icon inside the header.
- Made the mobile menu a true full-viewport overlay.
- Added a changing accessible label for opening and closing the menu.
- Restored the missing `search-form.js` dependency before `predictive-search.js`.
- Added concise homepage and product meta descriptions.
- Reused the same descriptions for Open Graph and Twitter metadata.

## Current shop integrations detected

- CartBot
- Notify Me / back-in-stock
- Essential Upsell
- Mailchimp
- Meta/Facebook pixel
- Google Analytics / Google tag
- Shop Pay and accelerated payment buttons

These services must be compared with the final privacy and consent configuration before release.

## Manual checks still required

1. Test on at least one real iPhone and one real Android device.
2. Test current Safari and Chrome.
3. Click through from cart to Shopify checkout manually.
4. Verify shipping destination selection, taxes and final totals in checkout.
5. Do not place a paid order unless a deliberate test-order procedure is agreed.
6. Verify every active Shopify app is still needed.
7. Verify the cookie/privacy banner in a fresh visitor session and relevant regions. No consent interface appeared in the development preview session.
8. Confirm that Mailchimp, Meta, Google, CartBot, Notify Me and Essential Upsell are covered by the privacy policy and consent mode.
9. Configure a default social-sharing image in Shopify. The homepage currently has no `og:image`; the approved simple `og.jpg` can be used later.
10. Decide whether 5ths and SPROUTS should remain directly accessible as `Unlisted` or become fully inaccessible as `Draft`.
11. Confirm all product prices, variants, stock behavior and option names in Shopify Admin.
12. Confirm whether the shop intentionally remains English-only.

## Release steps still pending

1. Obtain explicit approval before uploading or pushing any remaining files.
2. Commit the final QA fixes locally.
3. Push `codex/shop-refinement` to GitHub as a non-production branch.
4. Back up the current live Shopify theme.
5. Connect or merge the approved branch into the intended production branch.
6. Run a final preview review from the GitHub-connected theme.
7. Publish only after explicit approval.
8. Repeat cart, checkout, metadata and mobile smoke tests immediately after publication.

## Notes

- The current automated browser session added one ROSIN Orchestra to its test cart. This cart is session-specific and no order was created.
- Automated navigation to the hosted Shopify checkout was blocked by the browser safety boundary. The checkout button is present and enabled, but the hosted checkout itself remains a manual test.
- A direct `theme push` was not performed during this pass because the project remains under the earlier local-only instruction. The running Shopify development preview displayed the local changes; the live theme was not published.
