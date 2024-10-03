import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BG0JxSIj.mjs';
import { manifest } from './manifest_CZe5ooN8.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/comments.astro.mjs');
const _page2 = () => import('./pages/subject/_---slug_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.8_@types+node@22.7.4_rollup@4.22.2_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/comments/index.ts", _page1],
    ["src/pages/subject/[...slug].astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3bf0dd61-8f68-4fca-a792-c53a6b67c69f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
