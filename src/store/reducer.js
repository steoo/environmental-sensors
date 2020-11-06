import { GET_PREV_PAGE, GET_NEXT_PAGE, SET_RESULTS } from './actions';

const reducer = (state, { type, payload = {} }) => {
  const { params } = state;
  const { page } = params;
  const { results } = payload;

  switch (type) {
    case GET_PREV_PAGE:
      return {
        ...state,
        params: {
          ...params,
          page: page - 1,
        },
      };
    case GET_NEXT_PAGE:
      return {
        ...state,
        params: {
          page: page + 1,
        },
      };
    case SET_RESULTS:
      return {
        ...state,
        results,
      };
    default:
      return state;
  }
};

export { reducer };
