const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const groq = require('groq');

const client = require('../utils/sanityClient.js');
const serializers = require('../utils/serializers')

function processProject(project) {
    const caseStudy = project?.case?.map((block) => {
        if (block._type === 'codeBlock') {
            block.notes = BlocksToMarkdown(block.notes, { serializers, ...client.config() });
        }
        return block;
      });

    return {
        ...project,
        description: BlocksToMarkdown(project.description, { serializers, ...client.config() }),
        case: BlocksToMarkdown(caseStudy, { serializers, ...client.config() }),
    }
}

async function getProjects() {
    const query = groq`*[_type == "project"]{
        ...,
        employer->
      }`;
    const docs = await client.fetch(query).catch(err => console.error(err));
    const output = docs.map(processProject);
    return output;
}

module.exports = getProjects;