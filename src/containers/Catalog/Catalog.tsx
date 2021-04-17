import { Grid, Typography } from "@material-ui/core";
import { useCatalog } from "hooks/useCatalog";
import { FC } from "react";

export const Catalog: FC = () => {
  const { data, error } = useCatalog();
  const isLoading = !data && !error;
  if (isLoading || !data) {
    return null;
  }
  return (
    <Grid container>
      {data.catalog.map((item) => (
        <Grid item key={item.id}>
          <Typography variant="h5">{item.name}</Typography>
          <Grid container>
            {item.products.map((product) => (
              <Grid item key={item.id}>{product.name}</Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}