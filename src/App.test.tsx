import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render and match snapshot', () => {
  const {
    container: { firstChild },
  } = 
  render(<App />);
  expect(firstChild).toMatchSnapshot();
});
