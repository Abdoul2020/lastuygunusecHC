import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginWithEmailAndPassword } from "../firebase"
import axios from "axios"
import { toastify } from '../toastify';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'; //cookies



export const loginUserAsync = createAsyncThunk("login/loginUserAsync", async(data) => {



    const res = await loginWithEmailAndPassword(data.email, data.password).then((res) => {

        // fonksiyon olarak kullanılacak başka yere fonksiyon yaz
        console.log("resaldım:", res);
        //console.log("res uygunsec user:", res.user.accessToken);

        return res.user

    }).then((data) => {

        console.log("verifeied ne:", data.emailVerified);

        if (data.emailVerified === false) {

            toastify({ type: 'success', message: 'Email Dogrulama linki gonderildi,Lütfen Onaylayın.' });

            console.log("onay yok :")
        } else {

            const FBIdToken = `${data.accessToken}`

            console.log("set oldı")
            const cookies = new Cookies();
            cookies.set('idToken', FBIdToken, { path: '/' });
            console.log("set olmadı")

            //localStorage.setItem("GZIToken", FBIdToken);
            //axios.defaults.headers.common["Authorization"] = FBIdToken;

            return { data: data }

        }
    }).catch(err => {

        console.log("hatavarlogin:", err)


        if (err == "FirebaseError: Firebase: Error (auth/wrong-password).") {

            console.log("hatavarBurada")
            toastify({ type: 'error', message: "E-Posta Veya Parola Yanlış" })

        } else if (err == "FirebaseError: Firebase: Error (auth/user-not-found).") {

            toastify({ type: 'error', message: "Bu hesap Kayıtlı değildir" })

        } else {

            toastify({ type: 'error', message: "hata var" })

        }

        return { status: err.response.status, data: err.response.data };
    });
    return res;

})



const loginSlice = createSlice({
    name: "login",
    initialState: {
        value: {},
        status: "",
        errors: null,


        uid: null,
        displayName: null,
        email: null,
        phoneNumber: null,
        emailVerified: null,
    },
    reducers: {
        statusReset(state) {
            state.status = "";
        },
        updateUser: (state, action) => {
            console.log(action);
            state.uid = action.payload.data.uid;
            state.displayName = action.payload.data.displayName;
            state.email = action.payload.data.email;
            state.phoneNumber = action.payload.data.phoneNumber;
            state.emailVerified = action.payload.data.emailVerified;
        },
    },
    extraReducers: {
        //loginUser
        [loginUserAsync.pending]: (state, action) => {

            state.status = "loading";
        },
        [loginUserAsync.fulfilled]: (state, action) => {


            if (action.payload.status === 400 || action.payload.status === 500) {
                state.value = "";
                state.status = "error";
                state.errors = action.payload.data;
            } else {
                console.log("lazim olan bilgiler", action.payload.data);
                state.value = action.payload.data;
                state.status = "success";
                state.uid = action.payload.data.uid;
                state.displayName = action.payload.data.displayName;
                state.email = action.payload.data.email;
                state.phoneNumber = action.payload.data.phoneNumber;
                state.emailVerified = action.payload.data.emailVerified;
            }
        },
        [loginUserAsync.rejected]: (state, action) => {
            console.log("errorToCheck", action);
            state.status = "error";
            state.errors = action
        }

    }
})
export const { statusReset, updateUser } = loginSlice.actions
export default loginSlice.reducer;