import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { Grid } from "@mui/material";
import travell from "../assets/images/icons/travell.svg"
import tamamlayici from "../assets/images/icons/tamamlayici.svg"
import konut from "../assets/images/icons/konut.svg"
import dsask from "../assets/images/icons/dask.svg"
import travel2 from "../assets/images/icons/travell2.svg"
import healthsa from "../assets/images/icons/healthsa.svg"
import nextarr from "../assets/images/icons/nextarr.svg"
import nextblue from "../assets/images/icons/nextblue.svg"



import traffik from "../assets/productsIcons/carTraffic.svg";
import nextArrow from   "../assets/productsIcons/nextarrow.svg";
import konutTo from "../assets/productsIcons/homekonut.svg";
import daskKonut from "../assets/productsIcons/daskKonut.svg";
import kefalett from "../assets/productsIcons/kefalet.svg"
import kasokosecon from "../assets/productsIcons/kaskosecond.svg"
import healthCare from "../assets/productsIcons/healthcare.svg"
import seyahatCare from "../assets/productsIcons/travelseya.svg"
import police from "../assets/productsIcons/police.svg"
import cepTel from "../assets/productsIcons/phoneHere.svg"
import { Link,useNavigate  } from "react-router-dom";





const Cards = () => {



  let navigate = useNavigate(); 
  const routeChangeTrafik = () =>{ 
    let path = `/trafik-sigortasi`; 
    navigate(path);
  }
  

  const routeChangeKefalet = () =>{ 
    let path = `/kefalet-sigortasi`; 
    navigate(path);
  }


  const routeChangeKasko = () =>{ 
    let path = `/kasko`; 
    navigate(path);
  }

  

  const routeChangeSaglik = () =>{ 
    let path = `/tamamlayici-saglik-sigortasi`; 
    navigate(path);
  }

  

  const routeChangePolice = () =>{ 
    let path = `/police-prim-kredisi`; 
    navigate(path);
  }

  

  const routeChangeCepTel = () =>{ 
    let path = `/cep-telefonum-guvende`; 
    navigate(path);
  }


  return (
   
     <div className='w-full py-[2rem] px-4 bg-white '>


      

        {/* the top div here */}

        <div className='max-w-[1240px] mx-auto grid  lg:grid-cols-3 gap-2' style={{background:"white"}}>


        <div className=' grid md:grid-cols-2 lg:grid-cols-2 gap-4'>


<div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cursor-pointer' style={{background:"#f0f0f0",
justifyContent:"space-between",alignItems:"center"}} onClick={routeChangeTrafik} >


<span className='icon' style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>
   
<img src={traffik} alt="" style={{maxWidth:"30px"}}/>
               </span>
<span className='content'>
    <h3 style={{ color: "#002246"}}>Trafik</h3>
   </span>
   <span className='linkbu'>

    <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />

   </span>


</div>








<div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cursor-pointer' style={{background:"#f0f0f0",
justifyContent:"space-between",alignItems:"center"}} onClick={routeChangeKefalet}>


<span className='icon' style={{borderRadius:"9% 91% 54% 46% / 72% 14% 86% 28% ", background:"#cfdece"}}>

<img src={kefalett} alt="" style={{maxWidth:"30px"}}/>

               </span>

<span className='content'>
    <h3 style={{ color: "#002246"}}>Kefalet</h3>
  
   </span>
   <span className='linkbu'>
   <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
   </span>
</div>






</div>




          {/* <div className='w-full  flex  p-4 my-4 rounded-lg hover:scale-100 duration-300 cardHover cursor-pointer ' style={{boxShadow: "0 2px 4px 0 rgb(0 0 0 / 24%), 0 0 2px 0 rgb(0 0 0 / 12%), 0 0 50px 0 #d7dddb",
        justifyContent:"space-between",alignItems:"center"}}>

          
               <span className='icon'>

                <img src={tamamlayici} alt="" />

               </span>

               <span className='content'>
                <h3 style={{ color: "#32CD32"}}>Tamamlayıcı Sigorta</h3>
                <p>Seyahat sigortanızı en uygun <br /> primlerle  hemen yaptırın!</p>
               </span>
               <span className='linkbu'>
                Teklif Al
               </span>
              
          </div> */}


<Link to="/konut-sigortasi">

