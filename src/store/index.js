import { configureStore } from "@reduxjs/toolkit";
import MailReducer from './Slices/MailSlice'
import AuthReducer from './Slices/AuthSlice'

export const store = configureStore({
    reducer:{
        mail: MailReducer,
        auth: AuthReducer
    }
})

