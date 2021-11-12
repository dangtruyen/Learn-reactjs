import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {

  useEffect(()=>{
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }

    fetchProduct();
  }, []);

  return (
    <div className="App">
     <p>header</p>

    <p><NavLink to="/todos">todos</NavLink></p>
    <p><NavLink to="/albums">albums</NavLink></p>

    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />

      <Route component={NotFound} />
    </Switch>

    <p>footer</p>
    </div>
  );
}

export default App;
