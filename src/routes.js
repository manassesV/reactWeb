import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Search from './pages/Search/index';
import Produto from './pages/Produtos/index';

const path = window.location.hostname !== 'localhost' ?   '/reactWeb/' : '/reactWeb/';
alert(window.location.hostname)
const Routes = () => (
<Switch>
    <Route
        exact
        path={ path }
        component={Search}
        />
    <Route
       exact
       path={ `${path}product/:id` }
       component={Produto}
       /> 
    <Route 
       component={() => (
           <div>Page not found</div>
       )} />  
</Switch>

);


export default Routes;