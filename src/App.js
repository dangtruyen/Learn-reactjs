import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';
import ProdusctFeature from 'features/Products';

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProduct();
  }, []);

  const { enqueueSnackbar } = useSnackbar();
  const handleShowNoti = () => {
    enqueueSnackbar('Register succsess', { variant: 'success' });
  };
  return (
    <div className="App">
      <Header />
      <Button onClick={handleShowNoti}>Show notistack</Button>
      <Switch>
        <Route exact path="/" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProdusctFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>

      <p>footer</p>
    </div>
  );
}

export default App;
