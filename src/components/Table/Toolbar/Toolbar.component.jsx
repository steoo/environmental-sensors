import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TablePagination, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import { getFilterBy, getNextPage, getPrevPage, getSortBy } from '../../../store/actions';
import { DEFAULT_LIMIT, DEFAULT_SORT } from '../../../api/constants';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RootContainer = styled(FlexContainer)`
  margin-top: 25px;
  padding: 0 10px;
`;

const SelectContainer = styled(FlexContainer)`
  margin-left: 25px;

  label {
    min-width: 120px;
  }
`;

const Toolbar = ({ currentPage, count, dispatch }) => {
  const [sortBy, setSortBy] = useState(DEFAULT_SORT);
  const [filterBy, setFilterBy] = useState('none');

  const onChangePage = (event, page) => {
    if (page < currentPage - 1) {
      return dispatch(getPrevPage());
    }

    return dispatch(getNextPage());
  };

  const onChangeSort = (event) => {
    setSortBy(event.target.value);
  };

  const onChangeFilter = (event) => {
    setFilterBy(event.target.value);
  };

  useEffect(() => {
    dispatch(getSortBy(sortBy));
  }, [sortBy, dispatch]);

  useEffect(() => {
    if (filterBy !== 'none') {
      dispatch(getFilterBy({ filterName: 'sensor_type', filterValue: filterBy }));
    }
  }, [filterBy, dispatch]);

  const isVisible = currentPage && count;

  return isVisible ? (
    <RootContainer>
      <FlexContainer>
        <FormControl>
          <InputLabel id="sort-by-select">Sort By</InputLabel>
          <Select labelId="sort-by-select" onChange={onChangeSort} value={sortBy}>
            <MenuItem value="reading_ts">Timestamp</MenuItem>
            <MenuItem value="sensor_type">Sensor Type</MenuItem>
          </Select>
        </FormControl>
        <SelectContainer>
          <FormControl>
            <InputLabel id="filter-by-select">Sensor Type</InputLabel>
            <Select labelId="filter-by-select" onChange={onChangeFilter} value={filterBy}>
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="O3">O3</MenuItem>
              <MenuItem value="NO2">NO2</MenuItem>
              <MenuItem value="CO">CO</MenuItem>
              <MenuItem value="TEMP">TEMP</MenuItem>
              <MenuItem value="RH">RH</MenuItem>
            </Select>
          </FormControl>
        </SelectContainer>
      </FlexContainer>
      <TablePagination
        component="div"
        page={currentPage - 1}
        count={count}
        rowsPerPage={DEFAULT_LIMIT}
        rowsPerPageOptions={[DEFAULT_LIMIT]}
        onChangePage={onChangePage}
      />
    </RootContainer>
  ) : null;
};

Toolbar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Toolbar;
