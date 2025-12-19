import * as prismic from '@prismicio/client';

export const repositoryName = 'chemsetu';

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  // accessToken: '...',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your custom types.
  routes: [
    {
      type: 'compound',
      path: '/compounds/:uid',
    },
  ],
});
