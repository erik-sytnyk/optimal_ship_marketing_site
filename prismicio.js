import * as prismic from '@prismicio/client';
import {enableAutoPreviews} from '@prismicio/next';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

//TODO add route structure
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/';
    case 'page':
      return `/${doc.uid}`;
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export function createClient(config) {
  const client = prismic.createClient(endpoint, {
    ...config
  });

  enableAutoPreviews({
    client,
    context: config.context,
    req: config.req
  });

  return client;
}
