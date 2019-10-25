import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Adder from './components/Adder';
import Roster from './components/Roster';

export default (
    <Switch>
        <Route exact path="/" component={ Roster } />
        <Route path="/draft" component={ Adder } />
    </Switch>
)
