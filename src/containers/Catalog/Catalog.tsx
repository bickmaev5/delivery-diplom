import { Grid, Typography } from "@material-ui/core";
import { ProductCard } from "components/ProductCard";
import { useCatalog } from "hooks/useCatalog";
import { FC, useEffect } from "react";
import { addCart } from "store/cart/actions";
import { CartItem } from "store/cart/types";
import * as ls from 'local-storage';
import { useDispatch } from "react-redux";

export const Catalog: FC = () => {
  const { data, error } = useCatalog();
  const dispatch = useDispatch();
  const isLoading = !data && !error;
  useEffect(() => {
    const items = ls.get<CartItem[]>('cart') || []
    dispatch(addCart.saveToState(items));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading || !data) {
    return null;
  }
  return (
    <Grid container>
      {data.catalog.map((item) => (
        <Grid item key={item.id} xs={12}>
          <Typography variant="h5">{item.name}</Typography>
          <Grid container spacing={2}>
            {item.products.map((product) => (
              <Grid item key={product.id} md={3} xs={12}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  picture={product.picture}
                  description={product.description}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}