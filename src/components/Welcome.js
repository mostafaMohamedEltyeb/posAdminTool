import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebService from '../pages/WebService';
import Paramter from '../pages/Paramter';
import Action from '../pages/Action';
import ActionParamter from '../pages/ActionParamter';

function Welcome({ actions, parameters , webServices}) {
    return <div>
        <Router>
            <Sidebar />
            <Switch>
                <Route path='/tipco/webService' component={WebService} />
                <Route path='/webService' component={WebService} />
                <Route path='/paramter' component={Paramter} />
                <Route path='/action' exact render={() => <Action webServices={webServices} />} />
                <Route path='/actionParamter' exact render={() => <ActionParamter parameters={parameters} actions={actions} />} />
            </Switch>
        </Router>
    </div>

}

export default Welcome