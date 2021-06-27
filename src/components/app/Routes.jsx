import React from 'react';
import { Switch, Route } from "react-router-dom";
import Content from '../shared/template/Content';
import Finances from '../finances/Finances';
import Dashboard from '../dashboard/Dashboard';

const Routes = props => {
    return (
        <Content>
            <Switch>
                <Route path="/finances">
                    <Finances/>
                </Route>
                <Route path="/">
                    <Dashboard/>
                </Route>
            </Switch>
        </Content>
    )
};

export default Routes;