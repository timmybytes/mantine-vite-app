import { render } from '@testing-library/react';
import * as React from 'react';
import { install } from 'resize-observer';
import { Form } from './Form';

// IMPORTANT: Workaround for ReferenceError: ResizeObserver is not defined
install();

test('render the button Component', () => {
  render(<Form />);
});
