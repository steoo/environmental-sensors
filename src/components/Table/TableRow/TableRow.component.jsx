import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

const ResultTableRow = ({ id, box_id, sensor_type, name, reading, reading_ts }) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{box_id}</TableCell>
      <TableCell>{sensor_type}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{reading}</TableCell>
      <TableCell>{reading_ts}</TableCell>
    </TableRow>
  );
};

ResultTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  box_id: PropTypes.string.isRequired,
  sensor_type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reading: PropTypes.number.isRequired,
  reading_ts: PropTypes.string.isRequired,
};

export default ResultTableRow;
