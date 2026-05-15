const fs = require('fs');
let html = fs.readFileSync('tmp_problem.html', 'utf8');

// Replace class with className
html = html.replace(/class=/g, 'className=');

// Replace inline styles
html = html.replace(/style=\`([^`]+)\`/g, (match, styleString) => {
    return 'style={{ ' + styleString.split(';').filter(s => s.trim()).map(s => {
        let [key, value] = s.split(':');
        if(!value) return '';
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${key}: '${value.trim().replace(/'/g, "\\'")}'`;
    }).filter(Boolean).join(', ') + ' }}';
});
html = html.replace(/style=\"([^\"]+)\"/g, (match, styleString) => {
    return 'style={{ ' + styleString.split(';').filter(s => s.trim()).map(s => {
        let [key, value] = s.split(':');
        if(!value) return '';
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${key}: '${value.trim().replace(/'/g, "\\'")}'`;
    }).filter(Boolean).join(', ') + ' }}';
});

// Close void elements
html = html.replace(/<img([^>]*[^/])>/g, '<img$1 />');
html = html.replace(/<input([^>]*[^/])>/g, '<input$1 />');
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<hr>/g, '<hr />');

// Replace iconify-icon
html = html.replace(/<iconify-icon([^>]*)><\/iconify-icon>/g, '<iconify-icon$1></iconify-icon>');

// Replace AURA with SHIRO
html = html.replace(/AURA/g, 'SHIRO');
html = html.replace(/Aura/g, 'Shiro');

const component = `import React from 'react';

export const Problem = () => {
  return (
    ${html}
  );
};
`;

fs.writeFileSync('src/components/Problem.tsx', component);
