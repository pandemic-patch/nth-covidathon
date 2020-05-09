import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preview from '../Preview';
// import Test from './Test';

class AppRoutes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/preview' component={Preview} />
          {/* <Route path='/test' component={Test} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(AppRoutes);
