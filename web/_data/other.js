const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const groq = require('groq');

const client = require('../utils/sanityClient.js');
const serializers = require('../utils/serializers')

function processOtherDocs(doc) {
    return {
        ...doc,
        body: BlocksToMarkdown(doc.body, { serializers, ...client.config() }),
    }
}

async function getOtherDocs() {
    const query = groq`*[_type == "other"]`;
    const docs = await client.fetch(query).catch(err => console.error(err));
    const output = docs.map(processOtherDocs);
    return output;
}

module.exports = getOtherDocs;