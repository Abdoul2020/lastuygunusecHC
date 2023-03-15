import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'; //cookies
import axios from 'axios';
import { toastify } from '../toastify';
import { getTranslatedData } from "../../utils/translater";



// /controlza/backend/api/servicep/index.php

export const getServiceProviderAsync = createAsyncThunk("servicep/getServiceProviderAsync", async() => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.get(`/controlza/backend/api/servicep/index.php`, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            console.log("resdataat", res);
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;

});

export const postServiceProviderAsync = createAsyncThunk("servicep/postServiceProviderAsync", async(data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.post(`/controlza/backend/api/servicep/index.php`, {
            service_codename: data.service_codename
        }, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            console.log(res.data);
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;

});

export const putServiceProviderAsync = createAsyncThunk("servicep/putServiceProviderAsync", async(data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.put(`/controlza/backend/api/servicep/index.php`, {
            id: data.id,
            [data.title]: data.data,
        }, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            return { data: res };
        })
        .catch(err => {
            return err;
        });
    return res;

});


const servicepSlice = createSlice({
    name: "servicep",
    initialState: {
        getStatusCode: null,
        offers: [],
        editOffer: [],

        statusErr: "",
        statusCode: null,
        errors: null,
    },
    reducers: {
        statusReset(state) {
            state.statusErr = "";
        },
        resetOffer(state) {
            state.statusCode = null;
        },
        setEditOffer(state, action) {
            state.editOffer = action.payload;
        }
    },
    extraReducers: {
        [getServiceProviderAsync.pending]: (state) => {
            state.statusErr = "loading";
        },
        [getServiceProviderAsync.fulfilled]: (state, action) => {
            state.statusErr = "success";
            state.getStatusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
            if (state.getStatusCode == 200)
                state.offers = getTranslatedData(action.payload.data.body.data);
            else
                toastify({ type: 'error', message: "Listelenecek teklif bulunamadı", autoClose: 1000 });

        },
        [getServiceProviderAsync.rejected]: (state) => {
            state.statusErr = "error";
        },
        [postServiceProviderAsync.pending]: (state) => {
            state.statusErr = "loading";
        },
        [postServiceProviderAsync.fulfilled]: (state, action) => {
            state.errors = action.payload.data.body.errorMessage;
            state.statusErr = "success";
            state.statusCode = action.payload.data.status;
            if (state.statusCode != 200)
                toastify({ type: 'error', message: "Alınacak talep bulunamadı", autoClose: 1000 });
        },
        [postServiceProviderAsync.rejected]: (state) => {
            state.statusErr = "error";
        },

        [putServiceProviderAsync.pending]: (state) => {
            state.statusErr = "loading";
        },
        [putServiceProviderAsync.fulfilled]: (state, action) => {
            state.statusErr = "success";
            resetOffer();
        },
        [putServiceProviderAsync.rejected]: (state) => {
            state.statusErr = "error";
        }
    }
})
export const { statusReset, resetOffer, setEditOffer } = servicepSlice.actions
export default servicepSlice.reducer;