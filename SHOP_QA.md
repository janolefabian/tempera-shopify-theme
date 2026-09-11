# Tempera Shopify: Einstieg und QA

Stand: 11.09.2026. Die Shopify-Editor-Änderungen aus `origin/master` sind übernommen. Die anschließend vorbereiteten Produktinformationen wurden nach ausdrücklicher Nutzerfreigabe veröffentlicht und auf allen vier öffentlichen Produktseiten geprüft. „Size & fit“ steht standardmäßig eingeklappt unter „More Info“. Beide Dokumentationsänderungen bleiben erhalten.

## Frisch im eigenen Checkout bestätigt

- Arbeitsordner: `/Users/jean/.codex/worktrees/46f0/Tempera-Shopify-Theme`.
- Checkout: Branch `codex/approved-product-information`. Basis der Editor-Übernahme: `b6619e6a2d9b8b9610d22bee77c3637a8c5bbfcb`. Der Produkttext-Commit `a9f7cb30dfadf6ef51a821345c7e1f5ffee157a1` wurde auf `origin/master` veröffentlicht. Die Dokumentation wird gesondert fortgeschrieben; den aktuellen HEAD bei Arbeitsbeginn mit Git prüfen.
- Repository: `https://github.com/janolefabian/tempera-shopify-theme.git`. Lesende Remote-Abfragen bestätigen `master` als Default-Branch, vor Veröffentlichung bei `b6619e6`, danach bei `a9f7cb3`; `codex/shop-refinement` steht weiterhin bei `cdd8d88dad97843867f4c1f6e2b5a5c9a8e46f63`. Das unveröffentlichte Preview ist daher nicht als Vorschau des aktuellen `master` zu behandeln.
- Die beiden Shopify-Editor-Commits `ebd1000` und `b6619e6` vom 11.09.2026 wurden übernommen. Gegenüber dem vorherigen HEAD `cdd8d88` ändern sie ausschließlich `templates/index.json`: eine zusätzliche Klassik-Gruppe und deren Eintrag in der Gruppenreihenfolge. Die später beauftragten lokalen Produkttextkorrekturen sind unten gesondert dokumentiert.
- Die lokalen Änderungen an `SHOP_QA.md` und `PRIVACY_HANDOFF.md` wurden vor der Übernahme gesichert und danach bytegleich bestätigt. Anschließend wurde nur dieser Übergabestatus fortgeschrieben; `PRIVACY_HANDOFF.md` bleibt gegenüber der ersten Übernahme unverändert.
- Basis `b6619e6`: 291 versionierte Theme-Dateien unter `assets`, `blocks`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`. Mit dem veröffentlichten Produktinformations-Snippet sind es 292 Theme-Dateien.
- Im Code und in der Commit-Historie bereits enthalten: Legacy-Design-Refinement, Collection-basierte Produktsichtbarkeit, eine Produktkarte pro Zeile auf Mobilgeräten, mobile Navigation und Warenkorb, Privacy-Footer, Policy-Seitenrahmen, Vier-Modelle-Überschrift und B2B-VAT-Text. Diese Anpassungen sind keine ausstehenden Veröffentlichungsarbeiten.
- Die ursprünglichen Statusdateien stammen vom 20.08.2026 und wurden bei der ersten Übernahme korrigiert. Ihre damaligen Aussagen zu einer noch ausstehenden Veröffentlichung sind überholt.

## Übernommener Live-Abgleich vor den Editor-Änderungen

Diese historischen Befunde stammen aus der Übergabe vom 11.09.2026 zu `cdd8d88`, vor den späteren Editor-Änderungen. Der neue Live-Dateiabgleich vor und nach der Veröffentlichung ist unten gesondert dokumentiert.

- Store: `tempera-store.myshopify.com`. Öffentliche Domain: [order.tempera-strings.com](https://order.tempera-strings.com).
- Live-Theme: `145433461043`, Name `Tempera Theme on Github`.
- Unveröffentlichtes GitHub-Preview: `197620662656`, Name `tempera-shopify-theme/codex/shop-refinement`.
- Der lesende Live-Download nach `/private/tmp/tempera-shop-live-audit.EMTGBv` ergab gegenüber `cdd8d88` 291 lokale und 291 Live-Dateien: 209 bytegleich, 82 JSON-Dateien ausschließlich mit Kommentar-, Formatierungs- oder Escaping-Unterschieden. Nach JSON-Inhaltsvergleich keine inhaltlichen Unterschiede und keine einseitig vorhandenen Theme-Dateien. **Der damalige lokale Theme-Code entsprach dem damaligen Live-Stand.** Der spätere vollständige Abgleich von `b6619e6` vor Veröffentlichung bestätigte ebenfalls inhaltliche Gleichheit, siehe Veröffentlichungsnachweis unten.
- Die GitHub-Verknüpfung wurde nicht erneut im Admin gelesen. Ihre Produktionswirkung ist inzwischen durch die erfolgreiche Übernahme des `master`-Commits `a9f7cb3` im Live-Theme und auf den öffentlichen Seiten bestätigt. Jeden Push nach `master` als Live-Eingriff behandeln.
- An den früheren Ports 9292/9293 lief bei der Übergabe kein Server. Die alte Development-Theme-ID `197406196096` fehlt in der aktuellen Theme-Liste und darf nicht wiederverwendet werden.
- Gleicher Theme-Code ist keine vollständige Kopie von Shopify-Produkten, Collections, Preisen, Bestand, Märkten, Steuern, Apps oder Policys.

## Eigene lesende Prüfung nach den Editor-Änderungen vom 11.09.2026

- Die öffentliche [Startseite](https://order.tempera-strings.com/) zeigt nach bewusstem Verlassen des noch aktiven Preview-Modus wieder alle fünf Karten: HYBRID, HYBRID Oak, BASSO, SOLO und ROSIN. Sichtbare Gruppenreihenfolge: Jazz, Klassik, Zubehör. Die bisherige Unsicherheit zur fehlenden BASSO-/SOLO-Anzeige auf der öffentlichen Homepage ist damit erledigt.
- In `templates/index.json` bestehen jetzt vier Gruppen in dieser Reihenfolge: `classical`, `jazz`, `group_MCdd4B`, `accessories`. Die zwei Klassik-Zuordnungen sind:

| Block | Zugeordnete Collection | Frisch geprüfter Befund |
| --- | --- | --- |
| `classical`, bisher vorhanden | `tempera-strings-for-classical-music` | [Alte Collection-Adresse](https://order.tempera-strings.com/collections/tempera-strings-for-classical-music) zeigt „404 / PAGE NOT FOUND“. Block bleibt konfiguriert, erscheint aber nicht auf der öffentlichen Homepage. |
| `group_MCdd4B`, neu hinzugefügt | `tempera-hybrid-jazz-double-bass-strings-kopie` | [Neue Collection-Adresse](https://order.tempera-strings.com/collections/tempera-hybrid-jazz-double-bass-strings-kopie) ist erreichbar und enthält BASSO und SOLO. Die Homepage zeigt diese Gruppe als „Strings for Classical Music“. |

- `sections/tempera-product-groups.liquid` rendert Gruppen nur bei `products_count > 0`. Das erklärt zusammen mit den beobachteten Seiten, warum die alte, nicht erreichbare Zuordnung keine zweite sichtbare Klassik-Gruppe erzeugt. Der alte Block wurde ausdrücklich nicht entfernt oder umgestellt.
- [Unveröffentlichtes Preview](https://order.tempera-strings.com/?preview_theme_id=197620662656): Die Vorschauleiste bestätigt `tempera-shopify-theme/codex/shop-refinement` als **Draft**. Auch bei dieser erneuten Prüfung zeigt es noch ausschließlich HYBRID, HYBRID Oak und ROSIN. Erst „Exit preview“ führt zur aktuellen öffentlichen Übersicht mit BASSO/SOLO. Ein fehlender Preview-Parameter in der URL allein beweist daher keinen Live-Modus.
- Desktop-Sichtprüfung und Seitenausgabe bestätigen die neue Gruppe. Kein vollständiger Vergleich von Preview und Live, keine aktuelle Mobil-/Checkout-QA, kein Warenkorb verändert, kein Kauf und keine Änderung an Shop-Einstellungen.

## Produktinformationen: veröffentlicht und live geprüft

Grundlage sind Jeans bestätigte Angaben, die deutsche und englische Website-Fassung bei Commit `2ea7d36fcd59bbd63bb3013f4765b395d1f09e8e` und `/Users/jean/.codex/worktrees/a9a7/Tempera2026/outputs/shop-product-copy-adjustments-2026-09-11.md`. Die Produktquellen liegen dort unter `content/06.products/{01.basso,02.solo,03.hybrid,04.oak}/orderdetail.{de,en}.md`; die Längenberatung zusätzlich in `content/04.faq/faq.en.md`. Diese Quellen wurden nur gelesen.

- Der direkte Browser-Abruf vor der Korrektur bestätigte auf allen vier öffentlichen Shopseiten noch `Tension: approx. 24 kg (53 lbs)`. Dieser Wert wurde inzwischen ersetzt. Die englischen B2B-Texte sind bereits korrekt. Ältere Suchmaschinen-Abbilder wurden verworfen.
- Alle vier Shopseiten liefern `lang="en"` und keine Sprachalternativen. Der zusätzliche Aufruf `/de/products/tempera-basso` zeigt eine englische 404-Seite. Deutsche Theme-Locale-Dateien existieren für Bedienelemente, belegen aber keine veröffentlichte deutsche Produktfassung. Deshalb nur die bestehende englische Shopfassung korrigiert; keine neue Sprache aktiviert.
- Ursache des identischen Datenblocks: `collapsible_row_VcGjH4` in `collapsible_content_4RkQHU` enthält denselben statischen Text in `templates/product.json`, `templates/product.hybrid.json` und `templates/product.hybrid-oak.json`. BASSO und SOLO verwenden die gemeinsame Standardvorlage, bestätigt durch dieselbe Live-Template-ID `18192151413043`; HYBRID nutzt `23255093674291`, Oak `26981610422656`.

| Modell | Veröffentlichte und direkt geprüfte technische Angaben |
| --- | --- |
| BASSO | Durchschnittlich 24.5 kg / 54 lbs pro Saite im Viersaitersatz; E/G je ca. 25 kg, A/D je ca. 24 kg |
| SOLO | Durchschnittlich 24.5 kg / 54 lbs pro Saite im Viersaitersatz; F# B E A von tief nach hoch; keine E/A/D/G-Einzelspannungen |
| HYBRID | Durchschnittlich 24.5 kg / 54 lbs pro Saite im Viersaitersatz; E/G je ca. 25 kg, A/D je ca. 24 kg |
| HYBRID Oak | Durchschnittlich 23.5 kg / 52 lbs pro Saite im Viersaitersatz; keine unbestätigten Einzelspannungen |

- Bei allen vier Modellen: 104 cm schwingende Saitenlänge ausdrücklich als Berechnungsgrundlage des Saitenzugs. Material und Schlaufe entsprechen den freigegebenen Website-Angaben. Keine Größenbegrenzung daraus abgeleitet.
- Unter „More Info“ im standardmäßig geschlossenen Bereich „Size & fit“: Standardlänge passt für die meisten Kontrabässe; bei besonders kleinen/großen Bässen vor Bestellung an `contact@tempera-strings.com` wenden. Gemeinsam passende vorrätige Länge oder mögliche Sonderanfertigung prüfen, ohne zusätzliche Verfügbarkeitszusage oder Längenrechnung.
- SOLO-Einleitung ergänzt um die Stimmung und den Ganztonabstand zu E A D G. Oak-Einleitung ergänzt um die deutlich leichtere Bogenansprache gegenüber Darm, aber weniger unmittelbare Ansprache gegenüber regulärem HYBRID.
- Die bestehenden „More Information“-Zeilen verlinken nun jeweils auf die direkt geprüfte englische Website-Produktseite unter `https://tempera-strings.com/en/products/` mit `basso`, `solo`, `hybrid` oder `oak`.
- Umsetzung: `snippets/tempera-product-information.liquid` unterscheidet ausschließlich diese vier Produkt-Handles. In den drei Vorlagen sind die bestehenden technischen, Kontakt- und weiterführenden Zeilen auf die passende modellabhängige Ausgabe eingestellt. Die Kontaktzeile heißt bei den vier bestätigten Modellen „Size & fit“; der ausführliche Passformtext wurde auf Nutzerwunsch aus dem Bereich bei Preis und Varianten entfernt. `sections/collapsible-content.liquid` erhält dafür die Inhaltsauswahl; `sections/main-product.liquid` die knappen Hinweise nahe der Bestellung. Die alten Zeilentexte bleiben ausschließlich als Rückfall für andere Produkte erhalten. Keine produktübergreifende Annahme für 5ths, SPROUTS, ROSIN oder unbekannte Modelle.
- Gestaltung, Accordion-Struktur, CSS, Preise, Varianten, Verfügbarkeit, Warenkorb, B2B-Text und Collection-Zuordnungen unverändert. Die alte tote Klassik-Zuordnung wird für die aktuelle Anzeige nicht benötigt, bleibt aber mangels Bereinigungsauftrag bestehen; die neue Collection-Zuordnung speist die Startseitenkarten.
- Lokal geprüft: Liquid-Renderausgabe aller vier Modelle gegen die exakten freigegebenen technischen EN-Texte; korrekte Modellverlinkungen und Bestellhinweise; keine SOLO-/Oak-Einzelwertverwechslung; unveränderte andere Accordion-Inhalte und Rückfälle für fünf weitere Produkt-Handles sowie fehlenden Produktkontext. Vorlagendaten außerhalb der drei Inhaltsauswahlen sind identisch mit HEAD. Nach der Umplatzierung wurde geprüft, dass der Passformtext nur im Accordion steht und die Kontaktzeile anderer Modelle unverändert bleibt.
- Frischer Theme Check vor und nach der Änderung: jeweils 30 `MatchingTranslations`-Fehler und 16 bestehende Warnungen, keine neuen Befunde. Kein grüner Gesamtstatus. Die vorbereitete lokale Darstellung wurde zunächst vom Nutzer angesehen und anschließend zur Veröffentlichung freigegeben. Frische Live-Prüfungen sind unten dokumentiert.
- Auf Wunsch lokale Ansicht gestartet: `http://127.0.0.1:9292/products/tempera-basso`, mit Modellwechsel für alle vier Seiten. Statische öffentliche Seitenansichten mit lokal gerenderten Produkttexten und den CSS-Dateien dieses Checkouts; keine vollständige Shopify-Laufzeit. Skripte und Bestellfunktionen deaktiviert. Vier lokale Seiten im Browser auf korrekte Angaben und horizontalen Überlauf geprüft, Desktop-Darstellung gesichtet. Vorschau-Dateien und Server liegen ausschließlich unter `/private/tmp/tempera-local-product-preview`; kein `shopify theme dev`, kein Upload. Nach Ende des lokalen Servers muss die Ansicht bei Bedarf erneut gestartet werden.

