import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import '@testing-library/jest-dom'


test('Renders the BookingForm button', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve");
    expect(headingElement).toBeInTheDocument()

})

describe('Time component', () => {
  beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('20 Aug 2020 02:12:00 GMT').getTime())
    });

    afterAll(() => {
      jest.useRealTimers();
    });

  test('Check current time', () => {
      render(<BookingForm />);

      expect(screen.getByText(/Choose date/i)).toBeInTheDocument();
      // expect(screen.getByText()).toBeInTheDocument();
      expect(screen.getByDisplayValue(/2020/i)).toBeInTheDocument();
  })
});