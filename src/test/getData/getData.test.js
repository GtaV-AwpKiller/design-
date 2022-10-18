import React from "react";
import getData from "./getData";
import axios from "axios";

jest.mock("axios");

describe("getData", () => {
    let res;
    beforeEach(() => {
        res = {
            data: [
                {
                    id: 1,
                    name: "1",
                    username: "1",
                    email: "1",
                    address: {
                        street: "1",
                        suite: "1",
                        city: "1",
                        zipcode: "1",
                        geo: {
                            lat: "19",
                            lng: "1",
                        },
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "1",
                    company: {
                        name: "1",
                        catchPhrase: "1",
                        bs: "1 1",
                    },
                },
                {
                    id: 2,
                    name: "Ervin Howell",
                    username: "Antonette",
                    email: "Shanna@melissa.tv",
                    address: {
                        street: "Victor Plains",
                        suite: "Suite 879",
                        city: "Wisokyburgh",
                        zipcode: "90566-7771",
                        geo: {
                            lat: "-43.9509",
                            lng: "-34.4618",
                        },
                    },
                    phone: "010-692-6593 x09125",
                    website: "anastasia.net",
                    company: {
                        name: "Deckow-Crist",
                        catchPhrase: "Proactive didactic contingency",
                        bs: "synergize scalable supply-chains",
                    },
                },
                {
                    id: 3,
                    name: "Clementine Bauch",
                    username: "Samantha",
                    email: "Nathan@yesenia.net",
                    address: {
                        street: "Douglas Extension",
                        suite: "Suite 847",
                        city: "McKenziehaven",
                        zipcode: "59590-4157",
                        geo: {
                            lat: "-68.6102",
                            lng: "-47.0653",
                        },
                    },
                    phone: "1-463-123-4447",
                    website: "ramiro.info",
                    company: {
                        name: "Romaguera-Jacobson",
                        catchPhrase: "Face to face bifurcated interface",
                        bs: "e-enable strategic applications",
                    },
                },
            ],
        };
    });
    test("lol", async () => {
        axios.get.mockReturnValue(res);
        const data = await getData();
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(["1", "2", "3"]);
        expect(data).toMatchInlineSnapshot(`
[
  "1",
  "2",
  "3",
]
`);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});
