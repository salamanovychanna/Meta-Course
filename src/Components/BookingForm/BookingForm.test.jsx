import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";


test("Renders the BookingForm button", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve");
  expect(headingElement).toBeInTheDocument();
});

describe("Time component", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("20 Aug 2020 02:12:00 GMT").getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("Check current time", () => {
    render(<BookingForm />);

    expect(screen.getByText(/Choose date/i)).toBeInTheDocument();
    // expect(screen.getByText()).toBeInTheDocument();
    expect(screen.getByDisplayValue(/2020/i)).toBeInTheDocument();
  });
});

describe("validation testing", () => {
  it("should enable submit button if date, number of guests inputs are valid, and date is in the future", () => {
    render(<BookingForm />);
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    const formattedFutureDate = futureDate.toISOString().split("T")[0];
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: formattedFutureDate } });

    const numberOfGuestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(numberOfGuestsInput, { target: { value: "5" } });

    const submitButton = screen.getByText("Reserve");
    expect(submitButton).toBeEnabled();
  });

  it("should show an error message if date, number of guests inputs are invalid, or date is in the past", async () => {
    render(<BookingForm  />);

    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 7);
    const formattedPastDate = pastDate.toISOString().split("T")[0];
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: formattedPastDate } });
    const submitButton = screen.getByText("Reserve");
    fireEvent.click(submitButton)
    const err = await screen.findByText('there is an error, please, try again')
    expect(err).toBeInTheDocument()
    // await expect(errorMessage).toBeInTheDocument();
  });
});
