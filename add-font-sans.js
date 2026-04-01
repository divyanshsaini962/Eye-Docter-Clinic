const fs = require('fs');
const path = require('path');

const dir = './src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Only modify section tags that don't already have font-sans
    if (content.includes('<section ') && !content.includes('font-sans') && content.match(/<section[^>]+className=["'][^"']+["']/)) {
      content = content.replace(/(<section[^>]+className=["'])([^"']+)(["'])/, (match, p1, p2, p3) => {
        // Only append if it's not already there (belt-and-suspenders check)
        if (!p2.includes('font-sans')) {
          return p1 + p2 + ' font-sans' + p3;
        }
        return match;
      });
      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${file}`);
    }
  }
});
console.log('Done');
