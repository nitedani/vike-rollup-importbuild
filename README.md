pnpm i
pnpm run prod

```
vite v5.3.4 building for production...
✓ 81 modules transformed.
dist/client/_temp_manifest.json                               0.70 kB │ gzip:  0.28 kB
dist/client/assets/entries/pages.9VnaoqAi.js                  0.53 kB │ gzip:  0.29 kB
dist/client/assets/entries/entry-server-routing.DSn4bZ6H.js  30.65 kB │ gzip: 10.99 kB
vite v5.3.4 building SSR bundle for production...
✓ 539 modules transformed.
dist/server/package.json                0.02 kB
dist/server/importBuild.cjs             0.28 kB
dist/server/importBuild.mjs             0.28 kB
dist/server/importBuild.js              0.28 kB
dist/server/_temp_manifest.json         1.33 kB
dist/server/chunks/chunk-Mdx4nbag.js    0.50 kB
dist/server/entries/pages.mjs           1.10 kB
dist/server/entry.mjs                   2.32 kB
dist/server/chunks/chunk-BKnU42LU.js   58.39 kB
dist/server/chunks/chunk-CAr9uiwj.js  232.14 kB
dist/server/index.mjs                 743.48 kB
✓ built in 1.24s
✓ built in 1.49s
Server running at http://localhost:3000
Error: [@brillout/vite-plugin-server-entry@0.4.7][Bug] You stumbled upon a bug in the source code of @brillout/vite-plugin-server-entry. Reach out at https://github.com/brillout/vite-plugin-server-entry/issues/new and include this error stack (the error stack is usually enough to fix the problem). A maintainer will fix the bug (usually under 24 hours). Don't hesitate to reach out as it makes @brillout/vite-plugin-server-entry more robust.
    at Object.importServerEntry$1 [as importServerEntry] (file:///home/dani/projects/vike-rollup/dist/server/chunks/chunk-BKnU42LU.js:1474:24)
    at loadImportBuild (file:///home/dani/projects/vike-rollup/dist/server/chunks/chunk-BKnU42LU.js:1575:29)
    at initGlobalContext (file:///home/dani/projects/vike-rollup/dist/server/chunks/chunk-CAr9uiwj.js:1789:32)
    at renderPageAndPrepare (file:///home/dani/projects/vike-rollup/dist/server/chunks/chunk-CAr9uiwj.js:5717:11)
    at file:///home/dani/projects/vike-rollup/dist/server/chunks/chunk-CAr9uiwj.js:5709:79
    at renderPage_wrapper (file:///home/dani/projects/vike-rollup/dist/server/chunks/chunk-CAr9uiwj.js:5695:28)
    at renderPage (file:///home/dani/projects/vike-rollup/dist/server/chunks/chunk-CAr9uiwj.js:5709:39)
    at file:///home/dani/projects/vike-rollup/dist/server/index.mjs:33812:31
```