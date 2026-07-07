import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterActions } from "./counter";
import authReducer, { authActions } from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;

export { counterActions, authActions };