const fs = require('fs');
const files = fs.readdirSync('src/components').filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  const path = 'src/components/' + f;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  fs.writeFileSync(path, content);
});
