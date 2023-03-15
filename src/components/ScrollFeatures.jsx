import React, {useState, useEffect,useRef} from 'react'
import { Grid } from "@mui/material";
import $ from "jquery";
import { findDOMNode } from 'react-dom';

import Lottie from 'react-lottie-player'
import lottieJson from './mylotti.json'

import ScrollMagic from 'scrollmagic';
import whyUs from "../assets/newImage/nedenbiz.svg"
import dateCahnge from "../assets/newImage/Date picker-rafiki.svg";    
import answerQuest from "../assets/newImage/Security On-rafiki.svg";





const ScrollFeatures = () => {

	const videoEl = useRef(null);

	const attemptPlay = () => {

		videoEl &&
		  videoEl.current &&
		  videoEl.current.play().catch(error => {
			console.error("Error attempting to play", error);

		  });
	  };


	  useEffect(() => {
		attemptPlay();
	  }, []);  






    
  return (

	<div style={{ background:"#ffff"}}>

		<div  className='text-2xl font-bold text-center pt-10 text-[#0c2c4f]'>
			<h1>Neden UygunuSeç ?</h1>
		</div>

		<div className='hidden lg:block'>
		<section id='scrolly-side'>

<div className='scrolly'>
	<article>

		<div className='step'  data-index='0'>
		<div className="floating-box ">

                                    {/* <div className="floating-box__number ">1</div> */}
                                    <div className="floating-box__title ">Sizin için UYGUN teminat!</div>
                                    <div className="floating-box__description ">
									Gelişen  Finans Piyasalarında sizlerin ihtiyaçları doğrultusunda onlarca anlaşmalı Sigorta Şirketi / Aracı Kurum  ve yaygın hizmet ağıyla; yeni nesil dijital sigortacılık araçları ile en uygun fiyatlarla her an yanınızda olacağız. 

										</div>
                                    
                                </div>

		</div>
		<div className='step' data-index='1'>

		<div className="floating-box ">
			
                                    {/* <div className="floating-box__number ">2</div> */}

                                    <div className="floating-box__title ">Sürdürebilir Kapsamlı teminatın adresi UygunuSEC!</div>
                                    <div className="floating-box__description ">
										Sizin adınıza kapsamlı, sürdürebilir teminatlar ile mevcut poliçe yenileme sürecinde gelişen piyasa koşullarını kapsayacak teminatlar riskinizi teminat altına almaya devam edeceğiz.
										
										</div>
                                    
                                </div>

		</div>
		<div className='step'  data-index='2'>

		<div className="floating-box ">
                                    {/* <div className="floating-box__number ">3</div> */}
                                    <div className="floating-box__title ">Bize Ulaşın/Sorun!</div>
                                    <div className="floating-box__description ">
										Tüm dijital kanallarımız ile 7/24 kesintisiz riskinizi analiz edebilir, ideal teminatlar sunabiliriz.
										</div>
                                   
                                </div>
			
		</div>
	</article>

	<figure className='sticky'>
		
		{/* <video  controls  playsInline loop style={{height:"50vh"}} src={mpvideo}  ref={videoEl} /> */}

<img src={answerQuest} alt="" />

	</figure>

</div>

</section>
	</div>


	{/* MOBİLE PART  */}
	<div className='block lg:hidden'  style={{marginTop:"30px"}}>
		
		
		{/* <div style={{ maxWidth: "710px",
    margin: "0 auto"}}>
			<h2 style={{ fontSize: "34px",
    lineHeight: "52px", fontweight: 600 , color:"#FFF", textAlign:"center"}}><span>Sigortamı </span>  Neden UygunSeç'ten Almalıyım ? </h2>
		</div> */}

		<section >

<div className='scrolly'>

<div className="floating-box ">
                                    <div className="floating-box__number ">1</div>
                                    <div className="floating-box__title">Sizin için UYGUN teminat!</div>
                                    <div className="floating-box__description ">
									Gelişen  Finans Piyasalarında sizlerin ihtiyaçları doğrultusunda onlarca anlaşmalı Sigorta Şirketi / Aracı Kurum  ve yaygın hizmet ağıyla; yeni nesil dijital sigortacılık araçları ile en uygun fiyatlarla her an yanınızda olacağız. 
										</div>
                                    <div className="floating-box__banner js-lottie-floating-box-mobile-1 ">
										<img src={answerQuest} alt="" />
									</div>
                                </div>

		
		<div className='step' data-index='1'>

		<div className="floating-box ">
                                    <div className="floating-box__number ">2</div>
                                    <div className="floating-box__title ">Sürdürebilir Kapsamlı teminatın adresi UygunuSEC!</div>
                                    <div className="floating-box__description ">
									Sizin adınıza kapsamlı, sürdürebilir teminatlar ile mevcut poliçe yenileme sürecinde gelişen piyasa koşullarını kapsayacak teminatlar riskinizi teminat altına almaya devam edeceğiz.
										</div>
                                    <div className="floating-box__banner js-lottie-floating-box-mobile-2 ">
									<img src={dateCahnge} alt="" />
									</div>
                                </div>

		</div>
		<div className='step'  data-index='2'>

		<div className="floating-box ">
                                    <div className="floating-box__number ">3</div>
                                    <div className="floating-box__title ">Bize Ulaşın/Sorun!</div>
                                    <div className="floating-box__description ">
									Tüm dijital kanallarımız ile 7/24 kesintisiz riskinizi analiz edebilir, ideal teminatlar sunabiliriz.
										</div>
                                    <div className="floating-box__banner js-lottie-floating-box-mobile-3 ">
									<img src={whyUs} alt="" />
									</div>
                                </div>
		
	</div>

</div>

		</section>

	</div>



	</div>

	

  )
}

export default ScrollFeatures

