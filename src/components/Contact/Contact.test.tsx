import { render } from '@testing-library/react';
import * as React from 'react';
import { install } from 'resize-observer';
import { Contact } from './Contact';

// IMPORTANT: Workaround for ReferenceError: ResizeObserver is not defined
install();

test('render the button Component', () => {
  render(<Contact />);
});
