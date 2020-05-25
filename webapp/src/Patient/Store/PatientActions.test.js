/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as patientActions from './PatientActions';

const mockStore = configureMockStore([thunk]);
let store;
describe('User Actions', () => {
  beforeEach(() => {
    store = mockStore({
      currentUser: {
        signedIn: false,
        remoteDataLoaded: false,
      },
    });
  });
  it('signOut', () => {
    expect(patientActions.signOut).toBeDefined();
  });
  it('getCurrentUser', () => {
    expect(patientActions.getCurrentUser).toBeDefined();
  });
});
