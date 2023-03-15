import React, {useEffect} from "react";
import { Grid } from "@mui/material";
import $ from "jquery";
import FormTransfer from "../FormTeklif/FormTransfer";
import kaskoImage from "../../assets/producthero/konut-sigortasi.svg";
import { partnerShipData } from "../data/PartnershipData";

import turkiyeSigorta from "../../assets/partnerLogo/turkiye-sigorta.png";
// import loactionShow from
import kaskocar from "../../assets/kasko/carInsurance.jpg";
import KonutMostAsk from "../KonutMostAsk";
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
import KonutSigHero from "../KategoriPage/KonutSigHero";

import answer from "../../assets/producthero/productHeroNew/konut-sigortasi-nedir.svg";
import price from "../../assets/producthero/productHeroNew/konut-sigortasi-nasil-hesaplanir.svg";






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



const KonutSigort = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const questions = [
    {
      id: 1,
      question: 'Kişisel Bilgilerim?',
      answer: 'Her türlü sigortalama işleminde kullanılmak üzere işlemi yaptıran ve sigortalanacak ürünün- sahibinin kişisel bilgileri ( TC no, Adı ve Soyadı, Ödeme yöntemine bağlı olarak (Kredi Kartı Bilgileri, nakit havale vb.) kullanılır ve imha edilir.',
    },
      {
      id: 2,
      question: 'Poliçe yapılan indirim nedir?',
      answer: 'Faaliyet gösteren Sigorta şirketlerinin belirlediği, değişkenlik gösteren ürünler için; poliçe fiyatı üzerinden, bazen ilave promosyonlar ile müşteriye özel indirimler uygulanmaktadır. Bu indirimler/promosyonlar  uygunusec.com ile müşteriye yansıtılmakta  olup bununla sınırlı olmaya bilmektedir. Ilave promosyonlar uygulanabilmekte. Satın alma aşamasında sigorta şirketinin belirlediği kampanyalar, indirim yapılan tutar uygunusec.com tarafından uygulanır. İlave promosyonlar ayrıca hesaplanır ve aktarılır.',
    },
      {
      id: 3,
      question: 'Kampanya nedir?',
      answer: 'Sigorta şirketleri ve acenteler veya sadece acentelerin müşteri memnuniyetini artırmak üzere yeni ve eski müşterilere sağlanan indirim vb. faydalardır.   Kampanya dan yararlanabilmek için dahil olduğu ürünü satın almak gerekir. Bir ürün için birden fazla kampanya dan yararlanılamaz.',
    },
        {
      id: 4,
      question: 'Poliçe seçiminde nelere dikkat etmeliyim?',
      answer: 'Poliçe seçiminde riskinize uygun teminat ve kapsamına dikkat edilmelidir. Risk ihtiva etmeyen kloz lar için ilave maddi yük altına girilmemelidir.  Sigorta şirketi/ Acenteniz ile iletişim kolaylığı seçme kriteri olarak öne çıkmaktadır.',
    },
    
  ]


  

  return (



    <div>

      <KonutSigHero/>

      <hr />





<Grid container >

     

{/* <Grid
  item
  xs={12}
  sm={12}
  md={12}
  lg={12}
  style={{ background: "#f0f0f0" }}
>
  <div>
    <FormTransfer />
  </div>
</Grid> */}

<Grid item xs={12} sm={12} md={12} lg={12}>
  <div>
    <article className="article group">
      <img className="image right" src={answer} alt="Image" />
      <section className="content">
        <h2 className="headline">Konut Sigortası Nedir?</h2>
        Her evin ihtiyacının farklı olduğunu biliyoruz. Evinizin sigortasını esnek yapımız ile size en uygun teminatları seçerek yaptırın. Teminatları seçme özgürlüğü ile Konut Sigortası teklifiniz İçin bizle iletişime geçebilirsiniz. <br />
Eviniz ve sevdikleriniz sizin için, siz de bizim için değerlisiniz. <br /> 
Konut Sigortası sayesinde evinizdeki hasarlardan, sağlık hizmetlerine kadar ihtiyaç duyduğunuz birçok konuda hasarlarınızı karşılayabilir ve hizmet alabilirsiniz. 


      </section>
    </article>

    <hr />

    <article className="article group">
      <img
        className="image left"
        src={price}
        alt="Image"
        style={{ float: "left", marginRight: "20px" }}
      />
      <section className="content">
        <h2 className="headline">Konut Sigortası Fiyatları Nasıl Hesaplanır?</h2>
       
        Hesaplama; taşınmazın bulunduğu şehir, alansal olarak büyüklük, semt ve sigortalanmak istenen kapsam vb. değişkenlere göre hesaplanmaktadır. Sigorta şirketlerinden sizin için oluşturulan fiyatlar ve poliçe kapsamı için hemen irtibata geçebilirsiniz.
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
            <section className="content nasilAl"  style={{marginTop:"0"}}>
              <h2 className="headline">
                Konut Sigortası Teklifi Nasıl Alınır ?
              </h2>

              <div className='scrolly'>

<div className="floating-box ">

<div style={{display:"flex", gap:"12px"}}>

<div className="floating-box__number ">1</div>
                              <div className="floating-box__title">Bilgilerini Gir</div>

</div>
                             
                              <div className="floating-box__description ">
                              Sana özel zorunlu trafik sigortası tekliflerini görüntüleyebilmek için araç ve kullanıcı bilgilerini gir.
                              </div>




                              <div style={{display:"flex", gap:"12px"}}>

<div className="floating-box__number ">2</div>
                            <div className="floating-box__title"> Karşılaştırma</div>

</div>
                           
                            <div className="floating-box__description ">
                            20’den fazla sigorta şirketinin trafik sigortası teklifini aynı anda karşılaştır, ihtiyacına en uygun araç sigortasını 2 dakikada bul!
                            </div>



                            <div style={{display:"flex", gap:"12px"}}>

<div className="floating-box__number ">3</div>
                            <div className="floating-box__title"> Satın Al</div>

</div>
                           
                            <div className="floating-box__description ">
                           uygunusec bu
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

<Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"50px"}}>


  <KonutMostAsk  data={questions}/>

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

export default KonutSigort;
