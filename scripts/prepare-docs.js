const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const indexPath = path.join(docsDir, 'index.html');
const nojekyllPath = path.join(docsDir, '.nojekyll');

console.log('Preparing docs folder for GitHub Pages...\n');

// Check if docs/index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('❌ ERROR: docs/index.html does not exist!');
  console.error('Run "npm run build" first to generate the static site.');
  process.exit(1);
}

console.log('✓ docs/index.html exists');

// Create docs/.nojekyll if it doesn't exist
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created docs/.nojekyll');
} else {
  console.log('✓ docs/.nojekyll exists');
}

console.log('\n✅ Ready for GitHub Pages deployment!');
console.log('\nNext steps:');
console.log('1. Commit and push to main branch');
console.log('2. Go to Settings > Pages on GitHub');
console.log('3. Set Source to: Deploy from a branch');
console.log('4. Set Branch to: main');
console.log('5. Set Folder to: /docs');
console.log('6. Click Save\n');
console.log('Your site will be live at: https://[username].github.io/[repo-name]/\n');