## Veröffentlichung und Rückweg am 11.09.2026

- Nutzerfreigabe: „kannst du veröffentlichen“, nach der lokalen Ansicht und Umplatzierung der Passformberatung. Diese Freigabe ersetzt für die begrenzten Produkttextänderungen das vorherige Upload- und Veröffentlichungsverbot.
- Vollständige Sicherung des Live-Themes `145433461043` unter `/private/tmp/tempera-shop-prepublish-20260911.Wmw0Jc`. Abgleich mit `b6619e6`: 291 Dateien auf beiden Seiten, 209 bytegleich, 82 JSON-Dateien nur anders formatiert; keine inhaltlichen Unterschiede. Bericht: `/private/tmp/tempera-prepublish-comparison-20260911.json`.
- Veröffentlichung der sechs Theme-Dateien als Commit `a9f7cb3` per regulärem, nicht erzwungenem Push nach `origin/master`. Shopify hat den Stand in das bestehende Live-Theme übernommen. Kein Wechsel auf das ältere unveröffentlichte Preview-Theme.
- Rückdownload der sechs betroffenen Dateien nach `/private/tmp/tempera-shop-postpublish-20260911`: beide Liquid-Sections und das Snippet bytegleich; HYBRID- und Oak-Vorlage nach JSON-Inhaltsvergleich gleich. In der Standardvorlage stimmen alle freigegebenen Produkttexteinstellungen; Shopify entfernt dort allerdings den bereits defekten Essential-Upsell-App-Block `essential_upsell_app_block_qjw6mW` samt Reihenfolgeeintrag. Schon die vor der Veröffentlichung gespeicherte öffentliche BASSO-Seite enthält dazu `Failed to render app block` und `app block path ... does not exist`. Ein gezielter erneuter Upload nur der Standardvorlage konnte den ungültigen Verweis nicht erhalten. Keine App installiert, entfernt oder konfiguriert; keine bisher gerenderte Funktion dadurch entfernt. Der Repo-Eintrag bleibt erhalten; diese Shopify-Normalisierung ist als Abweichung dokumentiert.
- Frischer öffentlicher Abruf nach Veröffentlichung am 11.09.2026, 17:49 Uhr Europe/Berlin: BASSO, SOLO, HYBRID und HYBRID Oak jeweils HTTP 200. Technische Ausgabe exakt gegen die freigegebenen gerenderten Texte geprüft; Oak abweichend, SOLO ohne fremde Einzelspannungen. Passformtext genau einmal je Seite, im standardmäßig geschlossenen Accordion; Modelllinks, SOLO-Einleitung, Oak-Vergleich, englische Sprache und bestehende B2B-Angaben korrekt. Bericht und öffentliche HTML-Nachweise: `/private/tmp/tempera-public-after-publish-20260911/`.
- Abschließender Rückdownload von `templates/index.json`: nach JSON-Inhaltsvergleich identisch mit dem übernommenen Editor-Stand. Beide Klassik-Zuordnungen sind unverändert erhalten.
- Zusätzliche Live-Sichtprüfung von BASSO im Browser: „Size & fit“ geschlossen und geöffnet, bestehende Typografie und Accordion-Gestaltung erhalten. Keine Bestellung oder Warenkorbänderung, kein vollständiger Checkout-/App-Funktionstest. Der vorhandene Warenkorb wurde nicht angefasst.
- Für einen Rückweg den Produkttext-Commit gezielt revertieren und erneut nach `master` übertragen; spätere Änderungen zuerst prüfen. Die vollständige Vorher-Sicherung liegt zusätzlich lokal vor. Kein pauschales Zurücksetzen auf die alte Preview-Fassung.

