import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie';
import axios from 'axios';

export const getUserInfoNoIdAsync = createAsyncThunk("user/getUserInfoNoIdAsync", async(data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.get(`/controlza/backend/api/user/index.php`, {
        headers: {
            'Authorization': token
        }
    }).then(res => {
        console.log("seeTher", res);
        return res;
    }).catch(err => {
        console.log(err);
    });
    return res;
});



//user Post  offer from table
export const postOfferFromNoUser = createAsyncThunk("user/postOfferFromNoUser", async(data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.get(`/controlza/backend/api/offer/index.php`, {
        headers: {
            'Authorization': token
        }
    }).then(res => {
        console.log("seeTher", res);
        return res;
    }).catch(err => {
        console.log(err);
    });
    return res;


});





export const postUserInfoAsync = createAsyncThunk("user/postUserInfoAsync", async(data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.post(`/controlza/backend/api/user/index.php`, {
        userUID: data.id,
    }, {
        headers: {
            'Authorization': token
        }
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
    });
    return { data: res, role: data.role };
});

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        user: [],
        serviceprovider: [],
        statusUser: "",
        statusCode: null,
        errors: null,
        userInfo: "",
    },
    reducers: {
        resetUsers(state) {
            state.user = [];
            state.serviceprovider = [];
            state.statusUser = "";
            state.statusCode = null;
            state.errors = null;
            state.userInfo = null
        },
    },
    extraReducers: {
        [getUserInfoNoIdAsync.pending]: (state) => {

            state.statusUser = "loading";
        },
        [getUserInfoNoIdAsync.fulfilled]: (state, action) => {

            console.log("daatatyuu", action.payload);
            state.statusUser = "success";
            state.userInfo = "eokoll"

        },
        [getUserInfoNoIdAsync.rejected]: (state) => {

            state.statusUser = "error";
        },
        [postUserInfoAsync.pending]: (state) => {
            state.statusUser = "loading";
        },
        [postUserInfoAsync.fulfilled]: (state, action) => {
            console.log("porrtt", action.payload.data);
            state.userInfo = action.payload.data.body
            state.statusUser = "success";
            if (action.payload.role === "servicep")
                state.serviceprovider = action.payload.data.data.body.data;
            else
                state.user = action.payload.data.data.body.data;

            state.statusUser = "success";
            state.statusCode = action.payload.data.data.status;
            state.errors = action.payload.data.data.body.errorMessage;
        },
        [postUserInfoAsync.rejected]: (state) => {

            state.statusUser = "error";
        }
    }
})

export const { resetUsers } = userInfoSlice.actions;
export default userInfoSlice.reducer;