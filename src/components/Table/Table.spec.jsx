import React from 'react';
import { render } from '@testing-library/react';
import ResultsTable from './Table.component';

const tableData = {
  results: [
    {
      id: 'Box-A1-O3',
      box_id: 'Box-A1',
      sensor_type: 'O3',
      unit: 'ppm',
      name: 'Ozone',
      range_l: 0.0,
      range_u: 1000.0,
      longitude: -0.06507,
      latitude: 51.51885,
      reading: 672,
      reading_ts: '2019-09-10T00:00:00',
    },
    {
      id: 'Box-A1-NO2',
      box_id: 'Box-A1',
      sensor_type: 'NO2',
      unit: 'ppm',
      name: 'Nitrogen dioxide',
      range_l: 0.0,
      range_u: 1000.0,
      longitude: -0.06507,
      latitude: 51.51885,
      reading: 193,
      reading_ts: '2019-09-10T00:00:00',
    },
    {
      id: 'Box-A1-CO',
      box_id: 'Box-A1',
      sensor_type: 'CO',
      unit: 'ppm',
      name: 'Carbon monoxide',
      range_l: 0.0,
      range_u: 1000.0,
      longitude: -0.06507,
      latitude: 51.51885,
      reading: 331,
      reading_ts: '2019-09-10T00:00:00',
    },
  ],
};

describe('Components', () => {
  describe('Table', () => {
    it('should render, without crashing', () => {
      const { container } = render(<ResultsTable {...tableData} />);

      expect(container).toMatchSnapshot();
    });
  });
});
