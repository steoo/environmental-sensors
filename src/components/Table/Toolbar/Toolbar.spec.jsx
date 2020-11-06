import React from 'react';
import { render } from '@testing-library/react';
import Toolbar from './Toolbar.component';

const toolbarData = {
  currentPage: 1,
  count: 800,
  dispatch: jest.fn(),
};

describe('Components', () => {
  describe('Toolbar', () => {
    it('should render, without crashing', () => {
      const { container } = render(<Toolbar {...toolbarData} />);

      expect(container).toMatchSnapshot();
    });
  });
});