## Historische Nachweise vom 20.08.2026

Die folgenden Ergebnisse wurden heute nicht erneut getestet und sind keine aktuelle Funktions- oder Rechtsfreigabe:

- Desktop und 390-px-Ansicht ohne horizontalen Überlauf; mobile Einzelkarten, Header, Vollbildmenü, zugängliche Menüsteuerung und Warenkorb-Darstellung geprüft.
- Damals BASSO, SOLO, HYBRID, HYBRID Oak und ROSIN sichtbar. 5th tuning/5ths und SPROUTS fehlten in der Discovery; direkte Unlisted-Seiten sowie Cleaning Cloth lieferten `noindex,nofollow`. Die öffentliche Übersicht zeigt nach den Editor-Änderungen wieder diese fünf Karten; die damaligen Detailtests wurden nicht wiederholt.
- Fünf Produktseiten, Varianten-IDs und URLs, relevante Preiswechsel sowie Hinzufügen von ROSIN Orchestra zum damaligen Testwarenkorb geprüft. Warenkorb-Inhalte und Checkout-Schaltfläche vorhanden, keine Bestellung erstellt. Homepage, Produktseiten, Warenkorb und Suche mit HTTP 200; geprüfte Seiten ohne Konsolenfehler nach Korrekturen.
- Metadaten, Canonicals, grundlegende DOM-Zugänglichkeit, JavaScript-Syntax und Git-Whitespace damals geprüft. Ein fehlendes Homepage-`og:image` wurde damals vermerkt; heute nicht nachgeprüft.
- Consent-Ablehnung blieb nach Neuladen gespeichert; nur erforderliche Kategorien aktiv, Footer öffnete die Einstellungen erneut. Ausgehendes App-/Pixel-Tracking blieb wegen eines fehlgeschlagenen Web-Pixel-Manager-Abrufs im Development-Preview ungeklärt. Der gehostete Checkout war in der damaligen Browserprüfung blockiert.
- Theme Check: damals 204 Dateien geprüft, **30 `MatchingTranslations`-Fehler und 16 Legacy-Warnungen**. Der frische Vorher-/Nachher-Abgleich zum Produkttextauftrag steht oben. Keine ungeprüften Übersetzungen ergänzen.
- Historisch erkannte Integrationen: CartBot, Notify Me, Essential Upsell, Mailchimp, Meta/Facebook, Google Analytics/Google tag sowie Shop Pay/beschleunigte Zahlung. Dies ist keine aktuelle Liste aktiver Apps oder Pixel.

