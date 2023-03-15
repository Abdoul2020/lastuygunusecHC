import React, {useState, useEffect, useRef } from 'react';
import { Grid } from "@mui/material";

import { InputMask } from "primereact/inputmask";
import successEmail from "../../assets/images/icons/succesEmail.svg"
import loadingSpinner from "../../assets/navbarKon/loadingSpinner.svg"

import Cookies from "universal-cookie"; //cookies
import { useSelector, useDispatch } from "react-redux";

import {loginUserAsync} from "../../services/redux/loginSlice";
import { toastify } from "../../services/toastify";
import { useNavigate } from "react-router-dom";
import { sendOfferToAsync } from '../../services/redux/userSlice';



const AllTeklfiForm = ({ chooseMessage  }) => {


  //redux toolkit getirme
  const dispatch = useDispatch();
  const navigate = useNavigate();



    const [val, setVal] = useState("");
    

    const [userFormTeklif, setUserFormTeklif] = useState({

        Val: "",
        nameSurName: "",
        PhoneNumber: "",
        Email: ""
    });

    const [teklifErrors, setteklifErrors] = useState([{}]);


    const handleChange = (e) => {

        console.log("okDO::", userFormTeklif.Val)

      const regex = /^[0-9\b]+$/;
      if (e.target.value === "" || regex.test(e.target.value)) {

        setUserFormTeklif((x) => ({ ...x, Val: e.target.value }))
        
      }

    };

    // tc required from here

    function requiredNameSurnameController() {

        console.log("Buneee:::")
        setteklifErrors(prevState => ({
            ...prevState,
            requiredNameSurname: userFormTeklif.nameSurName == "" ? true : false,
        }));
    }

    function requiredTcController() {

        setteklifErrors(prevState => ({
            ...prevState,
            requiredTc: userFormTeklif.Val == "" ? true : false,
        }));


    }

    function requiredPhoneNumberController() {

        setteklifErrors(prevState => ({

            ...prevState,
            requiredPhoneNumber: userFormTeklif.PhoneNumber == "" ? true : false,

        }));


    }

    function requiredPhoneEmailController() {

        setteklifErrors(prevState => ({

            ...prevState,
            requiredEmail: userFormTeklif.Email == "" ? true : false,

        }));


    }

    function emailFormatController() {
        const pattern2 = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const pattern= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const result = pattern.test(userFormTeklif.Email);
        setteklifErrors(prevState => ({
            ...prevState,
            formatErorEmail: !result ? true : false,
        }));
    }

    useEffect(() => {

        console.log("OkkyOU",userFormTeklif )

    }, [userFormTeklif])



    const [mailConfirm, setmailConfirm]= useState(false);
    const [loadSpinner, setloadSpinner]= useState(false);


    useEffect(() => {

      console.log("buneemailConfirm",mailConfirm )

      chooseMessage(mailConfirm)


    }, [mailConfirm])

    function senFormEmail(event){

      console.log("Ourdata", event)



      // create a new XMLHttpRequest
      var xhr = new XMLHttpRequest();
  

      const cookies = new Cookies();
  const token = cookies.get("idToken");
      // get a callback when the server responds
      xhr.addEventListener('load', () => {
          
          console.log("GeidenData::", xhr.responseText)

          setmailConfirm(true);

          if(token){
            cookies.remove("idToken");
            dispatch(loginUserAsync({email:"controlza2021@gmail.com",password:"abd123"})).then(()=>{

              const cookies = new Cookies();
              const token = cookies.get("idToken");
      
              dispatch(sendOfferToAsync({

                service_codename:"car_traffic",
                additional_info: event.Val,
                plaka:event.PhoneNumber,
                license_serial: event.nameSurName,
                asbis: event.Email

              })).then((data)=>{
      
                console.log("SuccessSend", data);
                cookies.remove("idToken");
                toastify({ type: 'success', message: 'Tekliniz Başarılı Gönderildi' });
              })
            })
          }else{


            dispatch(loginUserAsync({email:"controlza2021@gmail.com",password:"abd123"})).then(()=>{
              

              const cookies = new Cookies();
              const token = cookies.get("idToken");
      
              dispatch(sendOfferToAsync({

                service_codename:"car_traffic",
                additional_info: event.Val,
                plaka:event.PhoneNumber,
                license_serial: event.nameSurName,
                asbis: event.Email

              })).then((data)=>{
                console.log("SuccessSend", data);
                cookies.remove("idToken");
                toastify({ type: 'success', message: 'Tekliniz Başarılı Gönderildi' });
              })
            })
          }

      })
  
      // open the request with the verb and the url
      xhr.open('GET', 'http://uygunusec.com/controlza/composerSend/index.php?sendto=' + event.Email + 
                              '&adSoyad=' + event.nameSurName + 
                              '&phoneNumber=' + event.PhoneNumber + '&kimlitc=' +event.Val);
                              
      // send the request
      xhr.send();




    }




  return (

    <div>

       {
        mailConfirm===false ? (
          <Grid container>

          <Grid item xs={12} sm={12} md={12} lg={12}>

          <div className="formbold-main-wrapper">

<div className="formbold-form-wrapper">
  <form action="" >
    <div className="formbold-mb-5">
      <label for="name" className="formbold-form-label"> *Ad Soyad </label>
      <input
        type="text"
        name="name"
        id="name"
        onBlur={() => requiredNameSurnameController()}
        setUserFormTeklif
        value={userFormTeklif.nameSurName}
        onChange={(x)=> setUserFormTeklif((e) => ({ ...e, nameSurName: x.target.value }))}
        className="formbold-form-input"

      />
       <div className='content-input-item '>
                          {teklifErrors.requiredNameSurname && <div className='error-text'>Ad Soyad Gereklidir.</div>}
                      </div>
    </div>
    <div className="formbold-mb-5">
      <label for="phone" className="formbold-form-label"> *T.C / Vergi Numarası </label>
      <input

value={userFormTeklif.Val}
onChange={handleChange}

onBlur={()=> requiredTcController()}
      

        type="text"
        name="phone"
        id="phone"
       
        className="formbold-form-input"
        maxLength={11}

      />

<div className='content-input-item '>
                          {teklifErrors.requiredTc && <div className='error-text'>T.C Numarası Gereklidir.</div>}
                      </div>



    </div>

    <div className="formbold-mb-5 ">
      <label for="phone" className="formbold-form-label"> *Cep Telefonu </label>

      <InputMask id="phone" mask="0(599) 999-9999" placeholder="0(5___) ___ __ __" 

value={userFormTeklif.PhoneNumber}
onChange={(x)=> { setUserFormTeklif((e) => ({ ...e, PhoneNumber: x.target.value })); console.log("numbere",userFormTeklif.PhoneNumber )}}
onBlur={()=> requiredPhoneNumberController()}
className="formbold-form-input"     

style={{
  width: "100%",
  padding: "12px 24px",
  borderRadius: "6px",
  border: "1px solid #e0e0e0",
  background: "white",
  fontWeight: "500",
  fontSize: "16px",
  color: "#6b7280",
  outline: "none",
  resize: "none",
}}
      ></InputMask>

<div className='content-input-item '>
                          {teklifErrors.requiredPhoneNumber && <div className='error-text'>Cep Numarası Gereklidir.</div>}
                      </div>


    </div>


    <div className="formbold-mb-5">
      <label for="email" className="formbold-form-label"> *E-mail </label>
      <input
        type="email"
        name="email"
        id="email"
        onBlur={()=>{ requiredPhoneEmailController(); emailFormatController()}}
        value={userFormTeklif.Email}
onChange={(x)=> setUserFormTeklif((e) => ({ ...e, Email: x.target.value }))}

        className="formbold-form-input"

      />

{/* <div className='content-input-item '>
                          {teklifErrors.requiredEmail && <div className='error-text'>Email Gereklidir.</div>}
                      </div> */}

                      {teklifErrors.formatErorEmail && <div className='error-text'>E Postanızı, e posta formatına uygun biçimde yazınız.</div>}


    </div>



    <div>
      <button className="formbold-btn" onClick={(e)=>{senFormEmail(userFormTeklif); e.preventDefault(); setloadSpinner(true) }}>

        {
          loadSpinner  ? (
           
            "Gönderiliyor..."
            
            // <img src={loadingSpinner} alt="" style={{ maxWidth:"30px", width:"100%", marginRight:"auto", marginLeft:"auto"}} />


          ):(
            "Teklif Al"
          )
        }
       
        </button>
    </div>
  </form>
</div>
</div>

          </Grid>

      </Grid>
        ): (

          <Grid container>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="formbold-main-wrapper">
                <div className='formbold-form-wrapper'>
                <img src={successEmail} alt="" />
                </div>
              </div>

            
            </Grid>


          </Grid>
        )
       }
      
    </div>

  )


}



export default AllTeklfiForm
