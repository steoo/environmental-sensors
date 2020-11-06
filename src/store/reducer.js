import { GET_PREV_PAGE, GET_NEXT_PAGE, SET_RESULTS, GET_SORT_BY } from './actions';

const reducer = (state, { type, payload = {} }) => {
  const { params } = state;
  const { page } = params;

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
          ...params,
          page: page + 1,
        },
      };
    case GET_SORT_BY: {
      return {
        ...state,
        params: {
          ...params,
          page: 1,
          sort: payload.sortBy,
        },
      };
    }
    case SET_RESULTS:
      return {
        ...state,
        readings: payload.readings,
        totalCount: payload.totalCount,
      };
    default:
      return state;
  }
};

export { reducer };
