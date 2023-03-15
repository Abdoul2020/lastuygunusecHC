import { useState, useEffect } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Cookies from "universal-cookie"; //cookies

import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "../hooks/useScriptRef";
import AnimateButton from "../ui-component/extended/AnimateButton";
import { useNavigate } from "react-router-dom";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//import Google from "../images/logo0.jpeg";

//services part from there
import { registerWithEmailAndPassword } from "../../../services/firebase";
import { toastify } from "../../../services/toastify";
import { selectUser } from "../../../services/redux/userSlice";

//redux toolkit gerekenler
import { useSelector, useDispatch } from "react-redux";
//redux toolKit
import { loginUserAsync } from "../../../services/redux/loginSlice";

import {forgetPasswordAsync} from "../../../services/redux/userSlice"

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseForget = ({ ...others }) => {
  const theme = useTheme();

  //redux toolkit getirme
  const dispatch = useDispatch();
  const navigate = useNavigate();

  ///const user = useSelector(state => state.loginSlice.value);
  const registerStatus = useSelector((state) => state.loginSlice.status);
  // const registerError = useSelector(state => state.loginSlice.errors);

  useEffect(() => {
    if (registerStatus == "success") {
      console.log(registerStatus);
      //router.push("/select-profile");
      //dispatch(statusReset());
     // navigate("/");
    } else if (registerStatus == "error") {
    }
  }, [registerStatus]);

  // value input from here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoginDataData = {
    email: email,
    password: password,
  };


  useEffect(() => {
    console.log("login Data:", userLoginDataData);
  }, [userLoginDataData]);


//start of password start
  async function loginUser(e) {


    const cookies = new Cookies();

      const token = cookies.get("idToken");

      if(token){

toastify({ type: 'info', message: 'Önce Mevcut Hesaptan Çıkış yapınız.' });

      }else{


        dispatch(loginUserAsync({email:e.email,password:e.password})).then(()=>{

          const cookies = new Cookies();
          const token = cookies.get("idToken");

          if( token){

            navigate("/");


          }
        })


      }


    
    
  }
  ///end of passweord forgot

  async function forgetPassword(e){

    console.log("variHere::", e)

    dispatch(forgetPasswordAsync({
      email:e.emailForget
    }))

  }



  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  // const customization = useSelector((state) => state.customization);
  const [checked, setChecked] = useState(true);

  const googleHandler = async () => {
    console.error("Login");
  };


  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };




  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">

            E-posta adresini girin, yeni şifre oluşturmak için bağlantı adresinize gelsin.

            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          emailForget: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
            emailForget: Yup.string()
            .email("Geçerli bir e-posta olmalı")
            .max(255)
            .required("Email gereklidir."),
        })}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting, setEmail, setPassword }
        ) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
              forgetPassword(values)
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate {...others}  onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              error={Boolean(touched.emailForget && errors.emailForget)}
              sx={{ ...theme.typography.customInput }}
              margin="dense"
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                E-Posta
              </InputLabel>

              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.emailForget}
                name="emailForget"
                onBlur={handleBlur}
                onChange={(e)=>{handleChange(e); console.log("Ekoll::",values.emailForget )}}
                label="E-Posta"
                inputProps={{}}
              />
              {touched.emailForget && errors.emailForget && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.emailForget}
                </FormHelperText>
              )}
            </FormControl>

           



            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <Typography
                variant="subtitle1"
                color="#388ab3"
                sx={{ textDecoration: "none", cursor: "pointer" }}

                component={Link}
                to="/login"
              >
                Geri Dön
              </Typography>
            </Stack>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation

                  disabled={isSubmitting}

                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="success"

                >
                  Şifremi Gönder
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>

    </>
  );
};

export default FirebaseForget;
