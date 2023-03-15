import React, {useState} from 'react'
import { Grid } from "@mui/material";
import $ from "jquery";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import member from "../assets/newImage/peopleMember.svg"
import customerSer from "../assets/newImage/customer.svg"
import yearExper from "../assets/newImage/yearExper.svg"
import {partnerShipData}  from "./data/PartnershipData"
import { useEffect } from 'react';
import { Link,useLocation } from "react-router-dom";
import aboutUs from "../assets/newImage/green.png"
import FormTo from './SimpleForm/FormTo';



const ContactPage = () => {

  const [bizKimCheck, setbizKimCheck]= useState(true)
  const [contactCheck, setcontactCheck]= useState(false)




  


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  

  
  


  return (

    <div>

      <Grid container className='about-us'>

        <div style={{width:"100%", margin:"10px 0"}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>

<div className='about-header pt-4 pb-2'>
<ul class="parentClass">
<li>

  <Link to="/page/hakkimizda">
  <a href="">
<label className='labelName ' style={{ cursor:"pointer"}}>
Biz Kimiz?
</label>
</a>
  </Link>
<label className='labelName aboutText'  >
  <Link to="/page/iletisim">
  <a href="">
İletişim
</a>
  </Link>
</label>
</li>
</ul>

</div>
    
 </Grid>
        </div>

        <Grid item xs={12} sm={12} md={12} lg={12} style={{marginBottom:"100px"}} className="contact-title-top">

<div className='contact-title'>
  <h1>İletişim</h1>
</div>
        </Grid>

        <Grid  item xs={12} sm={12} md={12} lg={12} className="rowToseparate">

          <Grid container spacing={2}>

            <Grid item xs={12} sm={6} md={6} lg={6} style={{background:"#f0f0f0", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className="firstgRow">

              <div className='split-div-contact'>
                  <Grid container>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className='font-bold   text-[#0c2c4f] '>
                        <h1>Adres</h1>
                      </div>
                    </Grid>
                    <br />
                    <br />
                   

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className='contact-div-simple'>
                        Kızılırmak Mah. 1450 sk. Karbeyaz Plaza No:22/A D:12 Çankaya Ankara/Türkiye
                      </div>
                    </Grid>
                    <br /><br />

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div>
                        <h1>Telefon Numarası</h1>
                      </div>
                      <br />

                      <div>

                        <span className='font-bold text-[#0c2c4f] email-Title'>Muşteri Hizmetleri</span>
                        <br />
                       
                        <span className='contact-div-simple'> +90 (532) 669 8366</span><br />
                        <span className='contact-div-simple'> +90 (532) 662 2981</span>

                      </div>
                      <br />
                    </Grid>
                    

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <span className='font-bold text-[#0c2c4f] email-Title'>
                        E-mail
                      </span>
                      <br />
                     
                        <span className='contact-div-simple'> info@camadansigorta.com.tr </span>
                      
                    </Grid>



                  </Grid>
              </div>
            </Grid>



            <Grid item xs={12} sm={6} md={6} lg={6} style={{paddingTop:"0"}} className="seconRowMap">
<div>

<div style={{width: "100%"}}>
<div style={{width: "100%"}}><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=karbeyaz%20plaza+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>
  
  </div>


</div>
</Grid>


<Grid item xs={12} sm={12} md={12} lg={12} className="contact-companyInfo bottomRowMui" style={{background:"#f0f0f0", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", marginTop:"50px",
paddingBottom:"20px", lineHeight:"25px", padding:"25px"}} >

          <div className='font-bold   text-[#0c2c4f] '>
<h1>
Uygunusec.com Şirket Bilgileri
</h1>
            
          </div>
          <br />
         <span className='contact-div-simple'>
          <strong>
          Şirket Ünvanı:
          </strong>&nbsp;
          Camadan Sigorta Aracılık hizmetleri A.Ş
         </span><br />
         <span className='contact-div-simple'>

          <strong>
          Sorumlu Kişi:
          </strong>&nbsp;
          Tülay SUGEÇ
         </span><br />

       

<span className='contact-div-simple'>

  <strong>
  Vergi Dairesi:
  </strong>&nbsp;
 Başkent
</span><br />
<span className='contact-div-simple'>
  <strong>
  Vergi Numarası:
  </strong>&nbsp;
1960718686
</span><br />

        </Grid>





        <Grid item xs={12} sm={12} md={12} lg={12} className="contact-companyInfo bottomRowMui" style={{background:"#f0f0f0", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", marginTop:"50px",
paddingBottom:"20px", lineHeight:"25px", padding:"25px"}} >



  <FormTo/>

         
          

        </Grid>



          </Grid>

        </Grid >


        

      </Grid>
      
    </div>


  )

}

export default ContactPage
