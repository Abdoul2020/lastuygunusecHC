import React, {useState} from 'react'
import { Grid } from "@mui/material";
import partnerLogo from "../assets/images/pc-trensparent.png"
import partnerLogo2 from "../assets/images/pc-default.jpg"
import MobileLogoPartners from "../assets/images/mobil-default.jpg"
import {partnerShipData}  from "./data/PartnershipData"

const PartnerCompany = () => {



  const  handleMouseMove = (e) => {
        const el = document.getElementById("wrapper");
        const d = el.getBoundingClientRect();
        let x = e.clientX - (d.left + Math.floor(d.width / 2));
        let y = e.clientY - (d.top + Math.floor(d.height / 2));
        // Invert values
        x = x - x * 2;
        y = y - y * 2;
        document.documentElement.style.setProperty("--scale", 1.6);
        document.documentElement.style.setProperty("--x", x / 2 + "px");
    
        document.documentElement.style.setProperty("--y", y / 2 + "px");
      };

    const  handleMouseLeave = () => {
        document.documentElement.style.setProperty("--scale", 1);
        document.documentElement.style.setProperty("--x", 0);
        document.documentElement.style.setProperty("--y", 0);
      };



      const [showAllIconslogo, setshowAllIconslogo]= useState(false)




  return (
  <Grid container className=' root'>

    <Grid item xs={12} sm={12} md={12} lg={12}>

        <div className='text-2xl font-bold text-center py-20 text-[#0c2c4f]'> 

        {/* 10'dan Fazla Sigorta Şirkettinden Teklif Alın.  */}

        20'den Fazla Sigorta Şirketinden teklif Alın.

        </div>

    </Grid>

    {/* <Grid item xs={12} sm={12} md={12} lg={12} className='w-full bodyroot'>
    <div
            id="wrapper"
            onMouseMove={handleMouseMove}
            onClick={handleMouseLeave}
            className="bodywrapper hidden lg:block"


          >
            <img id="image" style={{
                backgroundImage:`url(${partnerLogo2})`
            }} />
          </div>

          <div
            id="wrapper"
            onMouseMove={handleMouseMove}
            onClick={handleMouseLeave}
            className="bodywrapper block lg:hidden"


          >
            <img id="image" style={{
                backgroundImage:`url(${MobileLogoPartners})`,
                height:"105vh"
            }} />
          </div>
    </Grid> */}

    

    <Grid item xs={12} sm={12} md={12} lg={12}>

      <Grid container spacing={1} style={{justifyContent:"center"}}>


        {

showAllIconslogo ? (

  partnerShipData.map((v,i)=>{

    return (
      <Grid item xs={6} sm={6} md={4} lg={2.4} xl={2.4} >
    <div style={{
      background: "#f5f7f9",
      borderRadius: "5px",
      textAlign: "center",
      justifyContent: "center",
      margin: "auto",
      height: "115px",
      margin: "10px",
      padding: "32px"
    }}>

      <img src={v.image} alt="Uygunusec" style={{marginLeft:"auto", marginRight:"auto"}} />


    </div>
  </Grid>
    )

  })

): (

  partnerShipData.slice(0, 9).map((v,i)=>{

    return (
      <Grid item xs={6} sm={6} md={4} lg={2.4} xl={2.4} >
    <div style={{
      background: "#f5f7f9",
      borderRadius: "5px",
      textAlign: "center",
      justifyContent: "center",
      margin: "auto",
      height: "115px",
      margin: "10px",
      padding: "32px"
    }}>

      <img src={v.image} alt="Uygunusec" style={{marginLeft:"auto", marginRight:"auto"}} />


    </div>
  </Grid>
    )

  })




)


        }

      </Grid>


      <div className='allCompanyTitl'  onClick={()=> setshowAllIconslogo(!showAllIconslogo)}>


        {

          showAllIconslogo ? "Daha Az Gör" : "+15 Şiketini Gör"
        }

    

        
      </div>

    </Grid>





  </Grid>
          
       
      
  )
}

export default PartnerCompany
