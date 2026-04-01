const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src/components');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  content = content.replace(/\bfont-inter\b/g, '');
  content = content.replace(/\bfont-roboto\b/g, '');
  content = content.replace(/\bfont-poppins\b/g, '');
  content = content.replace(/\s+/g, ' '); // Clean up extra spaces inside className if any? Actually no, this breaks formatting.
  
  if (originalContent !== content) {
    fs.writeFileSync(file, originalContent.replace(/\bfont-(inter|roboto|poppins)\b/g, ''));
    console.log(`Updated ${file}`);
  }
});
console.log('Done');
