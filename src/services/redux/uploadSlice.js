import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleUpload } from "../firebase"
import axios from "axios"
import { toastify } from '../toastify';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'; //cookies



export const uploadFileAsync = createAsyncThunk("login/uploadFileAsync", async(data) => {


    const res = await handleUpload(data.file).then((res) => {

        // fonksiyon olarak kullanılacak başka yere fonksiyon yaz
        console.log("res aldım:", res);
        //console.log("res uygunsec user:", res.user.accessToken);

        return res.user

    }).then((data) => {

        console.log("verifeied ne:", data);


    }).catch(err => {
        console.log("hata var login:", err);
        toastify({ type: 'error', message: "hata var" })
        return { status: err.response.status, data: err.response.data };
    });
    return res;

})



const uploadSlice = createSlice({
        name: "login",
        initialState: {
            value: {},
            status: "",
            errors: null,
        },

        reducers: {
            statusReset(state) {
                state.status = "";
            },

        },
        extraReducers: {
            //loginUser
            [uploadFileAsync.pending]: (state, action) => {

                state.status = "loading";
            },
            [uploadFileAsync.fulfilled]: (state, action) => {
                console.log("lazim olan bilgiler", action.payload.data);

            },
            [uploadFileAsync.rejected]: (state, action) => {
                console.log("error");

            }

        }
    })
    //export const { statusReset, updateUser } = uploadFileAsync.actions
export default uploadSlice.reducer;