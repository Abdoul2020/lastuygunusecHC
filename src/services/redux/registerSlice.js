import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerWithEmailAndPassword } from "../firebase"
import { toastify } from '../toastify';


export const addUserAsync = createAsyncThunk("register/addUserAsync", async(data) => {


    const res = await registerWithEmailAndPassword(data.email, data.password, data.firstName, data.lastName, data.phoneNumber).then((res) => {
        console.log("success here");
        console.log("res aldım:", res);
        console.log("res uygunsec user:", res.user);
        return { status: res.status, data: res.user }
    }).catch((err) => {
        console.log("hata var :", err)
        if (err === "auth/email-already-in-use") {
            toastify({ type: 'error', message: "Bu Hesap Kayıtlıdır" })
        }

        return { status: err.response.status, data: err.response.data };
    });

    console.log("res bakalım:", res)

    return res;

})



const registerSlice = createSlice({
    name: "register",
    initialState: {
        value: {},
        status: "",
        errors: null,
    },
    reducers: {
        statusReset(state) {
            state.status = "";
        }
    },
    extraReducers: {
        //addUser
        [addUserAsync.pending]: (state, action) => {
            state.status = "loading";
            state.errors = "";
        },
        [addUserAsync.fulfilled]: (state, action) => {

            state.value = action.payload.data;
            state.status = "success";
            state.errors = "";
            console.log("uyeoldu:", action.payload.data);
        },
        [addUserAsync.rejected]: (state, action) => {
            state.status = "error";
        }
    }
})
export const { statusReset } = registerSlice.actions
export default registerSlice.reducer;