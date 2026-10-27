# Export Audit

Audit date: 2026-10-27

## Scope and baseline

- Source: Axure RP 9 HTML export in this folder.
- Git status: this folder is not currently a Git repository; no existing `.git` directory was found in the workspace or its parent.
- Total files measured: 3,398,210 bytes (3.24 MiB).
- `images/` app artwork total: 325,260 bytes (318 KiB), excluding `.DS_Store`; it comprises 159 SVGs and one PNG (the PNG is 724 x 38). App screen artwork is overwhelmingly SVG, not large raster imagery.

## Findings

- Viewport: `start.html` and `index.html` include a viewport meta tag. The other 11 top-level HTML documents do not.
- Language: `start.html` and `index.html` declare `lang="en"`. The 11 individual/alternate page HTML documents do not declare a language.
- Titles: `start.html` and `index.html` are titled `Untitled Document`; `start_c_1.html` and `start_with_pages.html` have empty titles. The remaining page titles are present, although some contain spelling/capitalization issues inherited from the export.
- Description: no top-level HTML document contains a meta description.
- Asset paths: the sampled generated page uses relative paths such as `resources/scripts/...`, `data/...`, and `images/...`. The wrapper's app pages are selected through relative page URLs in `data/document.js`. No root-relative app asset path has been confirmed. An external Google Fonts stylesheet is present in `start.html` and `index.html`; the prototype should remain usable if that request is unavailable.
- Broken paths / 404s / console errors: direct `file://` preview in the available Chromium browser is redirected to Axure's `resources/chrome/chrome.html` extension instructions. Served over HTTP at the project root, `start.html` loads the login page with no console errors and no failed network requests. Sub-path and full interaction verification are pending.
- Large images: no large app PNG/JPG assets were found. Largest raster files are Axure support documentation screenshots under `resources/chrome/`; the app images are tiny SVGs plus one 724 x 38 PNG. Re-encoding SVGs or the tiny PNG is not warranted based on this baseline.
- Performance task: no raster assets were changed. App image bytes before/after: 325,260 / 325,260 bytes (no change). The sole app PNG is 4,714 bytes; the other 159 app illustrations are SVG. The largest rasters are Axure help screenshots, not app-screen content.
- Desktop presentation: the wrapper has Axure's desktop preview chrome and sizes its embedded iframe to fill its panel; no phone-specific centered desktop presentation was found in the wrapper markup.
- Accessibility runtime findings: the login hints were 11px and `rgba(51, 51, 51, 0.45)` on a blue field; the generated agreement text is 13px. CSS override raises both hints to 16px white on `#1947a1` (contrast ratio 8.5:1) and widens their fields to preserve the full existing hint strings. The agreement text and other small generated labels were not enlarged because their fixed Axure boxes may clip or overlap neighboring content. At least four login social icons are 35 x 35px, and the consent row is only 15px high; enlarging these hit areas safely needs Axure source layout changes. Additional small targets and text on other screens should be reviewed in Axure.
- Accessibility source follow-up: the login header status icons measure 16 x 12px, 26 x 13px, and 19 x 13px; the Terms of Use text target is 24 x 16px. These, the 35 x 35px social buttons, and the 15px consent row remain below the 44 x 44px target and should be enlarged/grouped in Axure before re-export. Other screens still need a full source-level text/target review.

## Browser verification status

A local HTTP server is available at `http://127.0.0.1:8765/`. The login screen loaded over HTTP and through a temporary `/repo-name/` alias; the wrapper, page data, player script, page HTML, and SVG each returned HTTP 200. No console errors or failed requests occurred on initial loads. The login splash hotspot advances to the login form as exported.

## Final validation

- Metadata: all 14 top-level HTML documents now have a non-empty title, `lang="en"`, viewport metadata, and a description.
- Hosting: root-relative app asset paths were not found in the audited sources. A temporary `/repo-name/` alias returned HTTP 200 for the wrapper, document data, player script, login page, and a page SVG.
- Presentation: the centered desktop stage contains the complete 393 x 852 app background at 1280 x 900 with no document scroll. At 390 x 844, the stage is edge-to-edge with no document scroll; the 393px Axure design naturally crops about 3px horizontally.
- Interactions: the splash advances to login, Login opens Home, bottom navigation reaches Health Record, Medication Management, Contact Family, and Personal Center, and detail-page back arrows return to Home. Medication voice-input Enter, Confirm, and Submit reach the generated confirmation/success states. These were checked using the served prototype and native page coordinates.
- SOS: the exported home page contains a static SOS ellipse, but no hotspot, event metadata, or long-press action. This behavior cannot be added without editing/re-exporting the Axure source.
- Headless browser note: Playwright's click dispatch through the CSS-transformed wrapper iframe was inconsistent, so pointer flows were verified on direct page frames/native coordinates; route and rendering checks were also performed through the wrapper. A manual browser check is recommended before publishing.
