import React,{useEffect} from 'react'
import { Grid } from "@mui/material";
import GecmisCarousel from './GecmisCarousel';
import logoCardHere from "../assets/images/logo35.jpeg"

import asset1 from "../assets/kampaya/Asset 1.jpg"
import asset2 from "../assets/kampaya/Asset 2.jpg"
import asset3 from "../assets/kampaya/Asset 3.jpg"
import asset4 from "../assets/kampaya/Asset 4.jpg"
import asset5 from "../assets/kampaya/Asset 5.jpg"
import { Link,useLocation } from "react-router-dom";




const Kampaya = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

  return (

    <div style={{marginTop:"-140px", background:"#fff"}}>
        <Grid container style={{ paddingTop:"160px"}}>



            <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"30px"}}>

                <div className='kampaya-hear-title' style={{fontSize:"12px",lineHeight:"17px", letterSpacing: "-.01em" , cursor:"pointer", color:"#0e2e50"}}>
                    <h3>UygunuSec / Kampanyalar</h3>
                </div>

            <div class="third">

            <div className='text-2xl font-bold  pt-10 text-[#0e2e50] kampayaTitle'>
                    <h1>
                    Öne Çıkan Kampanya

                    </h1>
                </div>

                <Link to="/kampanyalar/konut-tasit-kampayasi">
                <img src={asset2} alt="image" />
                </Link>


    
    
    {/* <span>
      <h4>LOREM IPSUM</h4>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus architecto consequuntur facere eos incidunt, soluta corporis ullam maiores.</p>
    </span> */}

    <span>
        Kampanya Bitiş Tarihi: 23.02.2023
    </span>


  </div>
  

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className="kampaya-card" style={{ margin:"20px"}}>

                <div className='text-2xl font-bold  pt-10 text-[#0e2e50]'>
                    <h1>Tüm Kampanyalar</h1>
                </div>

                <Grid container>

                    <Grid item xs={12} sm={6} md={6} lg={4}>


                        <Link to="/kampanyalar/kadin-sigorta-uygunusec-hediye-paketi">

                        <div class="wrapper">

<main class="grid">

   
    <div class="grid__item relative">
<img src={asset1} alt="Kampaya"  style={{borderTopLeftRadius:"12px", borderTopRightRadius:"12px"}}/>
       
        <h2 className='kampaya-cardTitle'>Hediye Paketi</h2>
        <p>Kadın Sigortalılarımıza UygunuSeç Hediye Paketti.&hellip;</p>

        <p style={{fontSize:"12px"}}>
            <strong>
            Kampanya Bitiş Tarihi: &nbsp;
            </strong>
         23.02.2023
    </p>


    </div>
</main>
</div> 
                        
                        </Link>

                   

                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>

<Link to="/kampanyalar/konut-tasit-kampayasi">


<div class="wrapper">

<main class="grid">


<div class="grid__item relative">
<img src={asset2} alt="Kampaya" />


<h2 className='kampaya-cardTitle'>Kredi Desteği</h2>
        <p>Konut ve Taşıt ihtiyacına , yönelik finansman kredisi&hellip;</p>

        <p style={{fontSize:"12px"}}>
            <strong>
            Kampanya Bitiş Tarihi: &nbsp;
            </strong>
         23.02.2023
    </p>


</div>
</main>

</div>

</Link> 

</Grid>

<Grid item xs={12} sm={6} md={6} lg={4}>

<Link to="/kampanyalar/geleceginiz-guvende">

<div class="wrapper">

<main class="grid">


<div class="grid__item relative">
<img src={asset3} alt="Kampaya" />

<h2 className='kampaya-cardTitle'>Geleceğiniz Güvende</h2>
        <p>Kasko Poliçesi Yaptıran, 18—60 Yaş aralığı da&hellip;</p>

        <p style={{fontSize:"12px"}}>
            <strong>
            Kampanya Bitiş Tarihi: &nbsp;
            </strong>
         23.02.2023
    </p>




</div>
</main>

</div> 

</Link>

</Grid>


<Grid item xs={12} sm={6} md={6} lg={4}>

<Link to="/kampanyalar/kasko-trafik-police">

<div class="wrapper">

<main class="grid">


<div class="grid__item relative">
<img src={asset4} alt="Kampaya" />

<h2 className='kampaya-cardTitle'>Kaso ve Trafik Poliçe</h2>
        <p>Kasko ve Trafik Poliçelerini İLK kez Uygunuseç'i&hellip;</p>

        <p style={{fontSize:"12px"}}>
            <strong>
            Kampanya Bitiş Tarihi: &nbsp;
            </strong>
         23.02.2023
    </p>


</div>
</main>

</div> 

</Link>

</Grid>

<Grid item xs={12} sm={6} md={6} lg={4}>

<Link to="/kampanyalar/trafik-sigorta-cekici-hizmet">

<div class="wrapper">

<main class="grid">


<div class="grid__item relative">
<img src={asset5} alt="Kampaya" />

<h2 className='kampaya-cardTitle'>Trafik Sigorta</h2>
        <p>Trafik sigortasında çekici hizmeti Uygunusec&hellip;</p>

        <p style={{fontSize:"12px"}}>
            <strong>
            Kampanya Bitiş Tarihi: &nbsp;
            </strong>
         23.02.2023
    </p>

</div>
</main>

</div> 

</Link>

</Grid>


                </Grid>

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop:"20px", marginBottom:"20PX"}} >

                <div>

                    <div className='text-2xl font-bold  pt-10 text-[#0e2e50]'>
                        <h2>Geçmiş Kampayalar</h2>
                    </div>

                    <div>

                       <GecmisCarousel/>

                    </div>



                </div>

            </Grid>

        </Grid>


      
    </div>

  )
}

export default Kampaya
