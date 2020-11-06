import React, { useCallback, useEffect, useReducer } from 'react';
import initialState from '../../store';
import { reducer } from '../../store/reducer';
import { getSensorReadings } from '../../api';
import { setResults } from '../../store/actions';
import Table from '../Table/Table.component';
import Pagination from '../Table/Pagination/Pagination.component';

function AppComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { params, readings, totalCount } = state;

  const getData = useCallback(async () => {
    const responseResult = await getSensorReadings(params);

    dispatch(setResults(responseResult));
  }, [params]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Table results={readings} />
      <Pagination currentPage={params.page} count={+totalCount} dispatch={dispatch} />
    </div>
  );
}

export default AppComponent;
