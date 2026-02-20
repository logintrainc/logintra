const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src', 'assets', 'quranchat', 'original');
const outDir = path.join(rootDir, 'src', 'assets', 'quranchat');

const targets = [
  { suffix: '1242x2688', width: 1242, height: 2688 }, // 6.5" portrait
  { suffix: '2688x1242', width: 2688, height: 1242 }, // 6.5" landscape
  { suffix: '1284x2778', width: 1284, height: 2778 }, // 6.7" portrait
  { suffix: '2778x1284', width: 2778, height: 1284 }  // 6.7" landscape
];

if (!fs.existsSync(srcDir)) {
  console.error('Source directory does not exist:', srcDir);
  console.error('Create it and put your base Quranchat screenshots inside.');
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.readdir(srcDir, async (err, files) => {
  if (err) {
    console.error('Failed to read source dir:', err);
    process.exit(1);
  }

  const images = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

  if (images.length === 0) {
    console.log('No images found in', srcDir);
    return;
  }

  for (const file of images) {
    const inputPath = path.join(srcDir, file);

    // Derive a readable, safe name from the original filename
    const originalStem = path.parse(file).name;
    const safeStem = originalStem
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Final base: quranchat-app-{screenName}
    const baseName = safeStem
      ? `quranchat-app-${safeStem}`
      : 'quranchat-app';

    for (const t of targets) {
      // Pattern: quranchat-app-{screenName}-{resolution}.png
      const outputName = `${baseName}-${t.suffix}.png`;
      const outputPath = path.join(outDir, outputName);

      try {
        await sharp(inputPath)
          .resize(t.width, t.height, {
            fit: 'cover',       // crop if needed to match aspect ratio
            position: 'center', // center crop
          })
          .png()
          .toFile(outputPath);

        console.log('Created', outputPath);
      } catch (e) {
        console.error('Error processing', file, '->', outputName);
        console.error(e);
      }
    }
  }
});

