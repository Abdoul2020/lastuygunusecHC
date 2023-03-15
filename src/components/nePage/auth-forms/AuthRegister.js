import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";

// material-ui
import { useTheme } from "@mui/material/styles";

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
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "../hooks/useScriptRef";
// import Google from "../../images/logo0.jpeg";
import AnimateButton from "../ui-component/extended/AnimateButton";
import { strengthColor, strengthIndicator } from "../utils/password-strength";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";

//services part from there
import { registerWithEmailAndPassword } from "../../../services/firebase";
import { toastify } from "../../../services/toastify";
import { selectUser } from "../../../services/redux/userSlice";

//redux toolkit gerekenler
import { useSelector, useDispatch } from "react-redux";

//redux toolKit
import { addUserAsync } from "../../../services/redux/registerSlice";

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();

  //redux toolkit getirme
  const dispatch = useDispatch();
  //const user = useSelector(state => state.registerSlice.value);
  const registerStatus = useSelector((state) => state.registerSlice.status);

  //const registerError = useSelector(state => state.registerSlice.errors);

  console.log("register status:", registerStatus);

  //for redirect from here
  const navigate = useNavigate();
  const scriptedRef = useScriptRef();

  async function postUserNew(e) {

    dispatch(
      addUserAsync({
        email: e.email,
        password: e.password,
        firstName: e.firstName,
        lastName: e.lastName,
        phoneHeader: e.phoneHeader,
        phoneNumber: e.phoneNumber,
        
      })
    );

    console.log("uye oldu");

    //navigate("/login")
  }

  //rgister useEffect status
  useEffect(() => {
    if (registerStatus == "success") {
      console.log("suces status here: ", registerStatus);
      // router.push("/select-profile");
      toastify({
        type: "success",
        message: "Email Dogrulama linki gonderildi",
      });
      navigate("/login");
      // dispatch(statusReset());
    } else if (registerStatus == "error") {
      console.log("status Error");
    } else if (registerStatus == "loading") {
      console.log("loading hee");
    }
  }, [registerStatus]);

  //const firebaseAuth = getAuth(app);

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false); //check the check box from here

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const googleHandler = async () => {
    console.error("Register");
  };

  //paswword
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("123456");
  }, []);

  const [firstName, setFistName] = useState("");
  const [sirName, setSirName] = useState("");

  const [phoneNumberTotake, setphoneNumberTotake] = useState("");

  function phoneNumberToAdd(event) {
    setphoneNumberTotake(event);
    console.log("Tosell::", phoneNumberTotake);
  }

  const checkLetter = /^[a-zA-Z]+$/g;

  // [a-zA-Z0-9ğüşöçİĞÜŞÖÇ]

  const tukishLetter= /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/g

  function firstNameChecker(event) {
    if (event.target.value == "" || tukishLetter.test(event.target.value)) {
      setFistName(event.target.value);
    }
    console.log("MyNameHere::", event.target.value);
  }

  function sirNameToAdd(event) {
    if (event.target.value == "" || tukishLetter.test(event.target.value)) {
      setSirName(event.target.value);
    }
  }

  //show passoword
  const [password, setPassword] = React.useState("");
  const [validPassoword, setValidPassword] = React.useState(false);


  const [phoneInput, setPhoneInput]= useState("")
  //change the value od phone Input
  function changePhoneInput(event){
setPhoneInput(event)
  }

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              E-posta adresiyle kaydolun.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: "",
          password: "",
          phoneNumber: "",
          firstName: "",
          lastName: "",

          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Geçerli bir e-posta adresi girin.")
            .max(255)
            .required("E-posta alanı boş geçilemez."),
          password: Yup.string().max(255).required("Şifre gereklidir."),

          phoneNumber: Yup.string()
            .max(255)
            .required("Telefon Numara alanı boş geçilemez."),

          firstName: Yup.string().required("Ad alanı boş geçilemez."),

          lastName: Yup.string().required("Soyad alan boş geçilemez"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
              postUserNew(values);
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
          isSubmitting,
          handleSubmit,
          setFieldValue,
          touched,
          values,
        }) => (
          <form noValidate {...others} onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              error={Boolean(
                (touched.firstName && errors.firstName) ||
                  (touched.firstName && errors.firstName)
              )}
              sx={{ ...theme.typography.customInput }}
            >
              {/* spacing={matchDownSM ? 0 : 2} */}
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} className="md:pr-1">
                  <TextField
                    fullWidth
                    label="Adınız"
                    margin="normal"
                    name="firstName"
                    type="text"
                    defaultValue=""
                    id="firstName"
                    value={firstName}
                    // value={values.firstName}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      firstNameChecker(e);
                    }}
                    // onChange={(e) =>
                    //   e.target.value === "" || re.test(e.target.value) ?
                    //   handleChange(e) : ""
                    // }
                  />
                  {touched.firstName && errors.firstName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.firstName}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className="md:pl-1">
                  <TextField
                    fullWidth
                    label="Soyadınız"
                    margin="normal"
                    name="lastName"
                    type="text"
                    id="lastName"
                    defaultValue=""
                    value={sirName}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      sirNameToAdd(e);
                    }}
                    inputProps={{}}
                    sx={{ ...theme.typography.customInput }}
                  />
                  {touched.lastName && errors.lastName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.lastName}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="email">E-Posta</InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                value={values.email}
                name="email"
                label="E-Posta"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text--register"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            {/* //phone Number only Türkiye */}
            <FormControl
              fullWidth
              error={Boolean(touched.phoneNumber && errors.phoneNumber)}
              sx={{ ...theme.typography.customInput }}
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {/* <InputLabel htmlFor="outlined-adornment-password-register">
              Cep Telefonu Numaranız
              </InputLabel> */}

              <PhoneInput

                inputProps={{
                  name: "phoneNumber",
                  id: "phoneNumber",
                  margin: "normal",
                }}

                fullWidth
                type="text"
                country={"tr"}
                value={values.phoneNumber}


onBlur={handleBlur}

onChange={(phone) => {

  setFieldValue('phoneNumber', phone);

  console.log("ekouu::", values.phoneNumber)


}}
 
              />

              {touched.phoneNumber && errors.phoneNumber && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text--register"
                >
                  {errors.phoneNumber}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ ...theme.typography.customInput }}
              style={{
                marginBottom: "20px",
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password-register">
                Parola
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                label="Parola"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{ minLength: 6 }}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-register"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && values.password != "" && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box
                        style={{ backgroundColor: level?.color }}
                        sx={{ width: 85, height: 8, borderRadius: "7px" }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(!checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Şartlar ve Koşulları &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"
                      >
                        kabul ediyorum.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={!checked}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="success"
                >
                  Üye Ol
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
