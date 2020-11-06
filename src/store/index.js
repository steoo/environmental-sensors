import { DEFAULT_LIMIT, DEFAULT_SORT } from '../api/constants';

const initialState = {
  readings: [],
  totalCount: 0,
  params: {
    page: 1,
    limit: DEFAULT_LIMIT,
    sort: DEFAULT_SORT,
  },
};

export default initialState;
