import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';

function App() {
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
