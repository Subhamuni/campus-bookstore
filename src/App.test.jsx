import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";

describe("Mekong Campus Bookstore - Integration Tests", () => {
  it("renders the bookstore brand and catalog heading successfully", () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>,
    );

    // Verify Brand Logo in Navbar
    expect(screen.getByText("Bookstore")).toBeInTheDocument();

    // Verify Main Catalog Heading
    expect(
      screen.getByText(/Featured Course Materials & Tech Supplies/i),
    ).toBeInTheDocument();
  });
});
