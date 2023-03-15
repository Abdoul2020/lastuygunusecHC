import React, {useState, useEffect} from 'react';
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";


import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PhoneInput from "react-phone-input-2";
import CustomPhoneNumber from "./PhoneNumber";

import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from "react-router-dom";

import {
    Box,
   
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    OutlinedInput,
    useMediaQuery,
  } from "@mui/material";

  import TextField from '@mui/material/TextField';
import { Formik } from "formik";
import { useTheme } from "@mui/material/styles";
import * as Yup from "yup";
import useScriptRef from "./nePage/hooks/useScriptRef";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {getUserAsync} from "../services/redux/userSlice";








const TeklifAlForm = () => {





    //change Input here
  const [currency, setCurrency] =useState('');
  
  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  const [checked, setChecked] = useState(false);
  const [checked2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const scriptedRef = useScriptRef();//ref


  // datae and time picker
  // const [value, setValue] = useState(
  //   dayjs('08/10/1997')
  // )

  // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

  // const [value, setValue] = useState(dayjs('2022-04-07'));
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  // const handleChangeForDate = (newValue) => {
    
  //   setValue(newValue);
  // };

  //redux toolkit getirme
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStatus = useSelector((state) => state.userSlice.status);
  const userNameSurName = useSelector((state) => state.userSlice.displayName);

  useEffect(() => {


    dispatch(getUserAsync());

    
  }, [dispatch]);



  const [productName, setproductName] = useState("");
  const [licenceName, setlicenceName] = useState("");
  const [seriNo, setSeriNo]= useState("");//for seri no
  const [plaka, setplaka]= useState("")
  const [nameAndSurname, setnameAndSurname] = useState(userNameSurName != null && userNameSurName !="" ? userNameSurName : "");
  const [tcIdentity, settcIdentity]= useState("");
  const [birthDate, setbirthDate] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [ePosta, setePosta] = useState("");
  const [requestExplanation, setrequestExplanation] = useState("");

  //const label from here
  const sendFormStatus= useSelector((state)=>state.userSlice.offerSendStatus);

  // tc kontrol check fromhere
  const handleChangeTc = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value == "" || regex.test(e.target.value)) {
      settcIdentity(e.target.value);
    }
  };

  


const offerData={

  tcIdentityNumber:tcIdentity,
  birthDateTarihi:value,
  userPhoneNumber: phoneNumber,
  userEposta:ePosta,
  service_codename: productName,
  additional_info:requestExplanation,
  plaka:plaka,
  license_serial:licenceName,
  asbis:licenceName

}

const [urunProductFor,seturunProductFor]= useState("")


useEffect(() => {
 console.log("ChangeData:", offerData )
 seturunProductFor(offerData.service_codename)
}, [offerData])

useEffect(() => {

 console.log("dataNew",offerData.service_codename )


}, [urunProductFor])



