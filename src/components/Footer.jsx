import React,{useState} from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

import {  VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";


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
import AllTeklfiForm from './formTekliff.jsx/AllTeklfiForm';
import KullaniciSozles from './KullaniciSozles';
import KiselVeri from './KisiselVeri';
import GizlikCerez from './GizlikCerez';



// grid lg:grid-cols-3 gap-8

// form tekliff part from here
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








const Footer = () => {
  const [productKontrol, setproductKontrol]= useState(false)
  const [markalarPro, setmarkalarPro]= useState(false)
  const [hakkimizdaPro, sethakkimizdaPro]= useState(false)
  const [kulaniciSozles, setkulaniciSozles]= useState(false);
  const [kisiSelVeri, setkisiSelVeri]= useState(false);
  const [gizlikCerez, setGizlikCerez]= useState(false);



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setkulaniciSozles(false);
    setkisiSelVeri(false);
    setGizlikCerez(false);
  };


  







  return (
    <div className='w-full mx-auto py-16 px-8  text-gray-300' style={{background:"rgb(14, 46, 80)", borderTop:"3px solid #c2cac8", marginTop:"5rem",
    paddingTop: "1rem",
    fontSize: ".8125rem",
    color: "#FFFf",
    paddingBottom:"0"}}>


      <div>
        <h1 className='w-full text-3xl font-bold text-[#1c7b17]'>Uygunusec</h1>
        <p className='py-4'>Hızlı, Kaliteli, Güvenilir</p>
        <div className='flex justify-between  md:w-[10%] footersocial'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            {/* <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} /> */}
        </div>
      </div>

     


      <div className='lg:col-span-2  justify-around mt-6 mb-10 hidden md:flex'>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400'>Ürünlerimiz</h6>
        <ul>
          <Link to="/kasko">
          <li className='py-2 text-sm'>Kasko</li>

          </Link>
          <Link to="/trafik-sigortasi">

          <li className='py-2 text-sm'>Trafik sigortası</li>
          </Link>

          <Link to="/konut-sigortasi">
          <li className='py-2 text-sm'>Konut Sigortası</li>
          </Link>

          <Link to="/evim-guvende">
          <li className='py-2 text-sm'>Evim Güvende</li>
          </Link>

          <Link to="/cep-telefonum-guvende">
          <li className='py-2 text-sm'>Cep Telefonum</li>
          </Link>

          <Link to="/dask">
          <li className='py-2 text-sm'>DASK</li>
          </Link>
          <Link to="/tamamlayici-saglik-sigortasi">
          <li className='py-2 text-sm'>Tamamlayıcı Sigortası</li>
          </Link>
          <Link to="/ozel-saglik-sigortasi">
          <li className='py-2 text-sm'>Özel Sağlık Sigortası</li>
          </Link>
          <Link to="/vize-seyahat-sigortasi"> 
          <li className='py-2 text-sm'>Vize & Seyahat Sigortası</li>
          </Link>
          <Link to="/yabancilar-saglik-sigortasi">

          <li className='py-2 text-sm'>Yabancılar Sağlık Sigortası</li>
          
          </Link>
          <Link to="/kefalet-sigortasi">
          <li className='py-2 text-sm'>Kefalet Sigortası</li>
          </Link>
          <Link to="/bina-tamamlama">
          <li className='py-2 text-sm'>Bina Tamamlama</li>
          </Link>
          <Link to="/alacak-sigortasi">
          <li className='py-2 text-sm'>Alacak Sigortası</li>
          </Link>
          <Link to="/police-prim-kredisi">
          <li className='py-2 text-sm'>Poliçe Prim Kredisi</li>
          </Link>
          <Link to="/enerjisi-tesisi-kurulumu-isletim-sigortasi">
          <li className='py-2 text-sm'>
Enerji Tesis Kurulum & İşletim Sigortası
          </li>
          </Link>

          <Link to="/insaat-tum-riskler-sigortasi">
          <li className='py-2 text-sm'>
İnşaat Tüm Riskler Sigortası
          </li>
          </Link>
           

          <Link to="/montaj-tum-riskler">
          <li className='py-2 text-sm'>
Montaj Tüm Riskler Sigortası
          </li>
          </Link>

          <Link to="/makine-kirilmasi-sigortasi">
          <li className='py-2 text-sm'>
Makine Kırılması Sigortası
          </li>
          </Link>
           
        </ul>
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400'>Sigorta Firmaları</h6>
        <ul>
          
         

<a href="https://www.quicksigorta.com/" target="_blank">
<li className='py-2 text-sm'>Quick Sigorta</li>
</a>

<a href="https://www.aksigorta.com.tr/" target="_blank">
<li className='py-2 text-sm'>Ak Sigorta</li>
</a>

<a href="https://www.axasigorta.com.tr/" target="_blank">
<li className='py-2 text-sm'>Axa Sigorta</li>

</a>

<a href="https://www.ankarasigorta.com.tr/" target="_blank">

<li className='py-2 text-sm'>Ankara Sigorta</li>

</a>

<a href="https://www.bereket.com.tr/" target="_blank">
<li className='py-2 text-sm'>Bereket Sigorta</li>

</a>

<a href="https://hepiyi.com.tr/"  target="_blank">

<li className='py-2 text-sm'>Hep iyi Sigorta</li>

</a>

<a href="https://www.atlasmutuel.com.tr/" target="_blank">
<li className='py-2 text-sm'>Atlas Sigorta</li>


</a>

<a href="https://www.generali.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Generali Sigorta</li>

</a>

<a href="https://www.fibabanka.com.tr/" target="_blank">
<li className='py-2 text-sm'>Fiba Sigorta</li>

</a>

<a href="https://www.nnhayatemeklilik.com.tr/"  target="_blank">

<li className='py-2 text-sm'>NN Hayat</li>

</a>

<a href="https://www.bereket.com.tr/urunler/bireysel-emeklilik"  target="_blank">
<li className='py-2 text-sm'>Bereket Emeklilik</li>

</a>

<a href="https://www.neova.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Neova Sigorta</li>

</a>

<a href="https://www.turkiyesigorta.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Türkiye Sigorta</li>

</a>
<a href="https://corpussigorta.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Corpus Sigorta</li>

</a>


        </ul>
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400'>Hakkımızda</h6>
        <ul>

          <Link to="/page/hakkimizda">
          <li className='py-2 text-sm'>Biz Kimiz?</li>
          </Link>

          <Link to="/page/iletisim">
          <li className='py-2 text-sm'>İletişim</li>
          </Link>

          <Link to="" onClick={()=>{handleClickOpen(); setkulaniciSozles(true)}}>
          <li className='py-2 text-sm'>Kullanıcı Sözleşmesi</li>
          </Link>

          <Link to="" onClick={()=>{handleClickOpen(); setkisiSelVeri(true)}}>
          <li className='py-2 text-sm'>Kişisel Verilerin Korunması</li>
          </Link>

          <Link onClick={()=>{handleClickOpen(); setGizlikCerez(true)}}>
          <li className='py-2 text-sm'>Gizlilik ve Çerez Politikası</li>
          </Link>
            
        </ul>
    </div>

   


      </div>

      {/* Mobile footer */}

      <div className='lg:col-span-2 block justify-around mt-6 mb-10  md:hidden'>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400 flex justify-between' onClick={()=>setproductKontrol(!productKontrol)}><span>Ürünlerimiz</span>
        <span>
          {
            productKontrol ? <VscChevronUp   /> :  <VscChevronDown   />
          }
          </span> </h6>

        {
          productKontrol && (

            <ul>

            <Link to="/kasko">
          <li className='py-2 text-sm'>Kasko</li>

          </Link>
          <Link to="/trafik-sigortasi">

          <li className='py-2 text-sm'>Trafik sigortası</li>
          </Link>

          <Link to="/konut-sigortasi">
          <li className='py-2 text-sm'>Konut Sigortası</li>
          </Link>

          <Link to="/evim-guvende">
          <li className='py-2 text-sm'>Evim Güvende</li>
          </Link>

          <Link to="/cep-telefonum-guvende">
          <li className='py-2 text-sm'>Cep Telefonum</li>
          </Link>

          <Link to="/dask">
          <li className='py-2 text-sm'>DASK</li>
          </Link>
          <Link to="/tamamlayici-saglik-sigortasi">
          <li className='py-2 text-sm'>Tamamlayıcı Sigortası</li>
          </Link>
          <Link to="/ozel-saglik-sigortasi">
          <li className='py-2 text-sm'>Özel Sağlık Sigortası</li>
          </Link>
          <Link to="/vize-seyahat-sigortasi"> 
          <li className='py-2 text-sm'>Vize & Seyahat Sigortası</li>
          </Link>
          <Link to="/yabancilar-saglik-sigortasi">

          <li className='py-2 text-sm'>Yabancılar Sağlık Sigortası</li>
          
          </Link>
          <Link to="/kefalet-sigortasi">
          <li className='py-2 text-sm'>Kefalet Sigortası</li>
          </Link>
          <Link to="/bina-tamamlama">
          <li className='py-2 text-sm'>Bina Tamamlama</li>
          </Link>
          <Link to="/alacak-sigortasi">
          <li className='py-2 text-sm'>Alacak Sigortası</li>
          </Link>
          <Link to="/police-prim-kredisi">
          <li className='py-2 text-sm'>Poliçe Prim Kredisi</li>
          </Link>
          <Link to="/enerjisi-tesisi-kurulumu-isletim-sigortasi">
          <li className='py-2 text-sm'>
Enerji Tesis Kurulum & İşletim Sigortası
          </li>
          </Link>

          <Link to="/insaat-tum-riskler-sigortasi">
          <li className='py-2 text-sm'>
İnşaat Tüm Riskler Sigortası
          </li>
          </Link>
           

          <Link to="/montaj-tum-riskler">
          <li className='py-2 text-sm'>
Montaj Tüm Riskler Sigortası
          </li>
          </Link>

          <Link to="/makine-kirilmasi-sigortasi">
          <li className='py-2 text-sm'>
Makine Kırılması Sigortası
          </li>
          </Link>
           
        </ul>
          )
        }
       
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400 flex justify-between'  onClick={()=> setmarkalarPro(!markalarPro)}>
          <span> Sigorta Firmaları</span>
          <span>
          {
            markalarPro ? <VscChevronUp   /> :  <VscChevronDown   />
          }
          </span>
        </h6>

        {
          markalarPro && (
            <ul>
             
<a href="https://www.quicksigorta.com/" target="_blank">
<li className='py-2 text-sm'>Quick Sigorta</li>
</a>

<a href="https://www.aksigorta.com.tr/" target="_blank">
<li className='py-2 text-sm'>Ak Sigorta</li>
</a>

<a href="https://www.axasigorta.com.tr/" target="_blank">
<li className='py-2 text-sm'>Axa Sigorta</li>

</a>

<a href="https://www.ankarasigorta.com.tr/" target="_blank">

<li className='py-2 text-sm'>Ankara Sigorta</li>

</a>

<a href="https://www.bereket.com.tr/" target="_blank">
<li className='py-2 text-sm'>Bereket Sigorta</li>

</a>

<a href="https://hepiyi.com.tr/"  target="_blank">

<li className='py-2 text-sm'>Hep iyi Sigorta</li>

</a>

<a href="https://www.atlasmutuel.com.tr/" target="_blank">
<li className='py-2 text-sm'>Atlas Sigorta</li>


</a>

<a href="https://www.generali.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Generali Sigorta</li>

</a>

<a href="https://www.fibabanka.com.tr/" target="_blank">
<li className='py-2 text-sm'>Fiba Sigorta</li>

</a>

<a href="https://www.nnhayatemeklilik.com.tr/"  target="_blank">

<li className='py-2 text-sm'>NN Hayat</li>

</a>

<a href="https://www.bereket.com.tr/urunler/bireysel-emeklilik"  target="_blank">
<li className='py-2 text-sm'>Bereket Emeklilik</li>

</a>

<a href="https://www.neova.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Neova Sigorta</li>

</a>

<a href="https://www.turkiyesigorta.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Türkiye Sigorta</li>

</a>
<a href="https://corpussigorta.com.tr/"  target="_blank">
<li className='py-2 text-sm'>Corpus Sigorta</li>

</a>
        </ul>
          )

        }
       
    </div>
    <div className='subliFooter'>
        <h6 className='font-bold text-gray-400 flex justify-between' onClick={()=>sethakkimizdaPro(!hakkimizdaPro)} >
          <span>Hakkımızda</span>
          <span>
          {
            hakkimizdaPro ? <VscChevronUp   /> :  <VscChevronDown   />
          }
          </span>
        </h6>
       {
        hakkimizdaPro && (
          <ul>

<Link to="/page/hakkimizda">
          <li className='py-2 text-sm'>Biz Kimiz?</li>
          </Link>

          <Link to="/page/iletisim">
          <li className='py-2 text-sm'>İletişim</li>
          </Link>

          <Link to="" onClick={()=>{handleClickOpen(); setkulaniciSozles(true)}}>
          <li className='py-2 text-sm'>Kullanıcı Sözleşmesi</li>
          </Link>

          <Link to="" onClick={()=>{handleClickOpen(); setkisiSelVeri(true)}}>
          <li className='py-2 text-sm'>Kişisel Verilerin Korunması</li>
          </Link>

          <Link onClick={()=>{handleClickOpen(); setGizlikCerez(true)}}>
          <li className='py-2 text-sm'>Gizlilik ve Çerez Politikası</li>
          </Link>

      </ul>
        )
       }
    </div>
      </div>
      

      <hr />
      <div className='text-center text-[#fff] p-5'>
        <span>
        © 2023 uygunusec.com
        </span>
      </div>


      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

        style={{zIndex:"99999"}}

        
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

         {
          kulaniciSozles ? "Kullanıcı Sözleşmesi" : kisiSelVeri ? "Kişisel Verilerin Korunması" : gizlikCerez ? "Gizlilik & Çerez Politikası" : ""
         }
           
        </BootstrapDialogTitle>
        <DialogContent dividers>


          {
            kulaniciSozles ? (
<KullaniciSozles/>
            ): kisiSelVeri ?(
             < KiselVeri/>

            ): gizlikCerez ? (
              <GizlikCerez/>
            ): (
              ""
            )
          
          }

          

        </DialogContent>
        <DialogActions>


<Grid container >

</Grid>


          
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}


        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Footer;
