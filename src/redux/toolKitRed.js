import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: [`подготовить цемент`, `обделаться по полной программе`],
};

export const incr = createAction("INCR");
export const decr = createAction("DECR");
export const add = createAction("ADD");
export const del = createAction("DEL");

export default createReducer(initialState, {
    [incr]: function (state) {
        state.count = state.count + 1;
    },
    [decr]: function (state) {
        state.count = state.count - 1;
    },
    [add]: function (state) {
        state.todos = state.todos;
    },
    [del]: function (state) {
        state.todos = state.todos;
    },
});

console.log(decr);
