const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const groq = require('groq');

const client = require('../utils/sanityClient.js');
const serializers = require('../utils/serializers')

function processProject(project) {
    return {
        ...project,
        description: BlocksToMarkdown(project.description, { serializers, ...client.config() })
    }
}

async function getProjects() {
    const query = groq`*[_type == "project"]{
        ...,
        employer->
      }`;
    const docs = await client.fetch(query).catch(err => console.error(err));
    const output = docs.map(processProject);
    console.log(output);
    return output;
}

module.exports = getProjects;