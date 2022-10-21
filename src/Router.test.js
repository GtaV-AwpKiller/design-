import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import { store } from "./redux";

describe("TEST ROUTS", () => {
    test("Rout test", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId("main-link");
        const aboutLink = screen.getByTestId("about-link");
        const helpLink = screen.getByTestId("help-link");

        userEvent.click(aboutLink);
        expect(screen.getByTestId("about-page")).toBeInTheDocument();

        userEvent.click(mainLink);
        expect(screen.getByTestId("mainPage")).toBeInTheDocument();
    });
});
