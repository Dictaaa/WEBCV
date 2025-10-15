
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ingdavidcortes.com/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24475, hash: 'd8828bca56545a0e4552fa2b25b6c1ea034938f04928ee61087243b1cf40df14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17994, hash: 'cba11f0444d3427e7dcdff6dbac9fc73b0ec01f222b51905d5e434f04daabf2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 64854, hash: '303d9d7f6bbc388711f436c3a782e0ecd77db5eb221e636e5d93ce31b7a15090', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VXAFEE25.css': {size: 7096, hash: '8Ll5p7Yo0qE', text: () => import('./assets-chunks/styles-VXAFEE25_css.mjs').then(m => m.default)}
  },
};
