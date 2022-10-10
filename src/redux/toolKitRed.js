import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: [`лол`, `обделаться по полной программе`],
};

export const incr = createAction("INCR");
export const decr = createAction("DECR");

export default createReducer(initialState, {
    [incr]: function (state) {
        state.count = state.count + 1;
    },
    [decr]: function (state) {
        state.count = state.count - 1;
    },
});

console.log(decr);
