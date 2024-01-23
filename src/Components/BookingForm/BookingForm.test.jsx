
import { render, screen } from '@testing-library/react';

import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('renders BookingForm component', () => {
    render(<BookingForm />);

    screen.debug();
  });
});