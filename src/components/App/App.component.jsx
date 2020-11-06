import React, { useCallback, useEffect, useReducer } from 'react';
import initialState from '../../store';
import { reducer } from '../../store/reducer';
import { getSensorReadings } from '../../api';
import { setResults } from '../../store/actions';
import Table from '../Table/Table.component';

function AppComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { params, results } = state;

  const getData = useCallback(async () => {
    const readings = await getSensorReadings(params);

    dispatch(setResults(readings));
  }, [params]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Table dispatch={dispatch} results={results} />
    </div>
  );
}

export default AppComponent;
