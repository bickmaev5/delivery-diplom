import { useAuth0 } from "@auth0/auth0-react";
import { Box, Grid, Typography } from "@material-ui/core";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { Products } from "generated-frontend";
import { gql } from "graphql-request";
import { find } from "lodash";
import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";
import useSWR from "swr";
import { CartAuthorize } from "../CartOffer/CartAuthorize";
import { CartOffer } from "../CartOffer/CartOffer";

const query = gql`
  query MyQuery($ids: [Int!]) {
    products(where: { id: { _in: $ids}}) {
      id
      name
    }
  }
`;

const columns: GridColDef[] = [
  { field: "name", headerName: "Название продукта", width: 270 },
  { field: "count", headerName: "Количество", width: 270 },
];

export const CartTable: FC = () => {
  const cartItems = useSelector((state: ApplicationState) => state.cart.items);
  const params = useMemo(() => {
    return { ids: cartItems.map(item => item.id) };
  }, [cartItems])
  const { isAuthenticated } = useAuth0();
  
  const { data, error } = useSWR<{ products: Products[]}>([
    query,
    params
  ], {
    errorRetryCount: 0,
    revalidateOnFocus: false,
    refreshInterval: 0,
    shouldRetryOnError: false,
  });
  const rows = useMemo(() => {
    return data?.products.map((item) => {
      const cartItem = find(cartItems, { id: item.id })
      return {...item, count: cartItem!.count}
    })
  }, [cartItems, data]);



  if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

  return (
    <Grid container direction="column">
      <Typography variant="h2">
        Корзина
      </Typography>
      <Box height="400px">
        <DataGrid columns={columns} rows={rows|| []}  pageSize={5}/>
      </Box>
      <Box>
        {!isAuthenticated &&  <CartAuthorize />}
        {isAuthenticated &&  <CartOffer />}
      </Box>
    </Grid>
  );
};
