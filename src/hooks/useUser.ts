import { useAuth0 } from "@auth0/auth0-react";
import { Users } from "generated-frontend";
import { gql } from "graphql-request";
import { useMemo } from "react";
import useSWR from "swr";

const query = gql`
  query getUser($id: String!) {
    users_by_pk(id: $id) {
      id,
      name,
      phone
    }
  }
`;

export const useUser = () => {
  const { user } = useAuth0();
  const params = useMemo(() => ({
    id: user.sub,
  }), [user]);
  const data = useSWR<{ users_by_pk: Users}>([query, params])
  console.log(data);
  return data.data?.users_by_pk
}