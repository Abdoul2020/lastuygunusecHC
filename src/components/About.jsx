import React, {useState} from 'react'
import { Grid } from "@mui/material";
import $ from "jquery";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import member from "../assets/newImage/peopleMember.svg"
import customerSer from "../assets/images/icons/customerS.svg"
import yearExper from "../assets/newImage/yearExper.svg"
import {partnerShipData}  from "./data/PartnershipData"
import { useEffect } from 'react';
import { Link,useLocation } from "react-router-dom";
import aboutUs from "../assets/newImage/green.png"
import experience from "../assets/images/icons/experkons.svg";
import sevenYears from "../assets/aboutKons/sevenyears.svg";
import ondortbasari from "../assets/aboutKons/ondortbasari.svg";
import digitalles from "../assets/aboutKons/digitalles.svg";
import Icon from './Icon';


import twoseven from "../assets/aboutKons/aboutUsPage/01-2007.svg"
import ikibinondort from "../assets/aboutKons/aboutUsPage/02-2014.svg"
import ikibiyirmi from "../assets/aboutKons/aboutUsPage/03-2020.svg"
import ikibiyirmiuc from "../assets/aboutKons/aboutUsPage/04-2023.svg"




const About = () => {

  const [bizKimCheck, setbizKimCheck]= useState(true)
  const [contactCheck, setcontactCheck]= useState(false)




  const [my_swiper, set_my_swiper] = useState({});
  const [firstactiveIndex,setactiveIndex]= useState("active")
  const [secondactiveIndex,setsecondactiveIndex]= useState("")
  const [thirdactiveIndex,setthirdactiveIndex]= useState("")
  const [fourthactiveIndex,setfourthactiveIndex]= useState("")
const [swiperChange, setswiperChange]= useState("")




  const swiper = useSwiper();


  useEffect(() => {
    //Runs only on the first render


    // console.log("buneelan::",my_swiper.activeIndex )
  
  }, [swiperChange]);

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
<a href="/page/hakkimizda">

<label className='labelName aboutText' onClick={()=>{setbizKimCheck(true); setcontactCheck(false)}}>
Biz Kimiz?
</label>
</a>

<label className='labelName'  onClick={()=>{setbizKimCheck(false); setcontactCheck(true)}}>
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


 <Grid  item xs={12} sm={12} md={12} lg={12}>

   <div>
   <div className='about-head-number'>
  <h1> Rakamlarla Uygunusec.com</h1>
   </div>

   
   <div>
   <hr  className='block md:hidden  '  style={{marginTop: "30px",
    width: "50%",
    marginRight: "auto",
    marginLeft: "auto"}}/>

     <Grid container className='mt-8'>
       <Grid item xs={12} sm={12} md={12} lg={12}>
         <div className='secondMax'>

           <Grid container>

             <Grid item  xs={12} sm={12} md={4} lg={4} className="flex justify-center about-mobile-row">

             <div>

<img src={member} alt="uygunusec"  style={{ borderRadius:"50%", border:"2px solid #1c7b17", maxWidth:"125px", padding:"20px"}}/>
             </div>

             <div style={{paddingTop:"3rem", paddingLeft:"1rem"}}>

              <div className='aboutus-rakam'>
              <span className='text-lg font-bold'>
                100+
              </span><br />
              Çalışan
              </div>
             </div>
             </Grid>

             <Grid item  xs={12} sm={12} md={4} lg={4} className="flex justify-center about-mobile-row">

             <div>
<img src={customerSer} alt="uygunusec"  style={{ borderRadius:"50%", border:"2px solid #1c7b17", maxWidth:"125px",padding:"20px"}} />
             </div>


             <div style={{paddingTop:"3rem", paddingLeft:"1rem"}}>

<div className='aboutus-rakam'>
<span className='text-lg font-bold'>
  100.0000+
</span><br />
Müşteri
</div>

</div>

             </Grid>

             <Grid item  xs={12} sm={12} md={4} lg={4} className="flex justify-center  about-mobile-row">
             <div>
<img src={experience} alt="uygunusec"  style={{ borderRadius:"50%", border:"2px solid #1c7b17", maxWidth:"125px",padding:"20px"}}/>

             </div>
             <div style={{paddingTop:"3rem", paddingLeft:"1rem"}}>

<div className='aboutus-rakam'>
  <span className='text-lg font-bold'>
    20+ Yıllık
  </span><br />
  Tecrübe
</div>

</div>

             </Grid>
           </Grid>
         </div>
       </Grid>

     </Grid>

   </div>
   </div>
 </Grid>
        </div>



        <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"60px"}}>


          <div className='secondMax about-image-text'>
            <div className='aboout-contentFrom'>

