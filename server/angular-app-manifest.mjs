
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/davidcortes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/davidcortes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24263, hash: 'be7e5396552ce212af440be11c62ee2e02a83495ed57e35c9f64a33084d0c0b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17783, hash: 'f601bdf362b360729cd89c518671d3e5fc86def55e258789223a42f5d563c221', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63974, hash: 'b2c0777aa8cf6ea4e1c58dc12aefb5929f9470ff4b8406f58feac9c938bb8e55', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VXAFEE25.css': {size: 7096, hash: '8Ll5p7Yo0qE', text: () => import('./assets-chunks/styles-VXAFEE25_css.mjs').then(m => m.default)}
  },
};
