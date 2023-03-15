import React from 'react'

const ProductsSection = () => {


    const container = document.getElementById('container')
  const buttons = document.querySelectorAll('#controller button')
  const perspectiveSlides = document.querySelectorAll('.perspective-slide')
  let currentColor = 'blue'
  
  // For each color picker button, on click, do the following
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      
      // On click, remove the "active" class (black ring) from color circle button
      buttons.forEach(button => {
        button.classList.remove('active');
      })
      // On click, add the "active" class (black ring) to the clicked color circle button
      button.classList.add('active');
      
      // On click, get the newly clicked color circle button's color
      let newColor = button.getAttribute('data-color')
      
      // On click, remove the "rotate" and "rotate-reverse" classes (perspective animations) from the center tile text
      perspectiveSlides.forEach(el=>el.classList.remove('rotate', 'rotate-reverse'))
      perspectiveSlides.forEach(el=>el.offsetHeight) // This call to "offsetHeight" forces the browser to repaint the styles
      
      // Reusable function for adding classes "rotate" or "rotate-reverse" depending on color selected (depends on if it was selected to left or right of the currently selected color)
      function rotateColor(nextColors) {
        if (nextColors.includes(currentColor)) {
          perspectiveSlides.forEach(el=>el.classList.add('rotate'));
        } else {
          perspectiveSlides.forEach(el=>el.classList.add('rotate-reverse'));
        }
        currentColor = newColor
      }
      
      // If the color picked is X style the tile "slide" content to the left, bring opacity from 0 to 1, and do the opposite for the others. Trigger reusable function that adds "rotate" or "rotate-reverse" classes to the center tile text.
      if (newColor == "blue") {
        document.querySelectorAll('.blue-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
        document.querySelectorAll('.purple-slide, .midnight-slide, .starlight-slide, .red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
        rotateColor(["purple", "midnight", "starlight", "red"])
        
      } else if (newColor == "purple") {
        document.querySelectorAll('.purple-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
        document.querySelectorAll('.blue-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
        document.querySelectorAll('.midnight-slide, .starlight-slide, .red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
        rotateColor(["midnight", "starlight", "red"])
        
      } else if (newColor == "midnight") {
        document.querySelectorAll('.midnight-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
        document.querySelectorAll('.blue-slide, .purple-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
        document.querySelectorAll('.starlight-slide, .red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
        rotateColor(["starlight", "red"])
        
      } else if (newColor == "starlight") {
        document.querySelectorAll('.starlight-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
        document.querySelectorAll('.blue-slide, .purple-slide, .midnight-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
        document.querySelectorAll('.red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
        rotateColor(["red"])
        
      } else if (newColor == "red") {
        document.querySelectorAll('.red-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
        document.querySelectorAll('.blue-slide, .purple-slide, .midnight-slide, .starlight-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
        rotateColor([])
      }
    });
  });
  


  return (
    <div id="container">
	
	
  <div className="display">
		<img className="blue-slide slide" style={{left: "0", opacity: "1"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668886961/codepens/display_blue_vhiobo.jpg" />
		<img className="purple-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966381/codepens/display_purple_e05dzw.jpg" />
		<img className="midnight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966409/codepens/display_midnight_hovnnf.jpg" />
		<img className="starlight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966430/codepens/display_starlight_xzxxtu.jpg" />
		<img className="red-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966454/codepens/display_red_xqwm4l.jpg" />
		<p className="small" align="center">Vibrant Super <br /> Retina XDR display </p>
  </div>

	
  <div className="durability">
		
		<div className="blue-slide slide" style={{left: "0", opacity: "1"}}>
			<img src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668889161/codepens/durable_blue_hy3pcn.jpg" />
			<div className="txt-group">
				<p className="large">Beautifully durable</p>
				<p className="small">aerospace-grade aluminum</p>
			</div>
		</div>
		<div className="purple-slide slide" style={{left: "100%", opacity: "0"}}>
			<img src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_purple_ij65ye.jpg" />
			<div className="txt-group">
				<p className="large">Beautifully durable</p>
				<p className="small">aerospace-grade aluminum</p>
			</div>
		</div>
		<div className="midnight-slide slide" style={{left: "100%", opacity: "0"}}>
			<img src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_midnight_v5uzd9.jpg" />
			<div className="txt-group">
				<p className="large">Beautifully durable</p>
				<p className="small">aerospace-grade aluminum</p>
			</div>
		</div>
		<div className="starlight-slide slide" style={{left: "100%", opacity: "0"}}>
			<img src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_starlight_m8q9bi.jpg" />
			<div className="txt-group">
				<p className="large">Beautifully durable</p>
				<p className="small">aerospace-grade aluminum</p>
			</div>
		</div>
		<div className="red-slide slide" style={{left: "100%", opacity: "0"}}>
			<img src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_red_yz76ei.jpg" />
			<div className="txt-group">
				<p className="large">Beautifully durable</p>
				<p className="small">aerospace-grade aluminum</p>
			</div>
		</div>
  </div>

	
  <div className="lockScreen">
  	<img className="blue-slide slide" style={{left: "0", opacity: "1"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668889971/codepens/lockscreen_blue_kvcokh.jpg" />
		<img className="purple-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_purple_qymskd.jpg" />
		<img className="midnight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_midnight_qpbexo.jpg" />
		<img className="starlight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_starlight_edvfn8.jpg" />
		<img className="red-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_red_lfxayk.jpg" />
  </div>

	
  <div className="colorPicker">
		<div>

			<p className="small perspective-slide">Five fantastic colors</p>
			<p className="xl slide blue-slide perspective-slide">Blue</p>
			<p className="xl slide purple-slide perspective-slide" style={{opacity: "0"}}>Purple</p>
			<p className="xl slide midnight-slide perspective-slide" style={{opacity: "0"}}>Midnight</p>
			<p className="xl slide starlight-slide perspective-slide" style={{opacity: "0"}}>Starlight</p>
			<p className="xl slide red-slide perspective-slide" style={{opacity: "0"}}>Red</p>
		</div>





		<fieldset id="controller" role="tablist" tabIndex="0">
			<button id="blueBtn" data-color="blue" className="active" type="button" role="tab" tabIndex="0"><span></span></button>
			<button id="purpleBtn" data-color="purple" type="button" role="tab"><span></span></button>
			<button id="midnightBtn" data-color="midnight" type="button" role="tab" ><span></span></button>
			<button id="starlightBtn" data-color="starlight" type="button" role="tab"><span></span></button>
			<button id="redBtn" data-color="red" type="button" role="tab"><span></span></button>
		</fieldset>
  </div>

	
  <div className="camera">
  	<img className="blue-slide slide" style={{left: "0", opacity: "1"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668890102/codepens/camera_blue_xqrris.jpg" />
		<img className="purple-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975350/codepens/camera_purple_aadquj.jpg" />
		<img className="midnight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975350/codepens/camera_midnight_lgolgu.jpg" />
		<img className="starlight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975350/codepens/camera_starlight_elbxob.jpg" />
		<img className="red-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975466/codepens/camera_red_fa5zii.jpg" />
  </div>

	
	<div className="waterResistance">
		<img className="blue-slide slide" style={{left: "0", opacity: "1"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668890701/codepens/waterResistance_blue_o0wz3l.jpg" />
		<img className="purple-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_purple_mx0eqp.jpg" />
		<img className="midnight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_midnight_hn2cjq.jpg" />
		<img className="starlight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_starlight_dabsxk.jpg" />
		<img className="red-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_red_2_atkxgm.jpg" />
		<p className="small">with water resistance</p>
	</div>

	
	<div className="glass">
		<div>
			<p className="large">Ceramic Shield</p>
			<p className="small">is tougher than any amartphone glass</p>
		</div>
		<img className="blue-slide slide" style={{left: "0", opacity: "1"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1668890785/codepens/glass_blue_yhsdb6.jpg" />
		<img className="purple-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_purple_dueykc.jpg" />
		<img className="midnight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_midnight_psxtio.jpg" />
		<img className="starlight-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_starlight_zlxyjd.jpg" />
		<img className="red-slide slide" style={{left: "100%", opacity: "0"}} src="https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_red_xlnoxh.jpg" />
	</div>
</div>
  )
}

export default ProductsSection
