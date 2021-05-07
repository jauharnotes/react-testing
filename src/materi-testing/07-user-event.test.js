import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import CompUserEvent from "./CompUserEvent";

const MOCK_SUBMIT_BTN = jest.fn();

describe("testing seluruh app", () => {
  it("testing onChange event", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("input value");
    userEvent.type(input, "Prawito Hudoro");
    expect(
      screen.getByText(/Anda mengetik Prawito Hudoro/)
    ).toBeInTheDocument();
  });
  it("testing onClick pada text submit", () => {
    render(<CompUserEvent onSubmit={MOCK_SUBMIT_BTN} />);
    const textSubmit = screen.getByTestId("text-submit");
    userEvent.click(textSubmit);
    expect(MOCK_SUBMIT_BTN).toHaveBeenCalled();
  });
});
