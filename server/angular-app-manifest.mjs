
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/WEBCV/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/WEBCV"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24257, hash: 'cff01529873d92382fc3335286647f2fea91aa6d0b95a34e6897aff80e7bb480', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17777, hash: '3f0ab323a7762c8ade91aa84b95c537400d6a0c6e6949ee886ad7636dde48cb8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63968, hash: '3864394e9f9c7ed692f17affbffef9497ad2d9fce7c1c2f5d5f4ab611f4e5d18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VXAFEE25.css': {size: 7096, hash: '8Ll5p7Yo0qE', text: () => import('./assets-chunks/styles-VXAFEE25_css.mjs').then(m => m.default)}
  },
};