//new set up array
const [emailStatus, setemailStatus]= useState("")



  //kontol and of posting Offer if user not login
  function postOfferSend(event){


console.log("dataTosend:", event)

// dispatch(sendOfferToAsync({

// }))


// copy from github here

//const {name, email, message} = this.state;


        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            // this.setState ({
            //     emailStatus: xhr.responseText
            // });

            console.log("veribakk", xhr.responseText)

        })

        // open the request with the verb and the url

        xhr.open('GET', 'http://uygunusec.com/controlza/composerSend/index.php?sendto=' + event.emailPosta + 
                                '&adSoyad=' + event.adSoyad + 
                                '&message=' + event.istekBu + '&tcNumara=' +event.tcNo + '&phoneNumara=' + event.telNo
                                +'&urunproduct='+ urunProductFor +'&plaka='+event.plaka+
                                '&seriNo='+event.licenceSeriNo+'&birthDate='+event.birthD);
                                

        // send the request


        xhr.send();


        // reset the fields
        // this.setState({
        //     name: '',
        //     email: '',
        //     message: ''
        // });
        //event.preventDefault();


  }

  // form control start from heere
  //Genl form all from here

  const [kategorieForm, setkategorieForm]= useState(false)

  const [productForm, setproductForm]= useState(false)

  const [productFormToLicence, setproductFormToLicence]= useState(false)


  // Form kontrol Functions
  const  kategoriChooseFunction=(event)=>{

    if( event.target.value==""){
      setkategorieForm(false)
    }else{
      setkategorieForm(true)
    }
  }


  const [newV, setnewV]= useState("");


  const  productChooseFunction=(event)=>{

    console.log("vluOut::", event.target.value);


    setnewV(event.target.value);
   

// set the product Name form here
    if(event.target.value === 80 ){
      setproductName("Evim Güvende");
    }else if(event.target.value=== 70){
      setproductName("Konut Sigortası");
    }else if(event.target.value === 10){
      setproductName("Kasko");
    }else if(event.target.value === 20){
      setproductName("Araç Sigortası");
    }else if(event.target.value === 30){
      setproductName("Traffic Sigortası");
    }else if(event.target.value === 40){
      setproductName("Tanımlayıcı Sağlık Sigortası");
    }else if(event.target.value === 50){
      setproductName("Özel Sağlık Sigortası");
    }else if(event.target.value === 90){
      setproductName("Cep Telefonu");
    }else if(event.target.value === 60){
      setproductName("DASK");
    }


    //end of set Product Name




    if( event.target.value == 10 || event.target.value == 20 || event.target.value == 30  ){

      setproductFormToLicence(true);
      setproductForm(true);
    }else{
      
      setproductForm(true);
      setproductFormToLicence(false);

    }
  }







  const [setEvimInput, setsetEvimInput]= useState(false);
  const [setAracSigortasi, setsetAracSigortasi]=useState(false);
  const [setSaglik, setsetSaglik]= useState(false);
  const [setEsyalarim, setsetEsyalarim]= useState(false);
  const [others, setOthers]= useState(false);

  
  

  const [age, setAge] = React.useState('');
  const handleChangeforNew = (event) => {
    
    setAge(event.target.value);
    setkategorieForm(true);



    if(event.target.value== 10){

setsetEvimInput(true)
setsetAracSigortasi(false)
setsetSaglik(false)
setsetEsyalarim(false)
setOthers(false)

    }

    else if(event.target.value ==  20){
      setsetAracSigortasi(true)
      setsetEvimInput(false)
      setsetSaglik(false)
      setsetEsyalarim(false)
      setOthers(false)

    }
    else if(event.target.value==30){
      setsetSaglik(true)
      setsetAracSigortasi(false)
      setsetEvimInput(false)
      setsetEsyalarim(false)
      setOthers(false)

    }
    else if(event.target.value== 40 ){

      setsetEsyalarim(true)

      setsetEvimInput(false)
setsetAracSigortasi(false)
setsetSaglik(false)
setOthers(false)

    }
    else if(event.target.value==  50){
      setOthers(true)
      setsetEvimInput(false)
setsetAracSigortasi(false)
setsetSaglik(false)
setsetEsyalarim(false)
    }

  };

  const Theme = useTheme();


  return (



   <Grid container className='w-full bg-white py-16 px-4 formAlquick'>
    <Grid item xs={12} sm={12} md={12} lg={12}>

   <Grid className='' container>
    <Grid item xs={12} sm={12} md={12} lg={12}>

    <Formik
                              initialValues={{
                                kategorie:"",
                                urunsec:"",
                                adSoyad:"",
                                tcNo:"",
                                telNo:"",
                                emailPosta:"",
                                birthD: "2022-04-07",
                                istekBu:"",
                                licenceSeriNo: productFormToLicence ? "" : "Yok" ,
                                plaka: productFormToLicence ? "" : "Yok",
                                submit: null
                              }}

                              validationSchema={Yup.object().shape({
                                kategorie: Yup.string()
                                  .max(255)
                                  .required("Kategori Seçiniz."),
                                  urunsec: Yup.string()
                                  .max(255)
                                  .required("Ürün Seçiniz."),

                                  adSoyad: Yup.string()
                                  .max(255)
                                  .required("Ad Soyad Giriniz."),

                                  tcNo: Yup.string()
                                  .min(11,"T.c en az 11 rakam olması lazım")
                                  .required("Tc. Numaranız Giriniz."),

                                  telNo: Yup.string()
                                  .max(255)
                                  .required("Telefon Numaranız Giriniz."),

                                  birthD: Yup.string()
                                  .max(255)
                                  .required("Doğum Tarihiniz Kontrol Ediniz."),

                                  licenceSeriNo: Yup.string().max(255).required("Licence Seri Numara veya Asbis Giriniz"),

                                  emailPosta: Yup.string()
                                  .email("Geçerli bir e-posta adresi giriniz.")
                                  .max(255)
                                  .required("E-posta alanı boş geçilemez."),

                                  plaka: Yup.string().max(255).required("Plakanız Giriniz"),

                              })}

                              onSubmit={async (
                                values,
                                {
                                  setErrors,
                                  setStatus,
                                  setSubmitting,
                                  setEmail,
                                  setPassword,
                                }
                              ) => {
                                try {
                                  if (scriptedRef.current) {
                                    setStatus({ success: true });
                                    setSubmitting(false);
                                    console.log("OPkSuccess")
                                    postOfferSend(values)

                                    // if(values.tcNo.length < 11){

                                    //   setErrors({ submit: "Doğru Tc Giriniz" });
                                    // }
    
                                    // settcInfo(values.tc);
                                    // setPhoneInfo(values.phone);
                                    // setemailInfo(values.email);
                                    // setserviceInfo(values.service_codename);
                                    // setPlakaInfo(values.additional_info);

                                  }
                                } catch (err) {

                                  console.error(err);
                                  if (scriptedRef.current) {
                                    setStatus({ success: false });
                                    setErrors({ submit: err.message });
                                    setSubmitting(false);
                                    console.log("Okfail",err);
                                    postOfferSend(values);
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
                            touched,
                            setFieldValue,
                            values,
                          }) => (


                            <form noValidate   {...others} onSubmit={handleSubmit}>

                              <div>


{/* for texting Purpose */}

<FormControl variant="standard"   sx={{ m: 1, minWidth: 120 }} fullWidth 

error={
  Boolean((
    touched.kategorie && errors.kategorie) || (touched.kategorie && errors.kategorie))
}


>
        <InputLabel id="demo-simple-select-standard-label" className='inputLabelFor'>Kategori Seçiniz</InputLabel>
        <Select

name="kategorie"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onBlur={handleBlur}
          onChange={(e)=>{handleChangeforNew(e);handleChange(e); }}
          label="Age"
        >

          <MenuItem value={10}>Evim</MenuItem>
          <MenuItem value={20}>Araç Sigortası</MenuItem>
          <MenuItem value={30}>Sağlığım </MenuItem>
          <MenuItem value={40}>Eşyalarım</MenuItem>
          <MenuItem value={50}>Diğer</MenuItem>


        </Select>

        {touched.kategorie && errors.kategorie && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.kategorie}
                                      </FormHelperText>
                                    )}
      </FormControl>

                                {

                                  kategorieForm && (
                                    <div>

<FormControl variant="standard"   sx={{ m: 1, minWidth: 120 }} fullWidth 

error={
  Boolean((
    touched.urunsec && errors.urunsec) || (touched.urunsec && errors.urunsec))
}
>


        <InputLabel id="demo-simple-select-standard-label" className='inputLabelFor'>Ürün Seçiniz</InputLabel>
        <Select

name="urunsec"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={newV}
          onBlur={handleBlur}

          onChange={(e)=>{productChooseFunction(e);handleChange(e) }}
          label="Age"
        >

          {
            setAracSigortasi && (
              

<MenuItem value={10}>Kasko</MenuItem>
            )
          }

{
            setAracSigortasi && (
<MenuItem value={20}>Araç Sigortası</MenuItem>

            )
          }
           {
            setAracSigortasi && (
<MenuItem value={30}> Traffic Sigortası</MenuItem>  
            )
          }



          {
            setSaglik &&(
<MenuItem value={40}> Tanımlayıcı Sağlık Sigortası</MenuItem> 
            )
            
          }
           {
            setSaglik &&(

<MenuItem value={50}>  Özel Sağlık Sigortası</MenuItem>
            )
            
          }



        {
          setEsyalarim &&(
           
              <MenuItem value={90}>  Cep Telefonu</MenuItem>
            
          )
        }

        {
          others && (
            
              <MenuItem value={60}>  DASK</MenuItem>
          
          )
        }

          {
            setEvimInput &&(   
<MenuItem value={80}>  Evim Güvende</MenuItem>
            )
          }

{
            setEvimInput &&(   
               
<MenuItem value={70}>  Konut Sigortası</MenuItem>
            )
          }

        </Select>

        {touched.urunsec && errors.urunsec && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.urunsec}
                                      </FormHelperText>
                                    )}

      </FormControl>

                                    </div>
                                  )
                                }