## Bestehender Policy-Weg und Zuständigkeit

Der Synchronisierungsweg ist bereits gewählt: englische Markdown-Quellen im separaten Astro-Projekt werden zu Shopify synchronisiert. Der alte Task dokumentiert einen erfolgreichen produktiven Lauf am 24.08.2026. Quellen, Workflow und historische Abgleichspunkte stehen in [PRIVACY_HANDOFF.md](PRIVACY_HANDOFF.md). Erneute Policy-Prüfung und rechtliche Freigaben gehören zum Website-/Rechtstexte-Task. Keinen zweiten Policy-Editor im Theme einführen.

Die Bereinigung der alten Shop-FAQ/Infoseiten hat der Nutzer ausdrücklich als erledigt bestätigt. Vorhandene Legacy-Liquid-Dateien beweisen keine noch sichtbaren Altseiten.

## Offene Punkte, keine automatische Umsetzung

1. Frische Tests auf realem iPhone/Android und in Safari/Chrome, einschließlich Varianten und Checkout mit Versand, Steuern und Endbeträgen ohne Kauf. Shopify-Preise, Bestand und Optionen dabei prüfen.
2. Tatsächlich aktive Apps/Pixel sowie ausgehender Datenverkehr nach Consent-Ablehnung. Historische Privacy-Hinweise sind mit der heutigen Konfiguration durch den zuständigen Task abzugleichen.
3. Klärung der neuen Widerrufsanforderungen und aktuelle rechtliche Freigaben. Erst bestätigte Regeln im Shop umsetzen.
4. Die alte, nicht erreichbare Klassik-Zuordnung bleibt als bestätigter Konfigurationsrest erhalten. Eine Bereinigung ist aktuell nicht beauftragt. Der vollständige Vergleich des unveröffentlichten Preview-Themes mit dem aktuellen `master` bleibt ungeprüft; die fehlende neue Gruppe im Preview ist bestätigt.

