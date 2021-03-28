const imageUrl = require('@sanity/image-url');
const sanityClient = require('./sanityClient');

function urlFor(source) {
  return imageUrl(sanityClient).image(source);
}

module.exports = {
  types: {
    accessibleImage: ({node}) => {
      return `<img src="${urlFor(node.image).url()}" alt="${node.alt}" />`;
    },
    codeBlock: ({node}) => {      
      const code = node.code.code.replace(/</g, "&#x3C;").replace(/>/g, "&#x3E;");
      
      const notes = `<div class="notes">${node.notes}</div>`
      const snippet = `<div><h3>${node.file}</h3><pre><code>${code}</code></pre></div>`;

      const content = node.position === 'code-left' 
        ? `${snippet}${notes}` 
        : `${notes}${snippet}`;

      return `<section class="code-block">${content}</section>`;
    },
  }
}
