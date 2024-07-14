import { rename } from 'fs/promises';

try {
  await rename('build/index.js', 'build/index.cjs');
  console.log('File renamed successfully.');
} catch (err) {
  console.error('Error renaming file:', err);
  process.exit(1);
}
