import React from 'react';
import PropTypes from 'prop-types';
import { TablePagination } from '@material-ui/core';
import { getNextPage, getPrevPage } from '../../../store/actions';

const Pagination = ({ currentPage, count, dispatch }) => {
  const onChangePage = (event, page) => {
    if (page < currentPage - 1) {
      return dispatch(getPrevPage());
    }

    return dispatch(getNextPage());
  };

  const isVisible = currentPage && count;

  return isVisible ? (
    <TablePagination
      page={currentPage - 1}
      count={count}
      rowsPerPage={10}
      rowsPerPageOptions={[10]}
      onChangePage={onChangePage}
    />
  ) : null;
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Pagination;
