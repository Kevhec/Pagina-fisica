import { e as decodeKey } from './chunks/astro/server_lGRWyQc3.mjs';
import './chunks/astro-designed-error-pages_21aWmv4F.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.8_@types+node@22.7.4_rollup@4.22.2_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/comments","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/comments\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"comments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/comments/index.ts","pathname":"/api/comments","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/pages/subject/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/subject/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/comments/index@_@ts":"pages/api/comments.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.8_@types+node@22.7.4_rollup@4.22.2_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/subject/[...slug]@_@astro":"pages/subject/_---slug_.astro.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/node_modules/.pnpm/astro@4.15.8_@types+node@22.7.4_rollup@4.22.2_typescript@5.6.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/lib/config-calculator/caida-libre.json":"chunks/caida-libre_CoOvplpk.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/lib/config-calculator/conversion-de-unidades.json":"chunks/conversion-de-unidades_nioZTZGk.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/lib/config-calculator/movimiento-uniforme-acelerado.json":"chunks/movimiento-uniforme-acelerado_SlUA8K4g.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/lib/config-calculator/movimiento-uniforme.json":"chunks/movimiento-uniforme_DYPIfU_u.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/caida-libre.md?astroContentCollectionEntry=true":"chunks/caida-libre_BNq15aJs.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/conversion-de-unidades.md?astroContentCollectionEntry=true":"chunks/conversion-de-unidades_CZvhJaFZ.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/movimiento-uniforme-acelerado.md?astroContentCollectionEntry=true":"chunks/movimiento-uniforme-acelerado_B7MIlm5l.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/movimiento-uniforme.md?astroContentCollectionEntry=true":"chunks/movimiento-uniforme_dA_7KIfe.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/vectores.md?astroContentCollectionEntry=true":"chunks/vectores_Cr7383WE.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/caida-libre.md?astroPropagatedAssets":"chunks/caida-libre_D8zQg7JT.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/conversion-de-unidades.md?astroPropagatedAssets":"chunks/conversion-de-unidades_DwdGIGr8.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/movimiento-uniforme-acelerado.md?astroPropagatedAssets":"chunks/movimiento-uniforme-acelerado_qpn2maWX.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/movimiento-uniforme.md?astroPropagatedAssets":"chunks/movimiento-uniforme_Ba7mbdz7.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/vectores.md?astroPropagatedAssets":"chunks/vectores_9RTcY4Z4.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/caida-libre.md":"chunks/caida-libre_DQvytWBg.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/conversion-de-unidades.md":"chunks/conversion-de-unidades_BzOkcjhF.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/movimiento-uniforme-acelerado.md":"chunks/movimiento-uniforme-acelerado_1WGI-O8E.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/movimiento-uniforme.md":"chunks/movimiento-uniforme_CF-MjoWR.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/src/content/subject/vectores.md":"chunks/vectores_D9h9PNO_.mjs","C:/Users/al-jo/Documents/programming/web/tests/Pagina-fisica/node_modules/.pnpm/@astrojs+react@3.6.2_@types+react-dom@18.3.0_@types+react@18.3.9_react-dom@18.3.1_react@18.3._sbjmirw62akeyugzw4zffhujba/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astrojs-manifest":"manifest_CZe5ooN8.mjs","@components/CalculatorUC":"_astro/CalculatorUC.iqYVlOb9.js","@components/Calculator":"_astro/Calculator.DZ4W_0M6.js","@astrojs/react/client.js":"_astro/client.C51ks0Bt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/montserrat-vietnamese-wght-normal.BXWSX9tz.woff2","/_astro/montserrat-cyrillic-ext-wght-normal.rV1oiNxr.woff2","/_astro/montserrat-cyrillic-wght-normal.CHYi_LmU.woff2","/_astro/chivo-latin-wght-normal.CoSD1mnE.woff2","/_astro/chivo-vietnamese-wght-normal.CrhmSof3.woff2","/_astro/montserrat-latin-wght-normal.BDA6280a.woff2","/_astro/chivo-latin-ext-wght-normal.B-2le7jD.woff2","/_astro/montserrat-latin-ext-wght-normal.BIVePy9u.woff2","/_astro/conversion-unidades.CFrtqgtN.png","/_astro/movimiento-uniforme.B2EvA7vC.png","/_astro/vectores.Lxgap2sG.png","/_astro/mrua.DIms_sN-.png","/_astro/caida-libre.Dm4Gl49G.png","/_astro/index.DuGJtUIE.css","/favicon.svg","/formulas.png","/_astro/Calculator.DZ4W_0M6.js","/_astro/CalculatorUC.iqYVlOb9.js","/_astro/client.C51ks0Bt.js","/_astro/index.CVf8TyFT.js","/_astro/Input.BHTN8VZ9.js","/_astro/_slug_.0e47704a.CRTOOgmL.js","/_astro/_slug_.lwkJO6L2.css","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"z4Y+vsLB9u6ALqJ83pCKDICxdM9KKDvphFoD1ofnFAA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
