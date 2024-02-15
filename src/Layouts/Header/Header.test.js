import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderTab from "../Header/HeaderTab";

describe("HeaderTab component", () => {
  it("renders correctly when window size is less than or equal to 1024", () => {
    // Mock window innerWidth to simulate a small screen
    global.innerWidth = 1024;

    // Render the HeaderTab component
    render(<HeaderTab />);

    // Check if the component is rendered
    const headerTabElement = screen.getByTestId("header-tab");
    expect(headerTabElement).toBeInTheDocument();
  });
});
