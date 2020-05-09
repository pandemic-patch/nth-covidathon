import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-main'>
        <AppRoutes />
      </div>
    );
  }
}

export default withRouter(App);
