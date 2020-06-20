import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import Preview from '../Preview';
import Landing from '../Dashboard/Landing';
import SignUp from '../Patient/Tutorial/SignUp';
import Notify from '../Dashboard/Notify';
import Register from '../Dashboard/Register';
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
