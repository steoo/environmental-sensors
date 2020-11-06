import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import ResultTableRow from './TableRow/TableRow.component';

const Container = styled(TableContainer)`
  max-height: 440px;
`;

const ResultsTable = ({ results }) => {
  const cells = {
    id: 'ID',
    box_id: 'Box ID',
    sensor_type: 'Sensor Type',
    name: 'Name',
    unit: 'Unit',
    reading: 'Reading',
    reading_ts: 'Timestamp',
  };

  const keys = _.keys(cells);
  const values = _.values(cells);

  const rows = results.map((item) => _.pick(item, keys));

  return (
    <Container>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {values.map((item, i) => (
              <TableCell key={i}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item, i) => (
            <ResultTableRow key={i} {...item} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

Table.propTypes = {
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
  ),
};

Table.defaulProps = {
  results: [],
};

export default ResultsTable;
