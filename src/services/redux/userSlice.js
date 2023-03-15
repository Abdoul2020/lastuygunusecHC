import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'; //cookies

import { forgetPassword } from "../firebase"
import { toastify } from '../toastify';




//get UserData Info
export const getUserAsync = createAsyncThunk("profile/getUserAsync", async() => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    console.log("token doğru:", token)
    const res = await axios.get(`/controlza/backend/api/user/index.php`, {
            headers: {
                'Authorization': token
            }
        }).then((res) => {

            console.log("UserBu::", res);
            return res;
        })
        .catch(err => {

            console.log("kullanıcı veri alamadık:", err);


            return err;
        });

    return res;

});


//forget Password 

export const forgetPasswordAsync = createAsyncThunk("login/forgetPasswordAsync", async(data) => {

    const res = await forgetPassword(data.email).then((res) => {

        // fonksiyon olarak kullanılacak başka yere fonksiyon yaz
        console.log("res aldım:", res);
        //console.log("res uygunsec user:", res.user.accessToken);

        console.log("Başarılı Gitti::")

        return res
    }).then((data) => {

        console.log("DatatVeri::")

    }).catch((err) => {

        console.log("hatavar:", err);

        if (err == "FirebaseError: Firebase: Error (auth/user-not-found).") {

            toastify({ type: 'error', message: "Bu hesap Kayıtlı değildir" })

        }

    });
    return res;

})





//send offer to servis provider
export const sendOfferToAsync = createAsyncThunk("profile/sendOfferToAsync", async(data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    console.log("token doğru:", token)
    const res = await axios.post(`/controlza/backend/api/offer/index.php`, {

            plaka: data.plaka,
            service_codename: data.service_codename,
            additional_info: data.additional_info,
            license_serial: data.license_serial,
            asbis: data.asbis

        }, {
            headers: {
                'Authorization': token
            }

        }).then((res) => {
            return res;
        })
        .catch(err => {
            console.log("kullanıcı veri alamadık:", err)
            return err;
        });

    return res;

});




//get an offer without Registered
export const getOfferWithoutRegistered = createAsyncThunk("profile/sendOfferToAsync", async(data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');

    console.log("token doğru:", token)
    const res = await axios.post(`/controlza/backend/api/offer/index.php`, {

            service_codename: data.service_codename,
            additional_info: data.additional_info,
            plaka: data.plaka,
            license_serial: data.license_serial,
            asbis: data.asbis

        }, {
            headers: {
                'Authorization': token
            }

        }).then((res) => {
            return res;
        })
        .catch(err => {

            console.log("kullanıcı veri alamadık:", err)

            return err;
        });

    return res;

});







export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: null,
        displayName: null,
        email: null,
        phoneNumber: null,
        emailVerified: null,
        tc: null,
        role: null,
        status: "",
        offerSendStatus: "",
    },

    extraReducers: {

        [getUserAsync.pending]: (state, action) => {

            state.status = "loading";
        },
        [getUserAsync.fulfilled]: (state, action) => {

            state.status = "success";
            state.displayName = action.payload.data ? action.payload.data.body.data.name : "";
            state.email = action.payload.data ? action.payload.data.body.data.email : "";


        },

        [forgetPasswordAsync.pending]: (state, action) => {

            state.status = "loading";

        },
        [forgetPasswordAsync.fulfilled]: (state, action) => {

            state.status = "success";

        },



        [sendOfferToAsync.pending]: (state, action) => {
            state.offerSendStatus = "loading";
        },
        [sendOfferToAsync.fulfilled]: (state, action) => {

            state.offerSendStatus = "success";


        },

    }



});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;