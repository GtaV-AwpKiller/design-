import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import FirstSection from "./components/Blocks/First/FirstSection";
import Header from "./components/Header/Header";
import Lol from "./components/Blocks/testBlock/Lol";
import userEvent from "@testing-library/user-event";

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

    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
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
