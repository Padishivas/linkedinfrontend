import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import postSlice from "./slices/postSlice";

export default configureStore({
    reducer: {
        User: userSlice,
        Post: postSlice
    }
});
