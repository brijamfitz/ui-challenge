export const SET_USER = 'APP/SET_USER';
export const SET_PASSWORD_RESET = 'APP/SET_PASSWORD_RESET';

export const initialState = {
  user: {},
  passwordReset: {}
};

export const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case SET_PASSWORD_RESET:
      return {
        ...state,
        passwordReset: {
          email: action.email,
          resetPasswordSent: true
        }
      };
    default:
      return state;
  }
};

export const setUser = (user) => {
  return ({
    type: SET_USER,
    user
  })
};

export const setPasswordReset = (email) => {
  return ({
    type: SET_PASSWORD_RESET,
    email
  })
};
