import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa Prawito", () => {
  render(<App />);
  const text = screen.getByText("Hello Prawito");
  expect(text).toBeInTheDocument();
});
