import React from 'react'

const FormTo = () => {


  return (

    <div className='simple-form-contact'>

<form class="form">
  <h2>İletişime Geç</h2>
  <p type="Ad:"><input placeholder="Adınız"></input></p>
  <p type="Email:"><input placeholder="E-posta"></input></p>
  <p type="Soru:"><input placeholder="Sorunuz"></input></p>
  <button>Gönder</button>
  <div className='bottomgri'>
    <span class="fa fa-phone"></span>+90(532)-662-2981
    <span class="fa fa-envelope-o"></span>info@camadansigorta.com.tr
  </div>
</form>

    </div>


  )


}

export default FormTo
