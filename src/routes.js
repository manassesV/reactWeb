import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Produto from './pages/Produtos';

const path = window.location.hostname !== 'localhost' ?   '/react/fiap-react-17mob' : '/';

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