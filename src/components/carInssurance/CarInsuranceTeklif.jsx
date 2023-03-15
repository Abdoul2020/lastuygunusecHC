import React,{useEffect} from 'react'
import { Grid } from "@mui/material";
import $ from "jquery";

import answer from "../../assets/aboutKons/aboutUsPage/answer.svg"
import price from "../../assets/aboutKons/aboutUsPage/price.svg"



const CarInsuranceTeklif = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    
        
        //* Form js
        function verificationForm(){
            //jQuery time
            var current_fs, next_fs, previous_fs; //fieldsets
            var left, opacity, scale; //fieldset properties which we will animate
            var animating; //flag to prevent quick multi-click glitches
    
            $(".next").click(function () {
                if (animating) return false;
                animating = true;
    
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();
    
                //activate next step on progressbar using the index of next_fs
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({
                    opacity: 0
                }, {
                    step: function (now, mx) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale current_fs down to 80%
                        scale = 1 - (1 - now) * 0.2;
                        //2. bring next_fs from the right(50%)
                        left = (now * 50) + "%";
                        //3. increase opacity of next_fs to 1 as it moves in
                        opacity = 1 - now;
                        current_fs.css({
                            'transform': 'scale(' + scale + ')',
                            'position': 'absolute'
                        });
                        next_fs.css({
                            'left': left,
                            'opacity': opacity
                        });
                    },
                    duration: 800,
                    complete: function () {
                        current_fs.hide();
                        animating = false;
                    },
                    //this comes from the custom easing plugin
                    easing: 'easeInOutBack'
                });
            });
    
            $(".previous").click(function () {
                if (animating) return false;
                animating = true;
    
                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();
    
                //de-activate current step on progressbar
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
                //show the previous fieldset
                previous_fs.show();
                //hide the current fieldset with style
                current_fs.animate({
                    opacity: 0
                }, {
                    step: function (now, mx) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale previous_fs from 80% to 100%
                        scale = 0.8 + (1 - now) * 0.2;
                        //2. take current_fs to the right(50%) - from 0%
                        left = ((1 - now) * 50) + "%";
                        //3. increase opacity of previous_fs to 1 as it moves in
                        opacity = 1 - now;
                        current_fs.css({
                            'left': left
                        });
                        previous_fs.css({
                            'transform': 'scale(' + scale + ')',
                            'opacity': opacity
                        });
                    },
                    duration: 800,
                    complete: function () {
                        current_fs.hide();
                        animating = false;
                    },
                    //this comes from the custom easing plugin
                    easing: 'easeInOutBack'
                });
            });
    
            $(".submit").click(function () {
                return false;
            })
        }; 
        
        //* Add Phone no select
        function phoneNoselect(){
            if ( $('#msform').length ){   
                $("#phone").intlTelInput(); 
                $("#phone").intlTelInput("setNumber", "+880"); 
            };
        }; 
        //* Select js
        function nice_Select(){
            if ( $('.product_select').length ){ 
                $('select').niceSelect();
            };
        }; 


        // verificationForm ();
        // phoneNoselect ();
        // nice_Select ();


        // channge div 

        $(document).ready(function(){
			//after load will check the checkbox is checked or not
			var check = $("#yes").prop("checked");
			if(check){
				$("#first").addClass("activeTab");
			}
			
			//click on yes
			$("#yes").on("click", function(){
				check = $(this).prop("checked");
				$("#second").removeClass("activeTab");
				$("#first").addClass("activeTab");
				
			})
			//click on No
			$("#no").on("click", function(){
				check = $(this).prop("checked");
				$("#first").removeClass("activeTab");
				$("#second").addClass("activeTab");
				console.log(check);
			})
		});
    

  return (

   
        <div>
            <Grid container>
            <Grid xs={12}  sm={12} md={12} lg={12} style={{paddingLeft:"40px", paddingRight:"40px"}}>

                <div className='teklifform'>
                    <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12} >
                      
<section class="multi_step_form">

  <form id="msform"> 
    <div class="tittle">
      <h2>Verification Process</h2>
      <p>In order to use this service, you have to complete this verification process</p>
    </div>
    
    
    <ul id="progressbar">
      <li class="active">Sigortalı Bilgileriniz</li>  
      <li>Yenileme Araç Bilgileriniz</li> 
      <li>Detay / Kayıt</li>
    </ul>
  </form>  
</section> 

                        </Grid>

                        <Grid xs={12} sm={12} md={12} lg={12}>

                           <Grid container>

                            <Grid xs={12} sm={12} md={12} lg={12} className="px-28">

                                <div className=''>

                                    <Grid container>

                                        <Grid xs={12} sm={12} md={12} lg={12} >

                                        <ul class="parentClass">
	<li>
		<label className='labelName'>
			<input type="radio" value="" name="anything" class="radioCls" id="yes" checked /> şahıs
		</label>
		<label className='labelName'>
			<input type="radio" value="" name="anything" class="radioCls" id="no" /> Şirket

		</label>
	</li>
</ul>
                                        </Grid>

                                        <Grid xs={12} sm={12} md={12} lg={12}> 

                                        <div class="someData" id="first">
	<p>This is first data would be visible on landing</p>
</div>
<div class="someData " id="second">
	<h3>This is second data after no is checked</h3>
</div>
                                        </Grid>

                                    </Grid>

                                </div>

                            </Grid>
                           </Grid>



                        </Grid>

                       
                    </Grid>
                </div>

          <div >
         
          </div>

            </Grid>
        </Grid>
        </div>

   

  )
}

export default CarInsuranceTeklif
