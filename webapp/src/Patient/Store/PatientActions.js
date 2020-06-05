export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SIGNOUT = 'SIGNOUT';

export const signOut = () => dispatch => {
  dispatch({
    type: SIGNOUT,
  });
};

export const getCurrentUser = history => dispatch => {
  dispatch({
    type: GET_CURRENT_USER,
    payload: [],
  });
};
