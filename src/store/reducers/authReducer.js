const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  isAuth: false,
  login: 'user',
  password: '12345',
  isError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const [login, password] = action.payload;

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

    default:
      return state;
  }
};

export const login = (formData) => ({
  type: LOGIN,
  payload: formData,
});

export const logout = () => ({
  type: LOGOUT,
});

export default authReducer;
