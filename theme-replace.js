const fs = require('fs')

try {
  const initialData = `
    import * as brandingTokens from './brands/BRAND/THEME.js';
    export default brandingTokens;
  `;
  const brand = initialData.replace(/BRAND/g, process.env.BRAND);
  const theme = brand.replace(/THEME/g, process.env.THEME || "default");

  fs.writeFileSync( './src/styles/tokens/branding.js', theme)
} catch (err) {
  console.error(err)
}