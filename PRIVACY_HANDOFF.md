# Tempera privacy policy: historischer Shopify-Abgleich

Statushinweis aktualisiert am 11.09.2026. Historischer Inhalt vom 20.08.2026.

## Bereits gewählter Synchronisierungsweg

**Der unten erhaltene Abgleich ist historisch. Insbesondere die Aufforderung, einen Synchronisierungsweg erst auszuwählen, ist überholt.** Die Aussagen zu damaligen Entwürfen, fehlenden Inhalten und erforderlichen Änderungen sind keine Bestandsaufnahme oder Handlungsfreigabe für den heutigen Shop. Aktueller Einstieg: [SHOP_QA.md](SHOP_QA.md).

Laut der frisch geprüften Übergabe vom 11.09.2026 gilt:

- Kanonische englische Quellen im separaten Astro-Repo: `content/impressum/default.en.md` und `content/agbs/default.en.md`. Kontakt: `contact@tempera-strings.com`; Privacy-Anker: `id="privacy-policy"`.
- Der bestehende Sync für `LEGAL_NOTICE`, `PRIVACY_POLICY` und `TERMS_OF_SERVICE` ist in `/Applications/MAMP/htdocs/Tempera2026/SHOPIFY_POLICY_SYNC.md` beschrieben.
- Der dortige Workflow `.github/workflows/shopify-policy-sync.yml` reagiert auf Änderungen dieser beiden Quelldateien auf `main` oder auf `workflow_dispatch` und nutzt das GitHub-Environment `shopify-production`. `main` gehört hier zum Astro-Repo; der Default-Branch des Shopify-Theme-Repos heißt `master`.
- Die Environment-Secrets heißen `SHOPIFY_POLICY_CLIENT_ID` und `SHOPIFY_POLICY_CLIENT_SECRET`. Werte weder lesen noch ausgeben. Ob ein Required Reviewer tatsächlich eingerichtet ist, wurde bei der Übergabe nicht geprüft.
- Der archivierte Shopify-Task dokumentiert einen erfolgreichen produktiven Policy-Sync am **24.08.2026**. Diese Übernahme hat den Workflow, die veröffentlichten Rechtstexte oder dessen erneute Ausführung nicht geprüft und keinen Sync ausgelöst.

Quellenpflege, erneuter Policy-Abgleich und rechtliche Freigaben gehören zum zuständigen Website-/Rechtstexte-Task. Der Shopify-Task führt keinen zweiten Policy-Editor ein. Aktive Apps/Pixel, Consent-Datenverkehr und mögliche Shopify-Network-Intelligence-/Marktanforderungen sind nicht abschließend geprüft. Neue Widerrufsanforderungen warten auf Klärung; historische Tests ersetzen keine aktuelle Rechtsfreigabe. Bei dieser Übernahme werden keine Rechtstexte oder Privacy-Einstellungen verändert.

## Historischer Abgleich vom 20.08.2026

Der folgende englische Inhalt bleibt als damaliger Prüfstand erhalten. Auch dortige Formulierungen wie „current“, „must“, „required“ und „after approval“ beziehen sich auf den damaligen Stand. Die damaligen Alternativen und Token-Hinweise im letzten Abschnitt beschreiben nicht den inzwischen gewählten Workflow.

### Goal

The privacy policy on the main Tempera website should be the canonical content source for both `tempera-strings.com` and `order.tempera-strings.com`. The Shopify footer already points to that policy. Shopify's own policy route must remain accurate until the canonical policy is finalized and a single-source workflow is selected.

### Already covered by the main policy draft

- Both the editorial website and `order.tempera-strings.com`
- Tempera Strings GmbH as controller
- Shopify International Limited and Shopify subprocessors
- Shop, cart, order, customer, delivery, payment and transaction data
- Google & YouTube, Meta/Facebook & Instagram, Mailchimp, Notify Me! and Essential Upsell
- Shopify Payments, PayPal, cards, Apple Pay and Google Pay
- International transfers, retention, legal bases and data-subject rights
- Consent requirement for non-essential shop pixels

### Required reconciliation before using it as the only policy

1. Use `contact@tempera-strings.com` everywhere, including controller details, rights requests, metadata and the Shopify policy.
2. Add CartBot if it remains active. Its current purpose appears to be automatically adding a promotional item or gift to the cart; confirm its actual data access in Shopify Admin before describing it.
3. State that Shopify's cookie banner and Customer Privacy API store and apply the shop visitor's choices, and that the choices can be reopened through “Cookie preferences” in the shop footer.
4. Remove wording that refers visitors to a second full privacy notice in the shop once the canonical policy is the only maintained notice.
5. Confirm all active apps, pixels, payment methods, shipping services and fraud-prevention services against the final text.

### Shopify Network Intelligence

Check **Shopify Admin → Settings → Customer privacy → Shopify Network Intelligence**.

If it is enabled, the canonical policy must additionally explain that:

- Shopify processes customer data to provide Enhanced Services based on interactions with this store, other merchants and Shopify;
- these services can include personalization, more relevant advertising and measurement of store and advertising interactions;
- information can be shared with Shopify and other service providers, including recipients in other countries;
- customers can withdraw consent or object where applicable;
- the policy links to Shopify's Consumer Privacy Policy and to `https://privacy.shopify.com`.

The current main-site draft links to the Consumer Privacy Policy, but it does not yet contain the full Enhanced Services disclosure or the Shopify privacy-portal link.

### Data-sharing opt-out page

If Shopify marks an opt-out page as required for active US markets, enable it and add it to a shop menu. Link that opt-out method from the canonical policy. The main consequence is that opted-out visitors cannot be used for the affected targeted-advertising or cross-merchant intelligence purposes; normal ordering remains available.

### Recommended single-source workflow (historical, superseded)

Do not disable Shopify's automated privacy policy before the canonical main-site version is final and published.

After approval, use the main-site Markdown file as the source of truth and choose one of these implementations:

1. **One-way synchronization:** Render the approved Markdown to HTML and update Shopify's privacy-policy body through the Admin GraphQL `shopPolicyUpdate` mutation. This requires a private token with the `write_legal_policies` scope. The website file remains the only edited source, while Shopify checkout and the cookie banner still expose the complete policy directly.
2. **Reviewed reference page:** Replace Shopify's policy body with a short, clearly linked reference to the canonical policy. This is simpler but adds an extra click and should be legally reviewed before use.

The one-way synchronization is the more robust option if a suitable Shopify Admin API token can be stored securely in the deployment environment.
