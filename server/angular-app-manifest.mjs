
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://AbnerGM.github.io/Abner-portafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Abner-portafolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1290, hash: 'aa38f6998de9e7505cdcce25599f2fe9c9437b9a78b7d00a93cea9f0bab2b040', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1580, hash: 'ac923977ea79388665c4a2284ee2a7303e5434991bf03f7b8cca7af9ad4c6489', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33848, hash: '544abbca91a30738ed3ef008e07657ecb11030843f469d9eab2e85ae462e107e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6KZYCJIP.css': {size: 26152, hash: 'Z98eMV7RsJ4', text: () => import('./assets-chunks/styles-6KZYCJIP_css.mjs').then(m => m.default)}
  },
};
