import axios from 'axios';
import { baseUrl } from './constants';

const getSensorReadings = async ({ page = 1, limit = 10, sort = '', filter = '', order = 'ASC' }) => {
  try {
    const response = await axios.get(`${baseUrl}/sensorReadings`, {
      params: {
        _page: page,
        _limit: limit,
        _sort: sort,
        _filter: filter,
        _order: order,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export { getSensorReadings };
