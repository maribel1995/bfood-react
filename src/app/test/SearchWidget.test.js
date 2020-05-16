import React from 'react';
import { render } from '@testing-library/react';
import SearchWidget from '../views/Home/SearchWidget';

test('renders learn react link', () => {
  const { getByText } = render(<SearchWidget />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});