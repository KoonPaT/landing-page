import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const inputPath = path.join(__dirname, '../images/profile.jpeg');
  const outputDir = path.join(__dirname, '../public/images');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Optimizing profile images...');

  try {
    // Generate multiple sizes and formats
    const sizes = [
      { width: 200, suffix: '' },      // Original size for main display
      { width: 150, suffix: '-md' },   // Medium size for mobile
      { width: 100, suffix: '-sm' }    // Small size for thumbnails
    ];

    for (const size of sizes) {
      // WebP format (modern, smaller)
      await sharp(inputPath)
        .resize(size.width, size.width)
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `profile${size.suffix}.webp`));

      // JPEG format (fallback)
      await sharp(inputPath)
        .resize(size.width, size.width)
        .jpeg({ quality: 85, progressive: true })
        .toFile(path.join(outputDir, `profile${size.suffix}.jpg`));

      console.log(`✓ Generated ${size.width}px images`);
    }

    // Get file sizes for comparison
    const originalStats = fs.statSync(inputPath);
    const newWebpStats = fs.statSync(path.join(outputDir, 'profile.webp'));
    const newJpegStats = fs.statSync(path.join(outputDir, 'profile.jpg'));

    console.log('\nFile size comparison:');
    console.log(`Original: ${(originalStats.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`New WebP: ${(newWebpStats.size / 1024).toFixed(2)}KB`);
    console.log(`New JPEG: ${(newJpegStats.size / 1024).toFixed(2)}KB`);
    console.log(`Savings: ${(((originalStats.size - newWebpStats.size) / originalStats.size) * 100).toFixed(1)}% (WebP)`);

  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();