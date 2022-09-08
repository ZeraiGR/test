import { API } from '../../api/posts';

const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }

    default:
      return state;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const getUsers = () => async (dispatch) => {
  try {
    const users = await API.getUsers();

    dispatch(setUsers(users));
  } catch (error) {
    console.log(error);
  }
};

export default posts;
