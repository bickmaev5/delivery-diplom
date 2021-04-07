import './App.css';
import { Button, Grid } from '@material-ui/core';
import { ProductCard } from 'components/ProductCard';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">123123</Button>
      <Grid container>
        <Grid item>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
