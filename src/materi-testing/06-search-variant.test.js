import { render, screen } from "@testing-library/react";
import App from "../App";
import { data } from "./CompVariant";

describe("Testing semua aplikasi di dalam App", () => {
  it("melakukan testing untuk queryBy dan findBy", async () => {
    render(<App />);
    expect(screen.queryByText(/Selamat datang/)).toBeNull();
    //screen.debug();
    expect(await screen.findByText(/Selamat datang/)).toBeInTheDocument();
    //screen.debug();
  });
  it("melakukan render sebanyak total hari", () => {
    render(<App />);
    expect(screen.getAllByTestId("hari")).toHaveLength(data.length);
  });
});
