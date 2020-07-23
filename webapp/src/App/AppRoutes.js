import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import LoginForm from '../auth/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Dashboard/Landing';
import Notify from '../Dashboard/Notify';
import Register from '../Dashboard/Register';
import SignUp from '../Patient/Tutorial/SignUp';
import Preview from '../Preview';

// import Test from './Test';

class AppRoutes extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.user.signedIn ? (
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/preview' component={Preview} />
            {/* <Route path='/test' component={Test} /> */}
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/notify' component={Notify} />
            <Route exact path='/register' component={Register} />
            <Route exact path = '/login' component={LoginForm} />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(AppRoutes));
