import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';

const ResultsTable = ({ dispatch, results }) => {
  const cells = {
    id: 'ID',
    box_id: 'Box ID',
    sensor_type: 'Sensor Type',
    name: 'Name',
    reading: 'Reading',
    reading_ts: 'Timestamp',
  };

  const keys = _.keys(cells);
  const values = _.values(cells);

  const rows = results.map((item) => _.pick(item, keys));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {values.map((item, i) => (
              <TableCell key={i}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item) => (
            <TableRow key={item.id}>
              {_.values(item).map((value, i) => (
                <TableCell key={i}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      box_id: PropTypes.string,
      sensor_type: PropTypes.string,
      unit: PropTypes.string,
      name: PropTypes.string,
      range_l: PropTypes.number,
      range_u: PropTypes.number,
      longitude: PropTypes.number,
      latitude: PropTypes.number,
      reading: PropTypes.number,
      reading_ts: PropTypes.string,
    }),
  ).isRequired,
};

export default ResultsTable;
