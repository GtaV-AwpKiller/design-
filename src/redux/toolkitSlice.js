import { createSlice } from "@reduxjs/toolkit";

const toolKitSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        todos: [`подготовить цемент`, `обделаться по полной программе`],
    },
    reducers: {
        incr(state) {
            state.count = state.count + 1;
        },
        decr(state) {
            state.count = state.count - 1;
        },
        add(state, action) {
            state.todos.push(action.payload);
        },
        del(state) {
            state.todos.pop();
        },
        validateCount(state) {
            if (state.count < 0 || state.count > 100) {
                return false;
            }
            return true;
        },
    },
});

export default toolKitSlice.reducer;
export const { incr, decr, add, del, validateCount } = toolKitSlice.actions;
