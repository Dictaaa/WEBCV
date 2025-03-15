
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24277, hash: 'e1c479ce8fb9c423c7ca0809f8852865ba4f0f97053cfbcd1d219ca5378a9fe2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17797, hash: 'b7c00dae7f06d262477c2da12ac96ae9e163c24455bf654da9ba7bb922f6d10b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63981, hash: 'c5537f49bedbedd619ba348c53c2fe868154bde17a36efbeb88641a1ff75909b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VXAFEE25.css': {size: 7096, hash: '8Ll5p7Yo0qE', text: () => import('./assets-chunks/styles-VXAFEE25_css.mjs').then(m => m.default)}
  },
};
