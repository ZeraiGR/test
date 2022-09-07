const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const RESET_ERROR = 'RESET_ERROR';

const initialState = {
  isAuth: false,
  login: 'user',
  password: '12345',
  isError: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const { login, password } = action.payload;

      if (state.login === login && state.password === password) {
        return {
          ...state,
          isAuth: true,
          isError: false,
        };
      } else {
        return {
          ...state,
          isError: true,
        };
      }
    }

    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case RESET_ERROR: {
      return {
        ...state,
        isError: false,
      };
    }

    default:
      return state;
  }
};

export const loginAC = (formData) => ({
  type: LOGIN,
  payload: formData,
});

export const logoutAC = () => ({
  type: LOGOUT,
});

export const resetErrorAC = () => ({
  type: RESET_ERROR,
});

export default auth;
