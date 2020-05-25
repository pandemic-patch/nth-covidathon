import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import Preview from '../Preview';
import Landing from '../Dashboard/Landing';
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
          <Route path='/pandemic-patch' component={Landing} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(AppRoutes));
