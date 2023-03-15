import { Grid } from "@mui/material";
import React from "react";
import UserListTable from "./UserListTable";

import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import { getUserInfoNoIdAsync } from "../../services/redux/userInfoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get("idToken");
    
        if (token !== null && token!== undefined) {
    
          console.log("ThereisToken", token)
        } else{
        navigate("/page/404");
      } 
    
      }, []);


  return (
    <Grid container direction="column" sx={{ minHeight: "87vh" }}>
        
      <UserListTable />

    </Grid>
  );
};

export default AdminUser;
