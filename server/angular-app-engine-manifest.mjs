
export default {
  basePath: 'https://ingdavidcortes.com',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
