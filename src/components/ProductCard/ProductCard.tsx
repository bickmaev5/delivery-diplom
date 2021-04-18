import { Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core"
import { useStyles } from "./ProductCard.styles"

interface ProductCardProps {
  name: string;
  description: string;
  picture?: string | null;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  picture,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={picture || ''}
        title={name}
        className={classes.media}
      />
      <CardContent>
        <Typography>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>{description}</Typography>
      </CardActions>
    </Card>
  )
}