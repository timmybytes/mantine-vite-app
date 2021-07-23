import { render } from '@testing-library/react';
import * as React from 'react';
import { Card } from './Card';

test('render the button Component', () => {
  render(<Card />);
});
