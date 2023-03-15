import React, {useState,useEffect} from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import InfiniteCarousel from 'react-leaf-carousel';
import { Height } from "@mui/icons-material";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import healthecare from "../../assets/images/MenuKons/healthcare.gif"
import carArac from "../../assets/navbarKon/cararac.svg"
import evHouse from "../../assets/navbarKon/evHouse.svg"
import sagHealth from "../../assets/navbarKon/sagHealth.svg"

import FinanceBu from "../../assets/navbarKon/financeBu.svg"
import enerjiKon from "../../assets/navbarKon/enerjiKon.svg";
import Cookies from "universal-cookie"; //cookies
import { useNavigate } from "react-router-dom";
// redux connection
import { useSelector, useDispatch } from "react-redux";
import { getUserAsync } from "../../services/redux/userSlice";
import {getUserInfoNoIdAsync } from "../../services/redux/userInfoSlice";

import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";


const styles = {
  menuKare: {
    justifyContent: "space-between",
    maxWidth: "400px",
    margin: "0 auto",
    background: "#f5f7f9",
    padding: "10px 10px 10px 10px",
  },
};



const UserInfoMenu = (props ) => {




    const dispatch = useDispatch();
  const navigate = useNavigate();

  const { classes } = props;

  const itemsLength = Array.from({ length: 5 });

  const [UserRole, setUserRole]=useState("")

  useEffect(() => {
   console.log("saal",UserRole )
  }, [UserRole])
 

  useEffect(() => {
    dispatch(getUserAsync());
    dispatch(getUserInfoNoIdAsync()).then((res) => {

        console.log("OkSenadata", res)
        setUserRole(res.payload.data.body.data.role ? res.payload.data.body.data.role : "Müşteri");
        // if (res.payload.data.body.data.role != "servicep")
        //     navigate("/page/404");
    });
  }, [dispatch]);


const cookies = new Cookies();
  const token = cookies.get("idToken");



  function logoutUser() {
    //navigate("/login");
    if (token) {
      cookies.remove("idToken");
      
         //window.location.href = "/controlza";
      //window.location.href = "/controlza";
    //navigate("/");

    


    }
  }

  const userStatus = useSelector((state) => state.userSlice.status);

  const userNameSurName = useSelector((state) => state.userSlice.displayName);
  const userInfoData = "";


  console.log("nameandff", userNameSurName);

  useEffect(() => {
    console.log("son durum:", userStatus);
    console.log("name and surname", userNameSurName);
  }, [userStatus]);

  useEffect(() => {
    console.log("nameandsurname", userNameSurName);
    if(userNameSurName !== null ){
        props.chooseMessage(true);
    }
  }, [userNameSurName]);




//   allUserInfo from  here
  useEffect(() => {

   console.log("userDataUser",userInfoData )

  }, [userInfoData])










const [activeIndex, setActiveIndex] = useState(0);
const slidePrev = () => setActiveIndex(activeIndex - 1);
const slideNext = () => setActiveIndex(activeIndex + 1);




  return (

    <div
      className={`${props.isVisible ? "block" : "hidden"} absolute w-40 `}

      style={{ right: "40px", marginTop:"50px" }}
    >
      {userNameSurName != null && userNameSurName != "" && (
        <div
          className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full"

          style={{ borderRadius: "10px" }}

        >
          <Grid container>
            <Grid
              item
              md={12}
              className="px-1  "
              style={{ marginBottom: "10px" }}
            >
              {" "}
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "17px",
                  color: "rgb(28, 123, 23)"
                  
                }}
              >
                {" "}
                {userNameSurName}
              </Typography>{" "}
            </Grid>{" "}
            <hr className="" style={{ color: "2px solid red" }} />{" "}
            <Grid
              item
              md={12}
              className="px-1  "
              style={{ marginBottom: "6px" }}
            >
              {" "}
              <Link to="">
                <Typography
                  variant="body"
                  className="hover:text-lime-500"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                  }}
                >
                  Kul.Tipi: {UserRole!=="" && UserRole==="user" ? "Müşteri" : UserRole!=="" && UserRole==="admin" ? "admin" : UserRole!=="" && UserRole==="servicep" ? "ServisVeren" : "Müşteri"}
                </Typography>{" "}
              </Link>{" "}
            </Grid>{" "}
            <Grid
              item
              md={12}
              className="px-1  "
              style={{ marginBottom: "6px" }}

            >
              {" "}
              <Link to={UserRole==="admin" ? `/uygunusec-admin` : UserRole==="user" ? `/` : UserRole==="servicep" ? `/service-provider` :"/"}>
                <Typography
                  variant="body"
                  className="hover:text-lime-500"
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                  }}
                >

                  {
UserRole!=="Müşteri"|| UserRole !=="" && (
  "Panele Git"
)

                  }
                </Typography>{" "}
              </Link>{" "}
            </Grid>{" "}
            <Grid
              item
              md={12}
              className="px-1  "
              style={{ marginBottom: "6px" }}
            >
              {" "}
              <Link to="">
                <Typography
                  variant="body"
                  className="hover:text-lime-500"
                  onClick={logoutUser}
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "16px",
                  }}
                >
                  Çıkış Yap{" "}
                </Typography>{" "}
              </Link>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </div>
      ) }{" "}
    </div>
    
  )
};

UserInfoMenu.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInfoMenu);
