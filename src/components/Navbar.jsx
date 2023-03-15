import React, { useState,useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import uygunlogo from "../assets/images/logoRight.png";
import Menu from "./ProductsSubMenu/Menu";

import phoneCall from "../assets/images/icons/phoneCall.svg";
import { Grid } from "@mui/material";
import { Link,useLocation } from "react-router-dom";
import loginIcon from "../assets/images/icons/userSvg.svg"
import logoLogin from "../assets/images/logo35.jpeg"

// login Disalog From here


import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { VscAccount,VscWorkspaceTrusted, VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { RxEyeOpen,RxEyeNone } from "react-icons/rx";


// login process from here
import { useSelector, useDispatch } from "react-redux";
import {loginUserAsync} from "../services/redux/loginSlice";
import {getUserAsync} from "../services/redux/userSlice"
import Cookies from "universal-cookie"; //cookies
import { useNavigate } from "react-router-dom";
import { toastify } from "../services/toastify";
import UserInfoMenu from './ProductsSubMenu/userInfoMenu';
import AllTeklfiForm from './formTekliff.jsx/AllTeklfiForm';







const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};







const Navbar = () => {


   //redux toolkit getirme
   const dispatch = useDispatch();
   const navigate = useNavigate();



  const loginErrorCall = useSelector((state) => state.loginSlice.errors);
  const loginStatus = useSelector((state) => state.loginSlice.status);

  // login Info from here
  const userStatus = useSelector((state) => state.userSlice.status);
  const userNameSurName = useSelector((state) => state.userSlice.displayName);


  const cookies = new Cookies();
  const token = cookies.get("idToken");
  //logOut User from here
  function logoutUser() {
    //navigate("/login");
    if (token) {
      cookies.remove("idToken");
      window.location.href = "/login";
    }
  }

  useEffect(() => {


   
  }, [])


  useEffect(() => {
    console.log("StatuDurum",loginStatus)
  }, [loginStatus])

  useEffect(() => {
    console.log("dataToReview::",loginErrorCall)
    if (loginErrorCall) {
      console.log("ErrrorTRUE")
      setloginUserError({
        loginError: loginErrorCall.error ? true : false,
      });
    }
  }, [loginErrorCall])





  
  const [nav, setNav] = useState(false);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  

  const handleNav = () => {
    setNav(!nav);
  };


  // urunlerimiz hover display
  const [visible, setVisible] = useState(false);
  const [userInfoMenuVisible, setuserInfoMenuVisible]= useState(false);
  const [dataIsHere, setdataIsHere]= useState(false);


  const displayMenu = () => {
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };



  const chooseMessage = (message) => {
    setVisible(message);
  };
  const chooseMessageTwo= (message)=>{
    // setuserInfoMenuVisible(message);
    setdataIsHere(message);

  }

  useEffect(() => {

   console.log("DataisHree",dataIsHere)

  }, [dataIsHere])

  


  // sctickyNabar
  const [allTophere, setStickyClass] = useState('');

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
       windowHeight > 100 ? setStickyClass('allTophere') : setStickyClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {

      window.removeEventListener('scroll', stickNavbar);

    };
  }, [window.scrollY]);


  // onMouseLeave={hideMenu}

  // sm:mt-0 xs:mt-0 md:mt-0 lg:mt-44

  const location = useLocation();

  const [producTKontrol, setproducTKontrol]= useState(false)
  const [carAracim, setcarAracim]=useState(false)
  const [saglikHealth, setsaglikHealth]=useState(false)
  const [evimEsya, setevimEsya]=useState(false)
  const [finansalHere, setfinansalHere]=useState(false)
  const [enerjiSigorta, setenerjiSigorta]= useState(false)



  const [loginUser,setloginUser]= useState({

    email:"",
    password: ""

  })

  const [loginUserError, setloginUserError]= useState([{}]);

  function requiredEmailController() {
    setloginUserError((prevState) => ({
      ...prevState,
      requiredEmail: loginUser.email == "" ? true : false,
    }));
  }

  function requiredPasswordController() {
    setloginUserError((prevState) => ({
      ...prevState,
      requiredPassword: loginUser.password == "" ? true : false,
    }));
  }


  function loginChangeErrorController() {
    setloginUserError((prevState) => ({
      ...prevState,
      loginError: false,
    }));
  }


  function emailFormatController() {
    const pattern2 =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

      const pattern= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const result = pattern.test(loginUser.email);
    setloginUserError((prevState) => ({
      ...prevState,
      emailFormatError: !result ? true : false,
    }));
  }

  // login Function
  function loginUserOnly(e){

    console.log("GidenDataLogin::", e)

    const cookies = new Cookies();
    const token = cookies.get("idToken");


    if(token){

toastify({ type: 'info', message: 'Önce Mevcut Hesaptan Çıkış yapınız.' });
cookies.remove("idToken");

    }else{


      dispatch(loginUserAsync({email:e.email,password:e.password})).then(()=>{

        const cookies = new Cookies();
        const token = cookies.get("idToken");

        dispatch(getUserAsync()).then((data)=>{

          console.log("loginUserRole", data)

          if(data.payload.data.body.data.role === "servicep"){

            navigate("/service-provider");

          }else if(data.payload.data.body.data.role === "user"){
            navigate("/kampayanlar");
          }else if(data.payload.data.body.data.role === "admin"){
            navigate("/uygunusec-admin"); 
          }

        })
      })

    }
    
  }


  // logout from here

  function logoutUser() {
    //navigate("/login");
    if (token) {
      cookies.remove("idToken");
      window.location.href = "/controlza";
    //navigate("/");

    }
  }




  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      loginUserOnly();
    }
  };




  //password View From here
  const [passwordView, setPasswordView] = useState(false);



  // onMouseOver={displayMenu}

  const [message, setMessage] = React.useState(false);
  const chooseMessageee = (message) => {
    setMessage(message);
  };

  useEffect(() => {
   console.log("BakalimBubb",message )
  }, [message])


  

  return (

  
    <div className={`flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  bg-white   navBarFirst ${allTophere} `}   onMouseLeave={hideMenu} >


<div  className='navBarFirst-item  justify-between'>

 <div className='cursor-pointer'>
  <Link to="/">
  <img src={uygunlogo} alt="okkk" style={{ maxWidth:"150px"}} />
  </Link>
 
 </div>

 <div>
  
 <Menu isVisible={visible} chooseMessage={chooseMessage} />
 <UserInfoMenu isVisible={userInfoMenuVisible}  chooseMessage={chooseMessageTwo} />


 </div>
 
<h1 className=' text-4xl font-bold text-[#1C7B17] mt-auto mb-auto logoTitle cursor-pointer' >
  <Link to="/">
  UYGUNUSEC
  </Link>
  </h1>

 <ul className='hidden lg:flex ml-auto'>
 
   <li className='p-4 m-auto cursor-pointer'>
   <Link to={"/page/hakkimizda"}>
   Hakkımızda
  </Link>
    </li>
   <li className='p-4 m-auto cursor-pointer'  onClick={()=>{setVisible(!visible)}}>Ürünlerimiz</li>
   <li className='p-4 m-auto cursor-pointer'>

    <Link to="/kampanyalar">
    Kampayalar
    </Link>
    
    </li>


   {/* <li className='p-4'>About</li>
   <li className='p-4'>Contact</li> */}






 </ul>

 <div className='lastRaowHere lg:ml-auto '>

   <div className='  m-auto customServis'  >
     <a href="tel:+90532 662 29 81" style={{display:"flex", fontSize:"9px"}}>
       <span style={{marginTop:"auto", marginBottom:"auto"}}>
         <img src={phoneCall} alt="" style={{maxWidth:"20px", maxHeight:"20px"}}/>
       </span>
       &nbsp;&nbsp;
       <span>
       Müşteri Hizmetleri <br />
       <strong style={{ fontSize:"14px"}}>
       +90(532)-662-2981
       </strong>
       </span>
     </a>
   </div>

   <div className=' m-auto loginButton' onClick={(e)=>{e.preventDefault();handleClickOpen(); setuserInfoMenuVisible(!userInfoMenuVisible)}}>

    
    <a href="" style={{display:"flex"}}  >
<span style={{marginTop:"auto", marginBottom:"auto"}}>
{/* <img src={loginIcon} alt="UygunuSec" style={{maxWidth:"20px", maxHeight:"20px"}}  /> */}
</span>
&nbsp;&nbsp;
<span>


  {/* <strong>

    {
      dataIsHere ? "Hesabım" :"Üye Girişi"
    }
  
  </strong> */}

  <strong>
  Teklif Al
  </strong>

  



</span>


</a>
    
    
   </div>


 </div>


 


 <div onClick={handleNav} className='block lg:hidden' style={{marginTop:"30px"}}>

{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}  />}

