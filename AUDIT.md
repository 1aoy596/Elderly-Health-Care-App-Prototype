# Export Audit

Audit date: 2026-10-27

## Scope and baseline

- Source: Axure RP 9 HTML export in this folder.
- Git status: this folder is not currently a Git repository; no existing `.git` directory was found in the workspace or its parent.
- Total files measured: 3,398,210 bytes (3.24 MiB).
- `images/` total: 335,504 bytes (328 KiB), comprising 159 SVGs and one PNG (the PNG is 724 x 38). App screen artwork is overwhelmingly SVG, not large raster imagery.

## Findings

- Viewport: `start.html` and `index.html` include a viewport meta tag. The other 11 top-level HTML documents do not.
- Language: `start.html` and `index.html` declare `lang="en"`. The 11 individual/alternate page HTML documents do not declare a language.
- Titles: `start.html` and `index.html` are titled `Untitled Document`; `start_c_1.html` and `start_with_pages.html` have empty titles. The remaining page titles are present, although some contain spelling/capitalization issues inherited from the export.
- Description: no top-level HTML document contains a meta description.
- Asset paths: the sampled generated page uses relative paths such as `resources/scripts/...`, `data/...`, and `images/...`. The wrapper's app pages are selected through relative page URLs in `data/document.js`. No root-relative app asset path has been confirmed. An external Google Fonts stylesheet is present in `start.html` and `index.html`; the prototype should remain usable if that request is unavailable.
- Broken paths / 404s / console errors: direct `file://` preview in the available Chromium browser is redirected to Axure's `resources/chrome/chrome.html` extension instructions. Served over HTTP at the project root, `start.html` loads the login page with no console errors and no failed network requests. Sub-path and full interaction verification are pending.
- Large images: no large app PNG/JPG assets were found. Largest raster files are Axure support documentation screenshots under `resources/chrome/`; the app images are tiny SVGs plus one 724 x 38 PNG. Re-encoding SVGs or the tiny PNG is not warranted based on this baseline.
- Performance task: no raster assets were changed. App image bytes before/after: 335,504 / 335,504 bytes (no change). The sole app PNG is 4,714 bytes; the other 159 app illustrations are SVG. The largest rasters are Axure help screenshots, not app-screen content.
- Desktop presentation: the wrapper has Axure's desktop preview chrome and sizes its embedded iframe to fill its panel; no phone-specific centered desktop presentation was found in the wrapper markup.
- Accessibility: generated defaults include 13px base text (`data/document.js`). Small text and touch-target dimensions require visual/runtime inspection; CSS overrides may affect layout and will need browser checks. Hint contrast has not yet been measured.

## Browser verification status

A local HTTP server is available at `http://127.0.0.1:8765/`. The login screen loaded over HTTP and through a temporary `/repo-name/` alias; the wrapper, page data, player script, page HTML, and SVG each returned HTTP 200. No console errors or failed requests occurred on the initial login load. Full interaction verification remains pending.
