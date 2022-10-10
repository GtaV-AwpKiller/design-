import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolKitRed from "./toolKitRed";

const rootReducer = combineReducers({
    toolkit: toolKitRed,
});

export const store = configureStore({
    reducer: rootReducer,
});
