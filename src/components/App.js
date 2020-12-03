import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './Menu'
import Layout from './Layout'
import Users from './Users'
import Works from './Works'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={ Menu } />
          <Layout>
            <Route exact path='/Users' component={ Users }/>
            <Route exact path='/Works' component={ Works }/>
          </Layout>
      </Switch>
    </BrowserRouter>
  )
};

export default App;