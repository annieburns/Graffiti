import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import About from '../components/About.jsx';
import App from '../../client/components/App.jsx';
import UserForm from '../components/users/UserForm.jsx';


const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={About} />
      <Route path="signup" component={UserForm} />
      <Route path="login" component={UserForm} />
    </Route>
  </Router>
);

export default Routes;
