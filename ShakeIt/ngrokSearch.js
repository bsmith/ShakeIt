/* run this file with `npm run ngrokSearch` */

const ngrok = require('@expo/ngrok');
const fs = require('fs');

(async function() {
  const url = await ngrok.connect({ proto: 'http', port: 8080 });
  console.log(`ngrok url: ${url}`);

  fs.writeFileSync('searchConfig.js', `
export const searchBase = "${url}";
  `.trim())
  console.log(`Wrote searchConfig.js`);
})();