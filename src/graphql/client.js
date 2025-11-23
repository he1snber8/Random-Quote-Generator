import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://dummy-graphql-quotes-api.com/graphql';

export const client = new GraphQLClient(endpoint);
