const fs = require('fs');
const path = require('path');

async function run() {
  const sharpPath = path.resolve(__dirname, '../../studioPass-backend/node_modules/sharp');
  const sharp = require(sharpPath);

  const clientAssetsDir = path.resolve(__dirname, '../../by client/perfecthope555-attachments (2)/drive-download-20260517T150901Z-3-001');
  const sourceLightPng = path.join(clientAssetsDir, 'Studio Pass logo_Light.png');
  const publicDir = path.resolve(__dirname, '../public');

  if (!fs.existsSync(sourceLightPng)) {
    console.error('Source light logo not found at:', sourceLightPng);
    process.exit(1);
  }

  console.log('Loading source light logo from:', sourceLightPng);

  // 1. Trim outer transparent space
  const trimmedBuffer = await sharp(sourceLightPng)
    .trim()
    .toFormat('png')
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log(`Trimmed logo dimensions: ${trimmedMeta.width}x${trimmedMeta.height}`);

  // Add 16px padding around trimmed full logo
  const padH = 16;
  const padW = 24;
  const paddedWidth = trimmedMeta.width + padW * 2;
  const paddedHeight = trimmedMeta.height + padH * 2;

  const fullLogoBuffer = await sharp({
    create: {
      width: paddedWidth,
      height: paddedHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: trimmedBuffer, left: padW, top: padH }])
    .png()
    .toBuffer();

  // Save logo.png and logo-light.png
  const logoPngPath = path.join(publicDir, 'logo.png');
  const logoLightPngPath = path.join(publicDir, 'logo-light.png');
  fs.writeFileSync(logoPngPath, fullLogoBuffer);
  fs.writeFileSync(logoLightPngPath, fullLogoBuffer);
  console.log('Wrote', logoPngPath, `(${fullLogoBuffer.length} bytes)`);
  console.log('Wrote', logoLightPngPath);

  // 2. Generate logo.svg with full light-mode logo
  const base64FullLogo = fullLogoBuffer.toString('base64');
  const logoSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${paddedWidth} ${paddedHeight}" width="${paddedWidth}" height="${paddedHeight}">
  <image width="${paddedWidth}" height="${paddedHeight}" xlink:href="data:image/png;base64,${base64FullLogo}"/>
</svg>
`;
  const logoSvgPath = path.join(publicDir, 'logo.svg');
  fs.writeFileSync(logoSvgPath, logoSvgContent, 'utf8');
  console.log('Wrote', logoSvgPath, `(${logoSvgContent.length} bytes)`);

  // 3. Extract the speech-bubble microphone emblem
  // We inspect pixel columns to locate the vertical gap between the emblem and the text
  const { data, info } = await sharp(trimmedBuffer)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Scan columns from x = 100 to find a column with minimum alpha
  // Let's calculate alpha mass per column
  let minAlphaCol = -1;
  let minAlphaSum = Infinity;

  // The emblem is on the left (~30% to 50% of the image)
  const minScanX = Math.floor(width * 0.25);
  const maxScanX = Math.floor(width * 0.55);

  for (let x = minScanX; x <= maxScanX; x++) {
    let colAlphaSum = 0;
    for (let y = 0; y < height; y++) {
      const idx = (y * width + x) * channels;
      const alpha = channels === 4 ? data[idx + 3] : 255;
      colAlphaSum += alpha;
    }
    if (colAlphaSum < minAlphaSum) {
      minAlphaSum = colAlphaSum;
      minAlphaCol = x;
    }
  }

  console.log(`Detected emblem/text division at x = ${minAlphaCol} (alpha sum: ${minAlphaSum})`);

  // Crop the emblem
  const emblemRawBuffer = await sharp(trimmedBuffer)
    .extract({
      left: 0,
      top: 0,
      width: minAlphaCol,
      height: height
    })
    .trim()
    .toFormat('png')
    .toBuffer();

  const emblemMeta = await sharp(emblemRawBuffer).metadata();
  console.log(`Extracted emblem dimensions: ${emblemMeta.width}x${emblemMeta.height}`);

  // Place emblem into a clean 512x512 square with balanced padding
  const squareSize = 512;
  const maxEmblemDim = 440; // leaving 36px padding on all sides
  const scale = Math.min(maxEmblemDim / emblemMeta.width, maxEmblemDim / emblemMeta.height);
  const scaledW = Math.round(emblemMeta.width * scale);
  const scaledH = Math.round(emblemMeta.height * scale);

  const resizedEmblem = await sharp(emblemRawBuffer)
    .resize(scaledW, scaledH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const leftOffset = Math.round((squareSize - scaledW) / 2);
  const topOffset = Math.round((squareSize - scaledH) / 2);

  const iconBuffer = await sharp({
    create: {
      width: squareSize,
      height: squareSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: resizedEmblem, left: leftOffset, top: topOffset }])
    .png()
    .toBuffer();

  const logoIconPngPath = path.join(publicDir, 'logo-icon.png');
  fs.writeFileSync(logoIconPngPath, iconBuffer);
  console.log('Wrote', logoIconPngPath, `(${iconBuffer.length} bytes)`);

  const base64Icon = iconBuffer.toString('base64');
  const logoIconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${squareSize} ${squareSize}" width="${squareSize}" height="${squareSize}">
  <image width="${squareSize}" height="${squareSize}" xlink:href="data:image/png;base64,${base64Icon}"/>
</svg>
`;
  const logoIconSvgPath = path.join(publicDir, 'logo-icon.svg');
  fs.writeFileSync(logoIconSvgPath, logoIconSvgContent, 'utf8');
  console.log('Wrote', logoIconSvgPath, `(${logoIconSvgContent.length} bytes)`);

  console.log('All light mode logo assets generated successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
