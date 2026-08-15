
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/Features/cart/cartSlice";

import userReducer from "./src/Features/user/userSlice";
const store=configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
})
export default store;