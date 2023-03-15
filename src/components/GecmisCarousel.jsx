import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import carsKons from "../assets/images/icons/carinsurance.svg"
import homeHouse from "../assets/images/icons/househome.svg"
import healtheCare from "../assets/images/icons/healthcare.svg"
import FianceAll from "../assets/images/icons/financeall.svg"
import logoCardHere from "../assets/images/logo35.jpeg"



import asset1 from "../assets/kampaya/Asset 1.jpg"
import asset2 from "../assets/kampaya/Asset 2.jpg"
import asset3 from "../assets/kampaya/Asset 3.jpg"
import asset4 from "../assets/kampaya/Asset 4.jpg"
import asset5 from "../assets/kampaya/Asset 5.jpg"






const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};



const items = [
    <div className="item" data-value="1" >

        <a href="">
        <Grid container className='inside-item'>
            <Grid xs={12} sm={12} md={12} lg={12} className="kampaya-card">
            <div class="wrapper">

<main class="grid">


<div class="grid__item relative">

<img src={asset1} alt="Kampaya" />


<h2 className='kampaya-cardTitle'>Trafik Sigorta</h2>
        <p>Trafik sigortasında çekici hizmeti Uygunusec&hellip;</p><br />



</div>
</main>

</div> 
            </Grid>

        </Grid>
        </a>
       
    </div>,
    <div className="item" data-value="2" >  

    <a href="">
    <Grid container className='inside-item'>
    <Grid xs={12} sm={12} md={12} lg={12} className="kampaya-card">
            <div class="wrapper">

<main class="grid">


<div class="grid__item relative">
<img src={asset2} alt="Kampaya" />

<h2 className='kampaya-cardTitle'>Trafik Sigorta</h2>
        <p>Trafik sigortasında çekici hizmeti Uygunusec&hellip;</p><br />
</div>
</main>

</div> 
            </Grid>

</Grid>

    </a>
    
     

</div>,
    <div className="item" data-value="3" >  

    <a href="">


    <Grid container className='inside-item'>
    <Grid xs={12} sm={12} md={12} lg={12} className="kampaya-card">
            <div class="wrapper">

<main class="grid">


<div class="grid__item relative">
<img src={asset3} alt="Kampaya" />

<h2 className='kampaya-cardTitle'>Trafik Sigorta</h2>
        <p>Trafik sigortasında çekici hizmeti Uygunusec&hellip;</p><br />
</div>
</main>

</div> 
            </Grid>

</Grid> 
    </a>
    
    
</div>,



];

const onInitialized = (e) => {
    console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
    console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
    console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
    console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};

const GecmisCarousel = () => {

   

  return (
    <AliceCarousel

    autoPlay
autoPlayControls
autoPlayStrategy="none"
autoPlayInterval={1000}
animationDuration={1000}
animationType="fadeout"
infinite
touchTracking={true}

disableDotsControls
disableButtonsControls

        mouseTracking
        keyboardNavigation
        items={items}
        responsive={responsive}
        onInitialized={onInitialized}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        onResized={onResized}
    />
  )
}

export default GecmisCarousel
