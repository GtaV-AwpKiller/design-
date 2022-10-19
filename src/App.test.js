import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Lol from "./components/Blocks/testBlock/Lol";

test("renders learn react link", async () => {
    render(<Lol />);
    const linkElement = await screen.findByText(/data/i);
    expect(linkElement).toBeInTheDocument();
    // expect(linkElement).toMatchSnapshot();
});

test("lol", () => {
    render(<Lol />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);

    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
});

test("input event", () => {
    render(<Lol />);
    const input = screen.getByPlaceholderText(/inp val/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    fireEvent.input(input, {
        target: { value: "lol" },
    });
    userEvent.type(input, " lol");

    expect(screen.queryByTestId("value-elem")).toContainHTML("lol");
});
