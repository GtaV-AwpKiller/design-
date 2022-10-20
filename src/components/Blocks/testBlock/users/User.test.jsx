/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Users from "./Users";

import axios from "axios";
// import * as axios from "axios";

jest.mock(axios);

describe("USERS TEST", () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: "Leanne Graham",
                },
                {
                    id: 2,
                    name: "Ervin Howell",
                },
                {
                    id: 3,
                    name: "Clementine Bauch",
                },
            ],
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it("renders learn react link", async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });
});
