# Tempera privacy policy: Shopify handoff

Stand: 20 August 2026

## Goal

The privacy policy on the main Tempera website should be the canonical content source for both `tempera-strings.com` and `order.tempera-strings.com`. The Shopify footer already points to that policy. Shopify's own policy route must remain accurate until the canonical policy is finalized and a single-source workflow is selected.

## Already covered by the main policy draft

- Both the editorial website and `order.tempera-strings.com`
- Tempera Strings GmbH as controller
- Shopify International Limited and Shopify subprocessors
- Shop, cart, order, customer, delivery, payment and transaction data
- Google & YouTube, Meta/Facebook & Instagram, Mailchimp, Notify Me! and Essential Upsell
- Shopify Payments, PayPal, cards, Apple Pay and Google Pay
- International transfers, retention, legal bases and data-subject rights
- Consent requirement for non-essential shop pixels

## Required reconciliation before using it as the only policy

1. Use `contact@tempera-strings.com` everywhere, including controller details, rights requests, metadata and the Shopify policy.
2. Add CartBot if it remains active. Its current purpose appears to be automatically adding a promotional item or gift to the cart; confirm its actual data access in Shopify Admin before describing it.
3. State that Shopify's cookie banner and Customer Privacy API store and apply the shop visitor's choices, and that the choices can be reopened through “Cookie preferences” in the shop footer.
4. Remove wording that refers visitors to a second full privacy notice in the shop once the canonical policy is the only maintained notice.
5. Confirm all active apps, pixels, payment methods, shipping services and fraud-prevention services against the final text.

## Shopify Network Intelligence

Check **Shopify Admin → Settings → Customer privacy → Shopify Network Intelligence**.

If it is enabled, the canonical policy must additionally explain that:

- Shopify processes customer data to provide Enhanced Services based on interactions with this store, other merchants and Shopify;
- these services can include personalization, more relevant advertising and measurement of store and advertising interactions;
- information can be shared with Shopify and other service providers, including recipients in other countries;
- customers can withdraw consent or object where applicable;
- the policy links to Shopify's Consumer Privacy Policy and to `https://privacy.shopify.com`.

The current main-site draft links to the Consumer Privacy Policy, but it does not yet contain the full Enhanced Services disclosure or the Shopify privacy-portal link.

## Data-sharing opt-out page

If Shopify marks an opt-out page as required for active US markets, enable it and add it to a shop menu. Link that opt-out method from the canonical policy. The main consequence is that opted-out visitors cannot be used for the affected targeted-advertising or cross-merchant intelligence purposes; normal ordering remains available.

## Recommended single-source workflow

Do not disable Shopify's automated privacy policy before the canonical main-site version is final and published.

After approval, use the main-site Markdown file as the source of truth and choose one of these implementations:

1. **One-way synchronization:** Render the approved Markdown to HTML and update Shopify's privacy-policy body through the Admin GraphQL `shopPolicyUpdate` mutation. This requires a private token with the `write_legal_policies` scope. The website file remains the only edited source, while Shopify checkout and the cookie banner still expose the complete policy directly.
2. **Reviewed reference page:** Replace Shopify's policy body with a short, clearly linked reference to the canonical policy. This is simpler but adds an extra click and should be legally reviewed before use.

The one-way synchronization is the more robust option if a suitable Shopify Admin API token can be stored securely in the deployment environment.
