import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import carsKons from "../assets/images/icons/carinsurance.svg"
import homeHouse from "../assets/images/icons/househome.svg"
import healtheCare from "../assets/images/icons/healthcare.svg"
import FianceAll from "../assets/images/icons/financeall.svg"






const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1" >

        <a href="">
        <Grid container className='inside-item'>
            <Grid xs={12} sm={12} md={12} lg={12}>
<div className='icon-carousel'>

<img src={carsKons} alt=""  style={{margin:"auto", background:"#fff", borderRadius:"50%"}}/>

    
</div>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12}>

<div className='produc-title'>
    <h2>
        Araç Sigortası
    </h2>
</div>
            </Grid>

        </Grid>
        </a>
       
    </div>,
    <div className="item" data-value="2" >  

    <a href="">
    <Grid container className='inside-item'>
    <Grid xs={12} sm={12} md={12} lg={12}>
<div className='icon-carousel'>
<img src={homeHouse} alt=""  style={{margin:"auto",background:"#fff", borderRadius:"50%"}}/>

</div>
    </Grid>
    <Grid xs={12} sm={12} md={12} lg={12}>

<div className='produc-title'>
<h2>
Evim ve Eşyalarım
</h2>
</div>
    </Grid>

</Grid>

    </a>
    
     

</div>,
    <div className="item" data-value="3" >  

    <a href="">


    <Grid container className='inside-item'>
    <Grid xs={12} sm={12} md={12} lg={12}>
<div className='icon-carousel'>
<img src={healtheCare} alt=""  style={{margin:"auto", background:"#fff", borderRadius:"50%"}}/>

</div>
    </Grid>
    <Grid xs={12} sm={12} md={12} lg={12}>

<div className='produc-title'>
<h2>
Sağlığım
</h2>
</div>
    </Grid>

</Grid> 
    </a>
    
    


</div>,
    <div className="item" data-value="4" > 
    

    <a href="">
    <Grid container className='inside-item'>
    <Grid xs={12} sm={12} md={12} lg={12}>
<div className='icon-carousel'>
<img src={FianceAll} alt=""  style={{margin:"auto",background:"#fff", borderRadius:"50%"}}/>

</div>
    </Grid>
    <Grid xs={12} sm={12} md={12} lg={12}>

<div className='produc-title'>
<h2>
Finansal
</h2>
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




const ProductCarousel = () => {

   

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

export default ProductCarousel
