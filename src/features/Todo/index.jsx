import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from './page/Detailpage';
import ListPage from './page/Listpage';

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            TO SHARE UI
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
            </Switch>
        </div>
    );
}

export default TodoFeature;