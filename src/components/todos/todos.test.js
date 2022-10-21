import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Todos from "./Todos";
import store from "../../redux/index";
import { MemoryRouter } from "react-router-dom";

describe("first", () => {
    test("should first", async () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Todos />
                </Provider>
            </MemoryRouter>
        );
        const incrButt = getByTestId("incr-butt");
        expect(getByTestId("val-count")).toHaveTextContent("счетчик 0");
        userEvent.click(incrButt);
        expect(getByTestId("val-count")).toHaveTextContent("счетчик 1");
    });
});
