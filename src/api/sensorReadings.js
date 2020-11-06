import axios from 'axios';
import { baseUrl, DEFAULT_LIMIT } from './constants';

const getSensorReadings = async ({
  page = 1,
  limit = DEFAULT_LIMIT,
  sort = '',
  filter = '',
  order = 'ASC',
}) => {
  let params = {
    _page: page,
    _limit: limit,
    _order: order,
  };

  if (sort) {
    params = { ...params, _sort: sort };
  }

  if (filter) {
    const { filterName, filterValue } = filter;

    if (filterValue) {
      params = { ...params, [filterName]: filterValue };
    }
  }

  const response = await axios.get(`${baseUrl}/sensorReadings`, {
    params,
  });

  return {
    readings: response.data,
    totalCount: response.headers['x-total-count'],
  };
};

export { getSensorReadings };
