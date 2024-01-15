
import { render, screen } from '@testing-library/react';

import BookingForm from './BookingForm';

describe('App', () => {
  it('renders App component', () => {
    render(<BookingForm />);

    screen.debug();
  });
});