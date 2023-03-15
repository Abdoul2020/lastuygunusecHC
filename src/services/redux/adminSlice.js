import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie';
import axios from 'axios';
import { getTranslatedData } from "../../utils/translater";

export const getAllOffersProviderAsync = createAsyncThunk("admin/getAllOffersProviderAsync", async(data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.get(`/controlza/backend/api/admin/offers/index.php?iscompleted=${data.is_completed}`, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {

            console.log("whatgu", res)
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;
});

export const getUserInfo = createAsyncThunk("admin/getUserInfo", async(data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.get(`/controlza/backend/api/admin/users/index.php?role=${data.role}`, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;
});

export const putUserRole = createAsyncThunk("admin/putUserRole", async(data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.put(`/controlza/backend/api/admin/users/index.php`, {
            userUID: data.uid,
            role: data.role,
            blocked: data.blocked
        }, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;
});

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        offers: [],
        users: [],
        status: "",
        statusCode: null,
        errors: null,
    },
    extraReducers: {
        [getAllOffersProviderAsync.pending]: (state) => {
            state.status = "loading";
        },
        [getAllOffersProviderAsync.fulfilled]: (state, action) => {
            state.offers = getTranslatedData(action.payload.data.body.data);
            console.log(state.offers);
            state.status = "success";
            state.statusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
        },
        [getAllOffersProviderAsync.rejected]: (state) => {
            state.status = "error";
        },
        [getUserInfo.pending]: (state) => {
            state.status = "loading";
        },
        [getUserInfo.fulfilled]: (state, action) => {
            state.users = action.payload.data.body.data;
            state.status = "success";
            state.statusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
        },
        [getUserInfo.rejected]: (state) => {
            state.status = "error";
        },
        [putUserRole.pending]: (state) => {
            state.status = "loading";
        },
        [putUserRole.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.status = "success";
            state.statusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
        },
        [putUserRole.rejected]: (state) => {
            state.status = "error";
        }
    }
})

export default adminSlice.reducer;