{
  productForm && (
    <div>


      {
productFormToLicence && (
  <div>

<FormControl  fullWidth margin="dense" 
                                error={
                                  Boolean((
                                    touched.licenceSeriNo && errors.licenceSeriNo) || (touched.licenceSeriNo && errors.licenceSeriNo))
                                }

                                sx={{...Theme.typography.customInput}}
                                
                                >

<TextField id="standard-basic" label="Belge Seri No Veya Asbis*" name="licenceSeriNo" variant="standard"  fullWidth  onChange={(e)=>{handleChange(e); setlicenceName(e.target.value); console.log("DataLicence", licenceName);}} onBlur={handleBlur} />



        {touched.licenceSeriNo && errors.licenceSeriNo && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.licenceSeriNo}

                                      </FormHelperText>
                                    )}
                                </FormControl>


                                <FormControl  fullWidth margin="dense" 
                                error={
                                  Boolean((
                                    touched.plaka && errors.plaka) || (touched.plaka && errors.plaka))
                                }

                                sx={{...Theme.typography.customInput}}
                                
                                >

<TextField id="standard-basic" label="Plakanız*" name="plaka" variant="standard"  fullWidth  onChange={(e)=>{handleChange(e); setplaka(e.target.value); console.log("DataLicence", plaka);}} onBlur={handleBlur} />



        {touched.plaka && errors.plaka && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.plaka}

                                      </FormHelperText>
                                    )}
                                </FormControl>


  </div>
)

      }

