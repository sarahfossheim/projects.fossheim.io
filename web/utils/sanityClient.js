const sanityClient = require('@sanity/client');
const dotenv = require('dotenv');

dotenv.config();

module.exports = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  useCdn: true,
});