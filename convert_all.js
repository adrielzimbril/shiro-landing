const fs = require('fs');

const html = fs.readFileSync('source/aura_ai_personal_assistant_landing_page_template.html', 'utf8');
const sections = Array.from(html.matchAll(/<section[\s\S]*?<\/section>/g));

const extractAndConvert = (content, outputFile) => {
    let out = content.replace(/class=/g, 'className=');
    out = out.replace(/style="([^"]+)"/g, (match, styleString) => {
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
    // Fix self-closing tags
    out = out.replace(/<(img|input|br|hr|source)([^>]*?)(?!\/)> /g, '<$1$2 />');
    out = out.replace(/<(img|input|br|hr|source)([^>]*?)(?!\/)>$/gm, '<$1$2 />');
    out = out.replace(/<(img|input|br|hr|source)([^>]*?)>/g, (match, tag, rest) => {
      if (rest.endsWith('/')) return match;
      return `<${tag}${rest} />`;
    });
    // Fix comments
    out = out.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    out = out.replace(/stroke-width=/g, 'strokeWidth=');
    out = out.replace(/stroke-linecap=/g, 'strokeLinecap=');
    out = out.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    out = out.replace(/clip-rule=/g, 'clipRule=');
    out = out.replace(/fill-rule=/g, 'fillRule=');
    out = out.replace(/stop-color=/g, 'stopColor=');
    out = out.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
    out = out.replace(/xlink:href=/g, 'xlinkHref=');
    out = out.replace(/colspan=/g, 'colSpan=');
    out = out.replace(/for=/g, 'htmlFor=');
    
    // Fix any raw text issues like style jsx tag (if any)
    out = out.replace(/<style>([\s\S]*?)<\/style>/g, '<style dangerouslySetInnerHTML={{__html: `$1`}} />');

    // Replace AURA with SHIRO
    out = out.replace(/AURA/g, 'SHIRO');
    out = out.replace(/Aura/g, 'Shiro');
    out = out.replace(/aura/g, 'shiro');

    const componentName = outputFile.split('/').pop().replace('.tsx', '');
    const tsx = `import React from 'react';\n\nexport const ${componentName} = () => {\n  return (\n    ${out.trim()}\n  );\n}\n`;
    fs.writeFileSync(outputFile, tsx);
};

sections.forEach(section => {
    const match = section[0].match(/id="([^"]+)"/);
    if (!match) return;
    const id = match[1];
    if (id === 'features') extractAndConvert(section[0], 'src/components/Features.tsx');
    if (id === 'workflow') extractAndConvert(section[0], 'src/components/HowItWorks.tsx');
    if (id === 'built-for') extractAndConvert(section[0], 'src/components/BuiltFor.tsx');
    if (id === 'privacy') extractAndConvert(section[0], 'src/components/Privacy.tsx');
    if (id === 'pricing') extractAndConvert(section[0], 'src/components/Pricing.tsx');
    if (id === 'faq') extractAndConvert(section[0], 'src/components/FAQ.tsx');
    if (id === 'final-cta') extractAndConvert(section[0], 'src/components/FinalCTA.tsx');
});

// For footer
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/);
if (footerMatch) {
    extractAndConvert(footerMatch[0], 'src/components/Footer.tsx');
}
