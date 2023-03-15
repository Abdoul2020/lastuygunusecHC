import React,{useEffect} from 'react'
import { Grid } from "@mui/material";
import asset2 from "../../assets/kampaya/Asset 1.jpg";

import { Link,useLocation } from "react-router-dom";



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

import AllTeklfiForm from '../formTekliff.jsx/AllTeklfiForm';





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






const KadinSigorta = () => {



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



  return (

    <div class="wrapper">
    <div class="main">
    <div className='kampaya-hear-title' style={{fontSize:"12px",lineHeight:"17px", letterSpacing: "-.01em" , cursor:"pointer", color:"#0e2e50"}}>
                    <h3>UygunuSec / Kampanyalar / Kadın Sigortalılarımıza Uygunuseç Hediye Paketti</h3>
                </div>

                <div className='text-2xl font-bold  pt-10 text-[#0e2e50] kampayaTitle'>
                    <h1>
                    Kadın Sigortalılarımıza Uygunu Seç Hediye Paketti
                    </h1>
                </div>

                <hr  style={{marginTop:"30px"}}/>



                <Grid container>

                <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"30px"}}>


<div className='about-image-text'>
  <div className='aboout-contentFrom'>

    <div>
      <img src={asset2} alt="" style={{borderRadius:"20px"}} />
    </div>

<div class="content kampayaSide"  style={{marginTop:"20px"}}>

<p>
Konut ve Taşıt ihtiyacına yönelik finansman kredisi desteği.
</p>

</div>

  </div>
</div>
</Grid>



<Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"30px"}}>


  <Grid container>

    <Grid item xs={12} sm={12} md={12} lg={12}  style={{textAlign:"center"}}>


    <button className='bg-[#1c7b17] w-[200px] rounded-md font-medium my-6  py-3 text-black teklifAlBut' onClick={()=>handleClickOpen()}>Teklif Al</button>

    </Grid>


  </Grid>
</Grid>

                </Grid>




    </div>
    <div class="sidebar">

      <Grid container>

        <Grid item xs={12} sm={12} md={12} lg={12}>

          <div className='text-xl font-bold   text-[#0c2c4f]' >
            Diğer Kampayanlar
          </div>

          <ul className='kampanyaSideBar'>

            <Link to="/kampanyalar/konut-tasit-kampayasi">
            <li >Konut ve Taşıt ihtiyacına yönelik finansman kredisi desteği.</li>
            </Link>
            
            <Link to="/kampanyalar/trafik-sigorta-cekici-hizmet">
            <li> Trafik sigortasında çekici hizmeti UygunuSEÇ de devam ediyor. </li>
            </Link>

            <Link to="/kampanyalar/kasko-trafik-police">
            <li> Kasko ve Trafik Poliçelerini İLK kez Uygunu SEÇ i tercih edenlere; </li>
            </Link>

            <Link to="/kampanyalar/geleceginiz-guvende">
            <li>“Geleceğiniz Uygunu SEÇ ile Güvende”</li>
            </Link>


            <Link to="/kampanyalar/kadin-sigorta-uygunusec-hediye-paketi">
            
            <li style={{ background: "#f2f7fd", borderRadius:"15px"}}>Kadın Sigortalılarımıza Uygunu Seç Hediye Paketti</li>
            </Link>
            
            
          </ul>

        </Grid>

        

      </Grid>


      
    </div>





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
  </div>
  )

}

export default KadinSigorta
