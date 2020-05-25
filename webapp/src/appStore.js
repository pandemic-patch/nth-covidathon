import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// eslint-disable-next-line import/prefer-default-export
export { appStore };
