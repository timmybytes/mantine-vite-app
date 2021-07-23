import { render } from '@testing-library/react';
import * as React from 'react';
import { Header } from './Header';

test('render the button Component', () => {
  render(<Header />);
});