<FormControl  fullWidth margin="dense" 

                                error={

                                  Boolean((
                                    touched.adSoyad && errors.adSoyad) || (touched.adSoyad && errors.adSoyad))
                                }

                                sx={{...Theme.typography.customInput}}
                                >

<TextField id="standard-basic" label="Ad Soyad*" name="adSoyad" variant="standard"  fullWidth 

value={
  nameAndSurname
}
 onChange={(e)=>{handleChange(e); setnameAndSurname(e.target.value); console.log("name&Surname::", nameAndSurname)}}

 onBlur={handleBlur}

  />

        {touched.adSoyad && errors.adSoyad && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.adSoyad}
                                      </FormHelperText>
                                    )}
                                </FormControl>




                                <FormControl  fullWidth margin="dense" 
                                error={
                                  Boolean((
                                    touched.tcNo && errors.tcNo) || (touched.tcNo && errors.tcNo))
                                }

                                sx={{...Theme.typography.customInput}}
                                
                                >

<TextField id="standard-basic" label="T.C. Kimlik Numaranız*" name="tcNo" variant="standard"  fullWidth  
 onChange={(e)=>{handleChange(e); handleChangeTc(e)}}  onBlur={handleBlur}  
 value={tcIdentity}
  inputProps={{ maxLength: 11 }} />


        {touched.tcNo && errors.tcNo && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.tcNo}
                                      </FormHelperText>
                                    )}
                                </FormControl>




                                <FormControl  fullWidth margin="dense" 
                                error={
                                  Boolean((
                                    touched.birthD && errors.birthD) || (touched.birthD && errors.birthD))
                                }

                                sx={{...Theme.typography.customInput}}
                                
                                >

<LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          // inputFormat="MM/DD/YYYY"

          //  mask="__-__-____"
          label="Doğum Tarihiniz*"
          disableFuture

          // value={value}
          // views={["day"]}

          openTo="year"
          views={['year', 'month', 'day']}

          value={values.birthD}

          onChange={(newValue) => {
            setValue(newValue);
            setFieldValue('birthD', newValue);
            // handleChange(newValue);
            // console.log("Verii", value )

          }}

          // name="birthD"
         
          renderInput={(params) => <TextField {...params}  variant="standard"  />}
          
         onBlur={handleBlur}
        
          // onChange={(e)=>{handleChange(e); setbirthDate(e.target.value); console.log("Heeuy")}}

          fullWidth
          // inputFormat="dd-MM-yyyy"

        />
      </Stack>
    </LocalizationProvider>



{/* <TextField id="standard-basic" label="Doğum Tarihiniz*" name="birthD" variant="standard"  fullWidth  onChange={handleChange} onBlur={handleBlur}
inputFormat="MM/DD/YYYY"

/> */}


        {touched.birthD && errors.birthD && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.birthD}
                                      </FormHelperText>
                                    )}
                                </FormControl>



                                <FormControl  fullWidth margin="dense" 
                                error={
                                  Boolean((
                                    touched.telNo && errors.telNo) || (touched.telNo && errors.telNo))
                                }

                                sx={{...Theme.typography.customInput}}
                                
                                >

{/* <TextField id="standard-basic" label="Telefon Numaranız*" name="telNo" variant="standard"  fullWidth  onChange={(e)=>{handleChange(); setphoneNumber(e.target.value)}}
 onBlur={handleBlur}/> */}


<PhoneInput


inputProps={{

  name: "telNo",
  id: "telNo",
  margin: "normal",
  label:"Phone Number",
  
}}

inputStyle={{
  borderTop:"none",
  borderRight:"none",
  borderLeft:"none",
  borderBottom:"1px solid black",
  borderRadius:"0px"
}}

