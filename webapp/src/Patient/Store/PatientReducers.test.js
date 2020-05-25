import patientReducer from './PatientReducers';
// import * as customerActions from './CustomerActions';

describe('User Store Reducers', () => {
  it('by default returns the state', () => {
    const expectedValue = {
      signedIn: false,
      remoteDataLoaded: false,
    };
    expect(patientReducer(undefined, { type: 'lol' })).toEqual(expectedValue);
  });
});
