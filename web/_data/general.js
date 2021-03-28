const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const groq = require('groq');

const client = require('../utils/sanityClient.js');
const serializers = require('../utils/serializers')

function processSettings(settings) {
    return {
        ...settings,
        intro: BlocksToMarkdown(settings.intro, { serializers, ...client.config() }),
        footer: BlocksToMarkdown(settings.footer, { serializers, ...client.config() }),
    }
}

async function getSettings() {
    const query = groq`*[_type == "general"]`;
    const docs = await client.fetch(query).catch(err => console.error(err));
    const output = docs.map(processSettings);
    return output[0];
}

module.exports = getSettings;