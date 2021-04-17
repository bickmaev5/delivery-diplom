import { Catalog } from "generated-frontend";
import { gql } from "graphql-request";
import useSWR from "swr";

const query = gql`
  query getCatalog {
    catalog {
      id
      name
      products {
        id
        name
      }
    }
  }
`;

export const useCatalog = () => {
  return useSWR<{ catalog: Catalog[] }>(query)
}