import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TablePagination, Select, InputLabel, MenuItem } from '@material-ui/core';
import { getFilterBy, getNextPage, getPrevPage, getSortBy } from '../../../store/actions';
import { DEFAULT_LIMIT, DEFAULT_SORT } from '../../../api/constants';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectContainer = styled(FlexContainer)`
  margin-left: 10px;
`;

const Toolbar = ({ currentPage, count, dispatch }) => {
  const [sortBy, setSortBy] = useState(DEFAULT_SORT);
  const [filterBy, setFilterBy] = useState('');

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
    dispatch(getFilterBy({ filterName: 'sensor_type', filterValue: filterBy }));
  }, [filterBy, dispatch]);

  const isVisible = currentPage && count;

  return isVisible ? (
    <FlexContainer>
      <FlexContainer>
        <FlexContainer>
          <InputLabel id="sort-by-select">Sort By:</InputLabel>
          <Select labelId="sort-by-select" onChange={onChangeSort} value={sortBy}>
            <MenuItem value="reading_ts">Timestamp</MenuItem>
            <MenuItem value="sensor_type">Sensor Type</MenuItem>
          </Select>
        </FlexContainer>
        <SelectContainer>
          <InputLabel id="filter-by-select">Filter By Sensor Type:</InputLabel>
          <Select labelId="filter-by-select" onChange={onChangeFilter} value={filterBy}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="O3">O3</MenuItem>
            <MenuItem value="NO2">NO2</MenuItem>
            <MenuItem value="CO">CO</MenuItem>
            <MenuItem value="TEMP">TEMP</MenuItem>
            <MenuItem value="RH">RH</MenuItem>
          </Select>
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
    </FlexContainer>
  ) : null;
};

Toolbar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Toolbar;
