const prismic = require('@prismicio/client');
const fetch = require('node-fetch'); // You might need to install this if not available, or use built-in fetch in newer node

const repositoryName = 'chemsetu';
const endpoint = prismic.getRepositoryEndpoint(repositoryName);
const client = prismic.createClient(endpoint, { fetch });

async function checkPrismic() {
  try {
    console.log(`Checking repository: ${repositoryName}`);
    console.log(`Endpoint: ${endpoint}`);
    
    const docs = await client.getAllByType('compound');
    console.log(`Found ${docs.length} documents of type 'compound'.`);
    
    if (docs.length > 0) {
      console.log('First document sample:', JSON.stringify(docs[0], null, 2));
    } else {
      console.log('No documents found. Make sure you have published documents with type "compound".');
    }
  } catch (error) {
    console.error('Error fetching from Prismic:', error);
  }
}

checkPrismic();
