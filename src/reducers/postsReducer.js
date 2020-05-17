import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  error: '',
  errorOccurred: false,
};
// might need to change ...state!
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return {
        ...state, all: state.all, current: action.payload, errorOccurred: false,
      };
    case ActionTypes.FETCH_POSTS:
      return {
        ...state,
        all: action.payload,
        current: state.current,
        errorOccurred: false,
      };
    case ActionTypes.ERROR_SET:
      return {
        all: [], current: {}, error: action.payload, errorOccurred: true,
      };

    default:
      return state;
  }
};

export default postsReducer;
