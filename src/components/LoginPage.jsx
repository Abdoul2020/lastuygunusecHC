import React from 'react'
import loginImage from "../assets/newImage/loginpageImage.svg"

const loginPage = () => {


  






  return (
   <div className='loginPageClass'>
     <div class="container ">
    <div class="img">

       <img src={loginImage} alt="" />

    </div>
    <div class="login-content">
        <form action="index.html">

            <h2 class="title">Üye Girişi</h2>
               <div class="input-div one">
                  <div class="i">
                          <i class="fas fa-user"></i>
                  </div>
                  <div class="div">
                          <h5>E-Posta</h5>

                          <input type="text" class="input"/>

                  </div>
               </div>
               <div class="input-div pass">
                  <div class="i"> 
                       <i class="fas fa-lock"></i>
                  </div>
                  <div class="div">
                       <h5>Şifre</h5>
                       
                       <input type="password" class="input"/>
                      
               </div>
            </div>
            <a href="#">Şifremi Unuttum</a>
            <input type="submit" class="btn" value="Login"/>
        </form>
    </div>
</div>
   </div>
  )
}

export default loginPage
