import { render } from '@testing-library/react';
import * as React from 'react';
import { About } from './About';

test('render the button Component', () => {
  render(<About />);
});
