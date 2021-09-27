import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa Jauhar", () => {
  render(<App />);
  const text = screen.getByText("Hello Jauhar");
  expect(text).toBeInTheDocument();
});