<div class="content">

  <img class="left-side" src={aboutUs} alt="UygunuSeç"/>

  <header>
  <h1 style={{ paddingBottom: "30px",
    fontSize: "26px",
    fontWeight: "bold"}}>Hikayemiz</h1>
</header>
  <p>2007. yılından bugüne kadar Sigorta sektöründe klasik yöntemlerle yürüttüğümüz faaliyetlerimizi Uygunusec.com alt yapısında güncel teknolojileri kullanarak aynı hassasiyet ve müşteri memnuniyeti ile sunma azmiyle çıktığımız yolda 7/24 devam etmekteyiz. UygunuSec platformu dijital sigorta sektörüne yıllık 6 (altı) milyona yakın müşterisinin verdiği güçle girmiştir. </p>
  <p>Anlaşmamız bulunan sigorta şirketlerinin güçlerini yansıtmak üzere müşteri analizi, müşteri ihtiyaçlarının belirlenmesi, poliçenin oluşturulması ve poliçenin sonlanması süreçlerinin tümünde müşteri ihtiyaçları odaklı çalışmalar ile “MÜŞTERİ BENİM” sloganıyla hizmet vermeye devam etmekteyiz. UygunuSec alt yapısında  Kasko, Zorunlu Trafik Sigortası, Tamamlayıcı Sağlık Sigortası, Özel Sağlık Sigortası, DASK, Konut Sigortası ve Sizlerin İhtiyaçları Doğrultusunda gelişecek en iyi sigorta tekliflerini beraber oluşturmanın yanı sıra,  sektörün oluşturduğu teklifleri de karşılaştırarak müşterilerinin en uygun seçeneklerle buluşmasını sağlamaktadır.</p>
  <p>
  Sadece poliçenin teminat altına alınmasına kadar değil sürecin tüm katılımcılar için kazanç-kazanç ilişkisi şeklinde devamı için satın alma ve satış sonrası süreçlerde de 7/24 danışmanlık hizmetiyle müşterilerinin yanındayız. Bu bağlamda katılımız ile gerçekleşecek dijitalleşme kapsamında teknolojiyi müşteri (paydaş) lehine ve tecrübemizle bir araya getirerek oluşacak sinerji paydaşlarımız için kazanç oluşturacaktır. Önümüzdeki süreçte bu kazanç ve dijitalleşme ile oluşan gelişme tüm paydaşlarımız ile sorgulanabilir ve kullanılabilir hale gelmesi ana hedefiyle 7/24 çalıma ve geliştirme işleri devam etmektedir.
  </p>
</div>

            </div>
          </div>
        </Grid>



        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div>

          <div class="container">
  <div class="swiper-container-wrapper swiper-container-wrapper--timeline">
   
    <ul class="swiper-pagination-custom">

      <li class={`swiper-pagination-switch first ${firstactiveIndex} `} onClick={() =>{ my_swiper.slideTo(0)}}><span class={`switch-title ${firstactiveIndex}`}>2007</span></li>
      <li class={`swiper-pagination-switch  ${secondactiveIndex}`} onClick={() =>{ my_swiper.slideTo(1) }}><span class={`switch-title ${secondactiveIndex}`}>2014</span></li>
      <li class={`swiper-pagination-switch  ${thirdactiveIndex}`} onClick={() =>{ my_swiper.slideTo(2)}}><span class={`switch-title ${thirdactiveIndex}`}>2020</span></li>
      <li class={`swiper-pagination-switch last ${fourthactiveIndex}`} onClick={() =>{ my_swiper.slideTo(3)}}><span class={`switch-title ${fourthactiveIndex}`}>2023</span></li>



    </ul>
  
    <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>


    <Swiper
      spaceBetween={50}
      slidesPerView={1}

      onInit={(ev) => {
        set_my_swiper(ev);
    }}

      onSlideChange={(e) => {
        if(e.activeIndex===0){
          setactiveIndex("active")
          setsecondactiveIndex("")
          setthirdactiveIndex("")
          setfourthactiveIndex("")
    
        }else if(e.activeIndex ===1){
          setsecondactiveIndex("active")
          setactiveIndex("")
          setthirdactiveIndex("")
          setfourthactiveIndex("")
        }else if(e.activeIndex ===2){
    setthirdactiveIndex("active")
    setsecondactiveIndex("")
          setactiveIndex("")
          setfourthactiveIndex("")
        }else if(e.activeIndex ===3){
          setfourthactiveIndex("active")
          setthirdactiveIndex("")
    setsecondactiveIndex("")
          setactiveIndex("")
        }

      }}
      onSwiper={(swiper) => console.log("")}>
      <SwiperSlide>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
