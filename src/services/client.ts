import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient('https://positive-reptile-24.hasura.app/v1/graphql');

export const fetcher = (query: string) => client.request(query);

export const getFetcher = (query:string) => fetcher(query);