const GET_POSTS = 'GET_POSTS';

const initialState = {
  posts: [],
  isLoading: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getPosts = () => ({
  type: GET_POSTS,
});

export default posts;
