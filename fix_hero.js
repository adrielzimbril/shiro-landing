const fs = require('fs');
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace(/style="([^"]+)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
        if (!rule.trim()) return;
        const [key, value] = rule.split(':').map(s => s.trim());
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        if (camelKey && value) {
            styleObj[camelKey] = value;
        }
    });
    return 'style={' + JSON.stringify(styleObj) + '}';
});
fs.writeFileSync('src/components/Hero.tsx', hero);

fs.writeFileSync('src/global.d.ts', `declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

export {};
`);
