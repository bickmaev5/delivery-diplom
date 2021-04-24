import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core"
import { Add, Remove, ShoppingCart } from "@material-ui/icons";
import { find } from "lodash";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "store/cart/actions";
import * as ls from 'local-storage';
import { useStyles } from "./ProductCard.styles"

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  picture?: string | null;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  description,
  picture,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lsCart: Array<{id: number, count: number}> = ls.get('cart') || [];
  const itemLS = find((lsCart || []), { id });
  const [count, setCount] = useState(itemLS?.count || 0);

  const addToCart = () => {
    dispatch(addCart.next(id));
    setCount((prev) => ++prev);
  };

  const removeCart = () => {
    dispatch(addCart.remove(id));
    setCount((prev) => prev !== 0 ? --prev : prev)
  }

  return (
    <Card>
      <CardMedia
        image={picture || ''}
        title={name}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        {!count && (
          <IconButton onClick={addToCart}>
            <ShoppingCart />
          </IconButton>
        )}
        {count > 0 && (
          <>
            <IconButton onClick={addToCart}>
              <Add />
            </IconButton>
            {count}
            <IconButton onClick={removeCart}>
              <Remove />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  )
}