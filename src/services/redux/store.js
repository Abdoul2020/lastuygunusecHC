import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice'
import servicepSlice from './servicepSlice'
import adminSlice from './adminSlice';
import userInfoSlice from './userInfoSlice';
import userSlice from './userSlice';
import uploadSlice from './uploadSlice';


export const store = configureStore({

    reducer: {
        registerSlice: registerSlice,
        user: userReducer,
        loginSlice: loginSlice,
        servicepSlice: servicepSlice,
        adminSlice: adminSlice,
        userInfo: userInfoSlice,
        userSlice: userSlice,
        uploadSlice: uploadSlice,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});