</div>

</div>

{/* border-r border-r-gray-900 */}

 
 <ul className={nav ? 'fixed left-0 top-0 w-[90%] h-full  bg-[#FFFF] ease-in-out duration-500 overflow-x-hidden overflow-y-auto' : 'ease-in-out duration-500 fixed left-[-100%]'}>
   <h1 className='w-full text-3xl font-bold text-[#1c7b17] m-4'>UYGUNUSEC.</h1>

<Link to="/page/hakkimizda">
<li className='p-4 border-b border-gray-600' onClick={handleNav}>Hakkımızda</li>

</Link>


     <li className='p-4 border-b border-gray-600 flex justify-between' onClick={()=>setproducTKontrol(!producTKontrol)}><span>Ürünlerimiz</span>
     <span>

      {
        producTKontrol ?  <VscChevronUp   /> :  <VscChevronDown   />
      }
    
     </span>
     </li>

     {
      producTKontrol && (
<div>
<ul>
  <li className='pl-6 pr-6 pt-2 pb-2 font-bold flex justify-between' onClick={()=>setcarAracim(!carAracim)}>
   
    <span>
    Aracım
    </span>
    <span>
    {
        carAracim ?  <VscChevronUp   /> :  <VscChevronDown   />
      }
    </span>
  </li>

  {
    carAracim && (
      <ul>
<Link to="/kasko">

<li className='pl-8 pt-2 pb-2 ' onClick={handleNav}>
    Kasko
  </li>
</Link>

<Link to="/trafik-sigortasi">
<li className='pl-8 pt-2 pb-2' onClick={handleNav}>
    Trafik sigortası
  </li>
</Link>

  

      </ul>
    )
  }

</ul>


<ul>
  <li className='pl-6 pr-6  pt-2 pb-2 font-bold flex justify-between' onClick={()=>setevimEsya(!evimEsya)}>
    <span>Evim & Eşyalarım</span>
    <span>
    {
        evimEsya ?  <VscChevronUp   /> :  <VscChevronDown   />
      }
    </span>
  </li>

  {
    evimEsya && (
      <ul>

  <Link to="/dask">
  <li className='pl-8 pt-2 pb-2 ' onClick={handleNav}>
    DASK
  </li>
  </Link>

  <Link to="/konut-sigortasi">
  <li className='pl-8 pt-2 pb-2' onClick={handleNav}>
   Konut Sigortası
  </li>
  </Link>

  
<Link to="/evim-guvende">
<li className='pl-8 pt-2 pb-2' onClick={handleNav} >
   Evim Güvende
  </li>
</Link>
 
<Link to="/cep-telefonum-guvende">
<li className='pl-8 pt-2 pb-2' onClick={handleNav} >
   Cep Telefonum
  </li>
</Link>
      </ul>
    )
  }
 

</ul>

<ul>
  <li className='pl-6 pr-6 pt-2 pb-2 font-bold flex justify-between' onClick={()=>setsaglikHealth(!saglikHealth)}>
    <span>
    Sağlığım
    </span>
    <span>
{
  
  saglikHealth ?  <VscChevronUp   /> :  <VscChevronDown   />
}
    </span>
  </li>

  {
    saglikHealth && (
      <ul>



  <Link to="/tamamlayici-saglik-sigortasi">
  <li className='pl-8 pt-2 pb-2 ' onClick={handleNav} >
    Tamamlayıcı Sağlık Sigortası
  </li>
  </Link>

  <Link to="/ozel-saglik-sigortasi">
  <li className='pl-8 pt-2 pb-2' onClick={handleNav}>
    Özel Sağlık Sigortası
  </li>
  </Link>
 
<Link to="/vize-seyahat-sigortasi">
<li className='pl-8 pt-2 pb-2' onClick={handleNav}>
   Vize ve Seyahat Sigortası
  </li>
</Link>
  
<Link to="/yabancilar-saglik-sigortasi">
<li className='pl-8 pt-2 pb-2' onClick={handleNav}>
   Yabancılar Sağılk Sigortası
  </li>
</Link>
 

      </ul>
    )
  }


  

</ul>

<ul>
  <li className='pl-6 pr-6  pt-2 pb-2 font-bold flex justify-between' onClick={()=>setfinansalHere(!finansalHere)}>
   <span> Finansal</span>
   <span>
   {
  
  finansalHere ?  <VscChevronUp   /> :  <VscChevronDown   />
}
   </span>
  </li>

  { 
  finansalHere && (

    <ul>



  <Link to="/kefalet-sigortasi">
  <li className='pl-6 pt-2 pb-2 ' onClick={handleNav}>
    Kefalet Sigortası
  </li>
  </Link>

  <Link to="/bina-tamamlama">
  <li className='pl-6 pt-2 pb-2' onClick={handleNav}>
    Bina Tamamlama
  </li>
  </Link>
 
<Link to="/alacak-sigortasi">
<li className='pl-6 pt-2 pb-2' onClick={handleNav}>
   Alacak Sigortası
  </li>
</Link>
  
<Link to="/police-prim-kredisi">
<li className='pl-6 pt-2 pb-2' onClick={handleNav}>
   Poliçe Prim Kredisi
  </li>
</Link>
    </ul>
  )
  }
  

</ul>


<ul>
  <li className='pl-6 pr-6  pt-2 pb-2 font-bold flex justify-between' onClick={()=>setenerjiSigorta(!enerjiSigorta)}>
   <span> Enerji Sigortaları</span>
   <span>
   {

  
  enerjiSigorta ?  <VscChevronUp   /> :  <VscChevronDown   />

}
   </span>
  </li>

  { 
  enerjiSigorta && (
    <ul>
  <Link to="/enerjisi-tesisi-kurulumu-isletim-sigortasi">
  <li className='pl-6 pt-2 pb-2 ' onClick={handleNav}>

    Enerji Tesisi Kurulumu & İşletim Sigortası

   </li>
  </Link>

  <Link to="/insaat-tum-riskler-sigortasi">
  <li className='pl-6 pt-2 pb-2' onClick={handleNav}>
    İnşaat Tüm Riskler Sigortası
  </li>
  </Link>
 
<Link to="/montaj-tum-riskler">
<li className='pl-6 pt-2 pb-2' onClick={handleNav}>
   Montaj Tüm Riskler
  </li>
</Link>
  
<Link to="/makine-kirilmasi-sigortasi">
<li className='pl-6 pt-2 pb-2' onClick={handleNav}>
   Makine Kırılma Sigortası
  </li>
</Link>
    </ul>
  )
  }
  

</ul>


</div>

      )
     }
     {
      producTKontrol && (
        <li className='p-4 border-b border-gray-600'></li>

      )
     }
     <Link to="/kampanyalar">
     <li className='p-4 border-b border-gray-600' onClick={handleNav}>Kampayalar</li>
     </Link>

     <li className='p-4 border-b border-gray-600 text-center  md:hidden'>
     <a href="tel:+90532 662 29 81" style={{display:"flex", fontSize:"9px", justifyContent:"center"}}>
       <span style={{marginTop:"auto", marginBottom:"auto"}}>
         <img src={phoneCall} alt="" style={{maxWidth:"20px", maxHeight:"20px"}}/>
       </span>
       &nbsp;&nbsp;
       <span>
       Müşteri Hizmetleri <br />
       <strong style={{ fontSize:"14px"}}>
       +90(532)-662-2981
       </strong>
       </span>
     </a>
     </li>
  
     <li className='p-4 border-b border-gray-600 text-center md:hidden' onClick={(e)=>{e.preventDefault();handleClickOpen(); handleNav()}} >
     <a href="" style={{display:"flex", justifyContent:"center"}}  >

<span style={{marginTop:"auto", marginBottom:"auto"}}>
{/* <img src={loginIcon} alt="UygunuSec" style={{maxWidth:"20px", maxHeight:"20px"}}  /> */}
</span>
&nbsp;&nbsp;
<span>
  <strong>
  {/* Üye Girişi */}
  Teklif Al
  </strong>

</span>


</a>
     </li>

     {/* <li className='p-4'>Contact</li> */}


 </ul>




<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

        style={{zIndex:"99999"}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

          {
            message===false ? (
              "Teklif Al"
            ):(
              "Tekliniz Başarılı Gönderilmiştir."
            )
          }
           
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <AllTeklfiForm  chooseMessage={chooseMessageee} />
        </DialogContent>
        <DialogActions>


<Grid container>

</Grid>

          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}



        </DialogActions>
      </BootstrapDialog>
 

</div>

   
  );
};

export default Navbar;
