import * as patientActions from './PatientActions';

const initState = {
  signedIn: false,
  remoteDataLoaded: false,
};

const userReducers = (state = initState, action) => {
  switch (action.type) {
    case patientActions.GET_CURRENT_USER:
      return {
        ...state,
        signedIn: true,
        remoteDataLoaded: true,
        ...action.user.attributes,
      };
    case patientActions.SIGNOUT:
      return {
        signedIn: false,
        remoteDataLoaded: true,
      };
    default:
      return state;
  }
};

export default userReducers;
