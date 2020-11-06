export const GET_PREV_PAGE = 'GET_PREV_PAGE';
export const GET_NEXT_PAGE = 'GET_NEXT_PAGE';
export const SET_RESULTS = 'SET_RESULTS';

const getPrevPage = (type) => ({
  type: GET_NEXT_PAGE,
});

const getNextPage = (type) => ({
  type: GET_NEXT_PAGE,
});

const setResults = (results) => ({
  type: SET_RESULTS,
  payload: {
    results,
  },
});

export { getPrevPage, getNextPage, setResults };
