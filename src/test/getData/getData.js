import React from "react";
import axios from "axios";
import validArr from "../validateArr/validArr";

const getData = async () => {
    try {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        const userIds = res.data.map((user) => user.id);
        return validArr(userIds);
    } catch (e) {}
};

export default getData;
