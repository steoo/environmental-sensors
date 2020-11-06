export const GET_PREV_PAGE = 'GET_PREV_PAGE';
export const GET_NEXT_PAGE = 'GET_NEXT_PAGE';
export const GET_SORT_BY = 'GET_SORT_BY';
export const SET_RESULTS = 'SET_RESULTS';

const getPrevPage = () => ({
  type: GET_PREV_PAGE,
});

const getNextPage = () => ({
  type: GET_NEXT_PAGE,
});

const getSortBy = (sortBy) => ({
  type: GET_SORT_BY,
  payload: {
    sortBy,
  },
});

const setResults = ({ readings, totalCount }) => ({
  type: SET_RESULTS,
  payload: {
    readings,
    totalCount,
  },
});

export { getPrevPage, getNextPage, setResults, getSortBy };