## Verbindliche Arbeitsgrenzen

- Altes Tempera-Grunddesign erhalten: Marian-Typografie, Schwarz, Weiß und Grau, kein Creme und kein ungefragtes Redesign. Neue Texte ohne Gedankenstriche. Shop vorerst bewusst Englisch.
- 5th tuning und SPROUTS bleiben absichtlich `Unlisted`. Die Übersicht nutzt veröffentlichte Collection-Produkte, kein manuelles `all_products` zur Umgehung der Sichtbarkeit. Direkte URLs sind keine Discovery. Mobile Einzelkarten, Warenkorb und Consent-UX erhalten.
- Rechnungen über Lexware Office/Lexoffice; keinen zusätzlichen Shopify-Rechnungsversand aktivieren.
- Erledigter Auftrag: bestätigten Website-Stand mit den vier Shopmodellen abgleichen, begrenzte Produkttextkorrekturen lokal zur Ansicht vorbereiten und nach ausdrücklicher Freigabe veröffentlichen. Gestaltung und Dokumentation erhalten. Keine erfundenen Eigenschaften, Spezifikationen oder Klangversprechen. Weitere Änderungen an Shop-Einstellungen, Produktdatensätzen, Kunden, Bestellungen, Einladungen oder Rechtstexten sind nicht freigegeben. Keine automatische Bereinigung der Collection-Zuordnungen.
- `shopify theme dev` kann Dateien hochladen und ist kein rein lokaler Server. Für weitere Veröffentlichungen Ziel-Branch, Theme-ID, Freigabe und Rückweg prüfen. Die oben dokumentierte Veröffentlichung ist abgeschlossen und keine allgemeine Freigabe für weitere Eingriffe. Keine bezahlte Testbestellung ohne gesonderte Zustimmung.
- CLI: `/opt/homebrew/bin/shopify`; Node: `/Users/jean/.nvm/versions/node/v22.23.1/bin/node` laut Übergabe. Keine Secrets in Dateien, Logs oder Prompts übernehmen.
- Gemeinsame Prioritäten stehen ausschließlich in `/Users/jean/.codex/worktrees/24ca/Tempera2026/work/integration/PROJEKTSTATUS_UND_ROADMAP.md`, hier nur lesend konsultieren. Astro-Website, Survey und Kundenverwaltung gehören zu anderen Tasks; Survey-Rabatte und Einladungen ebenfalls. Headless-Shop, Studenten/B-Ware-Portal und PostHog sind nur Ideen ohne Umsetzungsfreigabe.

Historische Quelle: archivierter Task „Tempera Shopify“, ID `01a01959-63b7-7652-a44a-cac1c808f03c`, zuletzt 24.08.2026. Bei Bedarf relevante Nachrichten lesen, nicht reaktivieren. Aktuelle Übergabe durch den abgebenden Task vom 11.09.2026.