<Grid container>
  <Grid item xs={12} sm={12} md={5} lg={5}>

    <div style={{padding:"10px"}} className="firstswipper">

<img src={twoseven} alt="Uygunusec"  style={{marginLeft:"auto", marginRight:"auto", borderRadius:"25px", width:"256px" }} />
{/* <Icon/> */}

    </div>
  </Grid>

  <Grid item xs={12} sm={12} md={7} lg={7} style={{padding:"30px", textAlign:"start", display:"flex", alignItems:"center"}} className="spwipperContent">

    <div>
<h1 className='swipperTileToh'>2007</h1>
<span>
Bizde varız dedik "yola çıktık"
</span>
    </div>



</Grid>


</Grid>



          </Grid>

        </Grid>
      </SwiperSlide>
      <SwiperSlide>
      <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
<Grid container>
  <Grid item xs={12} sm={12} md={5} lg={5}>

    <div style={{padding:"10px"}}>

<img src={ikibinondort} alt="Uygunusec"  style={{marginLeft:"auto", marginRight:"auto", borderRadius:"25px",width:"256px" }} />

    </div>



  </Grid>

  <Grid item xs={12} sm={12} md={7} lg={7} style={{padding:"30px", textAlign:"start", display:"flex", alignItems:"center"}} className="spwipperContent">

    <div>
<h1 className='swipperTileToh'>2014</h1>
<span>
Acentemiz ile sigorta şirketleri arasında tam uyumlu çalışma “Başarı ve büyümeyi yakaladık”

</span>
    </div>

</Grid>


</Grid>



          </Grid>

        </Grid>
      </SwiperSlide>
      <SwiperSlide>
      <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
<Grid container>
  <Grid item xs={12} sm={12} md={5} lg={5}>

    <div style={{padding:"10px"}}>

<img src={ikibiyirmi} alt="Uygunusec"  style={{marginLeft:"auto", marginRight:"auto", borderRadius:"25px",width:"256px" }} />

    </div>



  </Grid>

  <Grid item xs={12} sm={12} md={7} lg={7} style={{padding:"30px", textAlign:"start", display:"flex", alignItems:"center"}} className="spwipperContent">

    <div>
<h1 className='swipperTileToh'>2020</h1>
<span>
Sektörde oluşturduğumuz senelerin tecrübesinin ödülünü aldık  "Finansal sigortalama sektörün öncülerinden olarak katılım sağladık ve sektöre güç katan “ teminat senedi “ uygulamasında TÜRKİYE rekorları ( Kesin Geçici Avans Teminat Senedi )	İle sektöre öncülüğümüzü gösterdik .       

</span>
    </div>

</Grid>


</Grid>



          </Grid>

        </Grid>
      </SwiperSlide>
      <SwiperSlide>
      <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
<Grid container>
  <Grid item xs={12} sm={12} md={5} lg={5}>

    <div style={{padding:"10px"}}>

<img src={ikibiyirmiuc} alt="Uygunusec"  style={{marginLeft:"auto", marginRight:"auto", borderRadius:"25px",width:"256px" }} />

    </div>



  </Grid>

  <Grid item xs={12} sm={12} md={7} lg={7} style={{padding:"30px", textAlign:"start", display:"flex", alignItems:"center"}} className="spwipperContent">

    <div>
<h1 className='swipperTileToh'>2023</h1>
<span>
Her söktörde dijitalleşmenin artmasıyla oluşan dönüşme ve dönüştürme ihtiyacına uygun "on-line geçtik"
</span>
    </div>

</Grid>


</Grid>

          </Grid>

        </Grid>
      </SwiperSlide>
      ...
    </Swiper>
   


  </div>
</div>
            
          </div>

        </Grid>

        {/* partneship from heer */}





       

        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div  className="text-2xl font-bold text-center pt-10 pb-5">

            <h1>Anlaşmalı Şirketlerimiz</h1>

          </div>

<Grid container spacing={2} style={{justifyContent:"center"}}>


{
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

}

</Grid>

</Grid>





      </Grid>
      
    </div>


  )

}

export default About