<div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cardHover cursor-pointer ' style={{background:"#f0f0f0",
        justifyContent:"space-between",alignItems:"center"}}>

          
               <span className='icon' style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>
                <img src={konutTo} alt=""  style={{maxWidth:"30px"}}/>
               </span>
               <span className='content'>
                <h3 style={{ color:"#002246"}}>Konut </h3>
                <p>Teminatları seçin evinizi ve <br /> eşyalarınızı korumaya alın!</p>
               </span>
               <span className='linkbu'>
               <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
               </span>
              
          </div>

</Link>
         


        

        <Link to="/dask">

        <div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cardHover cursor-pointer ' style={{background:"#f0f0f0",
        justifyContent:"space-between",alignItems:"center"}}>

          
               <span className='icon' style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>
                <img src={daskKonut} alt=""  style={{maxWidth:"30px"}}/>
               </span>
               <span className='content'>
                <h3 style={{ color: "#002246"}}>DASK</h3>
                <p>Zorunlu deprem sigortanıza ait <br /> primi kolayca hesaplayın!</p>
               </span>


               <span className='linkbu'>
               <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
               </span>
              
          </div>
        
        </Link>

         


      </div>


      {/* second div */}

      <div className='max-w-[1240px] mx-auto grid  lg:grid-cols-3 gap-4' style={{background:"white"}}>


      <div className=' grid md:grid-cols-2 lg:grid-cols-2 gap-4'>




<div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cursor-pointer' style={{background:"#f0f0f0",
justifyContent:"space-between",alignItems:"center"}}   onClick={routeChangeKasko}>

<span className='icon' style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>

                <img src={kasokosecon} alt="" style={{maxWidth:"30px"}} />

               </span>

<span className='content'>
    <h3 style={{ color: "#002246"}}>Kasko</h3>


  
   </span>
   <span className='linkbu'>
   <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
   </span>
</div>







<div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cursor-pointer' style={{background:"#f0f0f0",
justifyContent:"space-between",alignItems:"center"}} onClick={routeChangeSaglik}>

<span className='icon'  style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>
                <img src={healthCare} alt=""  style={{maxWidth:"30px"}}/>
               </span>



<span className='content'>
    <h3 style={{ color: "#002246"}}>Sağlık</h3>
  
   </span>
   <span className='linkbu'>

   <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
    
   </span>
</div>






</div>



<Link to="/vize-seyahat-sigortasi" >
<div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cardHover cursor-pointer ' style={{background:"#f0f0f0",
        justifyContent:"space-between",alignItems:"center"}}>

          
               <span className='icon'  style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>
                <img src={seyahatCare} alt="" style={{maxWidth:"30px"}} />
               </span>
               <span className='content'>
                <h3 style={{ color: "#002246"}}>Seyahat</h3>
                <p>En uygun primlerle özel sağlık <br /> sigortası yaptırın, rahat edin!</p>
               </span>
               <span className='linkbu'>
               <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
               </span>
              
          </div>
</Link>

          

          <div className=' grid md:grid-cols-2 lg:grid-cols-2 gap-4'>

           

            <div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cursor-pointer' style={{background:"#f0f0f0",
         justifyContent:"space-between",alignItems:"center"}}   onClick={routeChangePolice}>


<span className='icon'  style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>
                <img src={police} alt=""  style={{maxWidth:"30px"}}/>
               </span>
            

            <span className='content'>
                <h3 style={{ color: "#002246"}}>Poliçe</h3>
              
               </span>
               <span className='linkbu'>
               <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
               </span>
            </div>

            
           




<div className='w-full  flex  p-4 mt-4 rounded-lg hover:scale-100 duration-300 cursor-pointer' style={{background:"#f0f0f0",
         justifyContent:"space-between",alignItems:"center"}}  onClick={routeChangeCepTel}>

<span className='icon'  style={{borderRadius:"30% 70% 54% 46% / 30% 47% 53% 70% ", background:"#cfdece"}}>
                <img src={cepTel} alt=""  style={{maxWidth:"30px"}}/>
               </span>

            <span className='content'>
                <h3 style={{ color: "#002246"}}>Cep</h3>
               </span>
               <span className='linkbu'>
               <img src={nextArrow} alt="" style={{maxWidth:"20px" , maxHeight:"27pz"}} />
               </span>
</div>



          
          </div>
      </div>


    </div>
   
  );
};

export default Cards;
