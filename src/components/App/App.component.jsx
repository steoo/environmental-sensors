import React, { useCallback, useEffect, useReducer } from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import initialState from '../../store';
import { reducer } from '../../store/reducer';
import { getSensorReadings } from '../../api';
import { setResults } from '../../store/actions';
import Table from '../Table/Table.component';
import Toolbar from '../Table/Toolbar/Toolbar.component';

const Container = styled.div`
  width: 800px;
  margin: 50px auto;
`;

const AppComponent = () => {
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
    <Container>
      <Paper>
        <Table results={readings} />
      </Paper>
      <Toolbar currentPage={params.page} count={+totalCount} dispatch={dispatch} />
    </Container>
  );
};

export default AppComponent;
