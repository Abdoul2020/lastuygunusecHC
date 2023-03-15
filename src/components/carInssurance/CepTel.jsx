import React, {useEffect} from "react";
import { Grid } from "@mui/material";
import $ from "jquery";
import FormTransfer from "../FormTeklif/FormTransfer";
import kaskoImage from "../../assets/producthero/telefonum-guvende.svg";
import { partnerShipData } from "../data/PartnershipData";

import turkiyeSigorta from "../../assets/partnerLogo/turkiye-sigorta.png";
// import loactionShow from
import kaskocar from "../../assets/kasko/carInsurance.jpg";
import howtoapply from "../../assets/howtoapply/howtoapply.jpg"



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
import AllTeklfiForm from "../formTekliff.jsx/AllTeklfiForm";
import CepTelHero from "../KategoriPage/CepTelHero";

import answer from "../../assets/aboutKons/aboutUsPage/answer.svg"
import price from "../../assets/aboutKons/aboutUsPage/price.svg"





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



const CepTel = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  $(function () {
    $(".js-base_btn").hover(function () {
      $(".js-hero_sign").toggleClass("js-ag-animate");
    });
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const [message, setMessage] = React.useState(false);
  const chooseMessage = (message) => {
    setMessage(message);
  };

  useEffect(() => {
   console.log("BakalimBubb",message )
  }, [message])



  return (
   <div>

<CepTelHero/>

<hr />



<Grid container >

<Grid item xs={12} sm={12} md={12} lg={12}>
  <div>
    <article className="article group">
      <img className="image right" src={answer} alt="Image" />
      <section className="content">
        <h2 className="headline">Cep telefonum güvende Sigortası nedir?</h2>
        Cep Telefonu/Tablet gibi akıllı ve hassas cihazların kırılması, hasar görmesi ya da çalınması gibi durumların getirdiği olumsuzluklara karşı sigorta yaptırmak büyük avantaj sağlar. Çünkü bu gibi durumlarda cihazın sigortası onarım masraflarını karşılar ya da eş değer cihaz temin eder.

      </section>
    </article>

    <hr />

    <article className="article group">
      <img
        className="image right"
        src={price}
        alt="Image"
        style={{ float: "left", marginRight: "20px" }}
      />
      <section className="content">
        <h2 className="headline">Cep telefonum güvende sigortası nasıl fiyatlandırılır?</h2>
        Kullanılan akıllı cihazın marka model ve  IMEI NO’su ile kolayca teklif alabilirsiniz.
      </section>
    </article>

    <hr />
  </div>
</Grid>

<Grid item xs={12} sm={12} md={12} lg={12}>
  <div>
    <Grid container>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <div>
          <article className="article group">
            <section className="content nasilAl"  style={{marginTop:"0"}} >

              <h2 className="headline">
              Cep Telefonum Güvende Teklifi Nasıl Alınır ?
              </h2>

              <div className='scrolly'>

<div className="floating-box ">

<div style={{display:"flex", gap:"12px"}}>

<div className="floating-box__number ">1</div>
                              <div className="floating-box__title">Bilgilerini Gir</div>

</div>
                             
                              <div className="floating-box__description ">
                              Teklif Al bölümündeki gerekli bilgileri girerek müşteri temsilcisinin sizi aramasıyla süreci başlatabilirsiniz.
                              </div>




                              <div style={{display:"flex", gap:"12px"}}>

<div className="floating-box__number ">2</div>
                            <div className="floating-box__title"> Karşılaştırma</div>

</div>
                           
                            <div className="floating-box__description ">
                            Tercih ettiğiniz ve/veya temsilcisi olduğumuz sigorta şirketlerinden alınan teklifler tarafınıza karşılaştırma ve seçim için sunulacaktır.
                            </div>



                            <div style={{display:"flex", gap:"12px"}}>

<div className="floating-box__number ">3</div>
                            <div className="floating-box__title"> Satın Al</div>

</div>
                           
                            <div className="floating-box__description ">
                            Poliçenizin kesilmesi ile kullanıma başlayabilirsiniz. Her zaman ihtiyaç duyduğunuzda yanınızdayız.
                            </div>
                          </div>
</div>
             


            </section>
          </article>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <div className="kasko-slider">
          <div className="wrapper">
          <div className="outer" >
        <img src={howtoapply} alt="" />
    </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
</Grid>



<Grid item xs={12} sm={12} md={12} lg={12}>
  <div className="partnershipDiv">
    <div className="text-2xl font-bold text-center pt-20 pb-9">
      <h1>Anlaşmalı  Sigorta Şirketleri</h1>
    </div>

    <Grid container spacing={1} style={{ justifyContent: "center" }}>
      {partnerShipData.map((v, i) => {
        return (
          <Grid item xs={6} sm={6} md={4} lg={2.4} xl={2.4}>
            <div
              style={{
                background: "#f5f7f9",
                borderRadius: "5px",
                textAlign: "center",
                justifyContent: "center",
                margin: "auto",
                height: "115px",
                margin: "10px",
                padding: "32px",
              }}
            >
              <img
                src={v.image}
                alt="Uygunusec"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
          </Grid>
        );
      })}
    </Grid>
  </div>
</Grid>


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

    <AllTeklfiForm  chooseMessage={chooseMessage} />

  </DialogContent>
  <DialogActions>


<Grid container>

</Grid>

    {/* <Button autoFocus onClick={handleClose}>
      Save changes
    </Button> */}


  </DialogActions>
</BootstrapDialog>


</Grid>
   </div>
  );
};

export default CepTel;
