import React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody } from '@material-ui/core';
import ResultTableRow from './TableRow.component';

const tableRowData = {
  id: 'Box-A2-CO',
  box_id: 'Box-A2',
  sensor_type: 'CO',
  unit: 'ppm',
  name: 'Carbon monoxide',
  reading: 437,
  reading_ts: '2019-09-10T00:30:00',
};

describe('Components', () => {
  describe('Table Row', () => {
    it('should render, without crashing', () => {
      const { container } = render(
        <Table>
          <TableBody>
            <ResultTableRow {...tableRowData} />
          </TableBody>
        </Table>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
