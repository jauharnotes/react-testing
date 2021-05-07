import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Melakukan testing untuk seluruh App", () => {
  it("memunculkan role yang ada dalam sebuah document", () => {
    render(<App />);
    //    screen.getByRole("");
  });
});
