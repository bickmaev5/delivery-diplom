import { Card, CardActions, CardContent, Typography } from "@material-ui/core"

export const ProductCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography>
          Авокадо
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>150 гр</Typography>
      </CardActions>
    </Card>
  )
}