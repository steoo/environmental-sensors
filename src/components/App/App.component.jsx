import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { Paper, LinearProgress } from '@material-ui/core';
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

const ErrorContainer = styled.div`
  text-align: center;
  color: red;
  padding: 10px 0;
`;

const AppComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { params, readings, totalCount } = state;

  const getData = useCallback(async () => {
    setError(false);
    setIsLoading(true);

    try {
      const responseResult = await getSensorReadings(params);

      dispatch(setResults(responseResult));
    } catch (e) {
      setError(true);
    }

    setIsLoading(false);
  }, [params]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <Paper>
        {readings && <Table results={readings} />}
        {isLoading && <LinearProgress />}
        {error && <ErrorContainer>An Unexpected Error Occurred</ErrorContainer>}
      </Paper>
      <Toolbar currentPage={params.page} count={+totalCount} dispatch={dispatch} />
    </Container>
  );
};

export default AppComponent;
