const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const groq = require('groq');

const client = require('../utils/sanityClient.js');
const serializers = require('../utils/serializers')

function processTutorial(tutorial) {
    return {
        ...tutorial,
        description: BlocksToMarkdown(tutorial.description, { serializers, ...client.config() }),
    }
}

async function getTutorials() {
    const query = groq`*[_type == "tutorial"]`;
    const docs = await client.fetch(query).catch(err => console.error(err));
    const output = docs.map(processTutorial);
    return output;
}

module.exports = getTutorials;