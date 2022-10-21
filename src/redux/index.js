import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolKitRed from "./toolKitRed";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    // preloadedState: {
    //     count: 100,
    // },
});
