//to use redux we have to install react-redux and @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";

const Stored = configureStore({
    reducer : {
        custom : customReducer
    }
});

export default Stored;