placeholder="Telefon numarası"
labels="Phone Number"
fullWidth
type="text"
country={"tr"}
countryCodeEditable={false}
value={values.telNo}
onBlur={handleBlur}
label='Phone Number'
onChange={(phone) => {
setFieldValue('telNo', phone);

setphoneNumber(phone);
}}
inputComponent={CustomPhoneNumber}

/>



        {touched.telNo && errors.telNo && (

                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.telNo}
                                      </FormHelperText>
                                    )}
                                </FormControl>


                                <FormControl  fullWidth margin="dense" 
                                error={
                                  Boolean((
                                    touched.emailPosta && errors.emailPosta) || (touched.emailPosta && errors.emailPosta))
                                }

                                sx={{...Theme.typography.customInput}}
                                
                                >

<TextField id="standard-basic" label="E-Posta Adresiniz*"  name="emailPosta" variant="standard"  fullWidth onChange={(e)=>{handleChange(e);setePosta(e.target.value)}} onBlur={handleBlur}/>


        {touched.emailPosta && errors.emailPosta && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.emailPosta}
                                      </FormHelperText>
                                    )}
                                </FormControl>


                                <FormControl  fullWidth margin="dense" 
                                error={
                                  Boolean((
                                    touched.kategorie && errors.kategorie) || (touched.kategorie && errors.kategorie))
                                }

                                sx={{...Theme.typography.customInput}}
                                
                                >

<TextField id="standard-basic" label="İsteğiniz" name="istekBu" variant="standard"  fullWidth   value={requestExplanation}  onChange={(e)=>{setrequestExplanation(e.target.value); handleChange(e)}}  

onBlur={handleBlur}
/>


        {touched.kategorie && errors.kategorie && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.tc}
                                      </FormHelperText>
                                    )}
                                </FormControl>






    </div>
  )
}
                             


                              </div>


                              <Grid container alignItems="center" justifyContent="space-between" marginTop="50px">
              <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:"left"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="success"
                    />
                  }
                  label={
                    <Typography variant="subtitle1"
                    style={{
                      fontFamily: 'Montserrat',
fontStyle: "normal",
fontWeight: 700,
fontSize: "13px",
lineHeight: "16px",
color: "rgb(35, 45, 99)"
                    }}>
                      Kişisel Verilerin İşlenmesi Hakkında Aydınlatma &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"
                        style={{
                          fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "16px",
    color: "rgb(35, 45, 99)"
                        }}
                      >
                         Metnini okudum. *
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:"left"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked2}
                      onChange={(event) => setCheck2(event.target.checked)}
                      name="checked"
                      color="success"
                    />
                  }
                  label={
                    <Typography variant="subtitle1"
                    style={{
                      fontFamily: 'Montserrat',
fontStyle: "normal",
fontWeight: 700,
fontSize: "13px",
lineHeight: "16px",
color: "rgb(35, 45, 99)"
                    }}
                    >
                      Ticari Elektronik İleti Gönderimi İçin Kişisel Verilerin İşlenmesine  &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"

                        style={{
                          fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "16px",
    color: "rgb(35, 45, 99)"
                        }}
                      >
                        Yönelik Aydınlatma Metnini okudum
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:"left"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={check3}
                      onChange={(event) => setCheck3(event.target.checked)}
                      name="checked"
                      color="success"
                    />
                  }
                  label={
                    <Typography variant="subtitle1"
                    style={{
                      fontFamily: 'Montserrat',
fontStyle: "normal",
fontWeight: 700,
fontSize: "13px",
lineHeight: "16px",
color: "rgb(35, 45, 99)"
                    }}>
                      Ticari elektronik ileti gönderilmesini  &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"
                        style={{
                          fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "16px",
    color: "rgb(35, 45, 99)"
                        }}
                      >
                        kabul ediyorum.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

        <div className=""
               style={{
                
  position: "relative",
  justifyContent:"center",
  marginTop:"40px"

              }}
              >
              <button
                type="submit"
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"

                style={{
                  width: "auto !important",
    height: "auto !important",
    padding: "18px 90px",
    lineHeight: "17px",
    transformOrigin: "center center",
    fontWeight: "600!important",
    border:"none",
    fontSize: "18px",
    margin:"auto",
    
    background:"rgb(28, 123, 23)",

    color:"#FFFF"
   
                }}

              disabled={checked && checked2 == true ? false : true}
              >
                 BANA ULAŞIN

              </button>
             
              </div>
                            </form>

                            
                          )
                          }

                          </Formik>
        
    </Grid>
   </Grid>
    </Grid>
   </Grid>
  )
}

export default TeklifAlForm
