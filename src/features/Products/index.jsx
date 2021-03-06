import { Box } from '@mui/material';
import ListPage from 'features/Products/page/ListPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

ProdusctFeature.propTypes = {};

function ProdusctFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default ProdusctFeature;
