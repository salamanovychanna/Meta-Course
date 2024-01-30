import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve");
    expect(headingElement).toBeInTheDocument();
})

// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import BookingForm from './BookingForm';

// describe('BookingForm', () => {
//   it('renders BookingForm component', () => {
//     render(<BookingForm />);

//     // Use screen queries to check if the form elements are rendered
//     expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
//     expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
//     expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
//     expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
//     expect(screen.getByText('Reserve')).toBeInTheDocument();
//   });

//   it('submits the form with valid data', async () => {
//     render(<BookingForm />);

//     // Fill in form fields with valid data
//     fireEvent.change(screen.getByLabelText('Choose date'), {
//       target: { value: '2024-01-31' }, // Use a valid date
//     });

//     fireEvent.change(screen.getByLabelText('Choose time'), {
//       target: { value: '18:00' }, // Use a valid time
//     });

//     fireEvent.change(screen.getByLabelText('Number of guests'), {
//       target: { value: '4' }, // Use a valid number of guests
//     });

//     fireEvent.change(screen.getByLabelText('Occasion'), {
//       target: { value: 'Birthday' }, // Use a valid occasion
//     });

//     // Mock the submitAPI function to simulate a successful submission
//     jest.spyOn(window, 'submitAPI').mockResolvedValue({ data: 'Submission successful' });

//     // Trigger form submission
//     fireEvent.click(screen.getByText('Reserve'));

//     // Wait for the loading message to disappear
//     await waitFor(() => expect(screen.queryByText('loading...')).toBeNull());

//     // Expect the navigation to the '/confirmed' route
//     expect(window.location.pathname).toBe('/confirmed');
//   });

//   it('handles form submission with invalid data', () => {
//     render(<BookingForm />);

//     // Trigger form submission without filling in required fields
//     fireEvent.click(screen.getByText('Reserve'));

//     // Expect the error message to be displayed
//     expect(screen.getByText('there is an error, please, try again')).toBeInTheDocument();
//   });
// });
