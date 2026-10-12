/**
 * Markdown to PDF Converter
 * 
 * This script converts all markdown files to PDF using markdown-pdf
 * 
 * Usage:
 *   npm install -g markdown-pdf
 *   node convert-to-pdf.js
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Markdown files to convert
const markdownFiles = [
  'README.md',
  'SETUP.md',
  'PROJECT_STATUS.md',
  'COMPLETION_SUMMARY.md',
  'QUICK_START.md',
];

// Output directory
const outputDir = 'docs-pdf';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
  console.log(`✅ Created output directory: ${outputDir}`);
}

console.log('📄 Converting Markdown files to PDF...\n');

// Convert each markdown file
markdownFiles.forEach((file, index) => {
  const inputPath = file;
  const outputPath = path.join(outputDir, file.replace('.md', '.pdf'));

  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${file} - file not found`);
    return;
  }

  // Convert using markdown-pdf CLI
  const command = `markdown-pdf "${inputPath}" -o "${outputPath}"`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error converting ${file}: ${error.message}`);
      return;
    }
    
    if (stderr && !stderr.includes('Warning')) {
      console.error(`⚠️  ${file}: ${stderr}`);
    }
    
    console.log(`✅ Converted: ${file} → ${outputPath}`);
    
    // If last file, show completion message
    if (index === markdownFiles.length - 1) {
      console.log(`\n🎉 All files converted! Check the '${outputDir}' directory.`);
    }
  });
});

console.log(`
Alternative methods if markdown-pdf doesn't work:
1. Use Pandoc: pandoc README.md -o README.pdf
2. Use browser: Open .md in browser → Print → Save as PDF
3. Use VS Code: Install "Markdown PDF" extension
`);
