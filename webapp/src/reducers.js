import { combineReducers } from 'redux';
import patientReducers from './Patient/Store/PatientReducers';

const appReducer = combineReducers({
  currentUser: patientReducers,
});

export default (state, action) => appReducer(state, action);
