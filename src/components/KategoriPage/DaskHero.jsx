import React, {useState, useEffect} from 'react';
import Typed from 'react-typed';
import { Grid } from "@mui/material";


import heroImage from "../../assets/newImage/seyehat-sigortasi.svg";
import traffic from "../../assets/newImage/trafik-sigortasi.svg";
import kaskoImage from "../../assets/producthero/productHeroNew/01-deprem.svg";




import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


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






const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};







const items = [
  <div className="item" data-value="1" >

        <img src={heroImage} alt="uygunusec"  />
      
  </div>,
  <div className="item" data-value="2" >  
 <div>
  <img src={traffic} alt="uygunusec" />
 </div>

</div>,
  <div className="item" data-value="3" >  

  <div>
    <img src={heroImage} alt="uygunusec" />
  </div>

</div>,
  
];


const onInitialized = (e) => {
  console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
  console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
  console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
  console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};





const DaskHero = () => {

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
   <Grid container  className='heroHead'>

    <Grid item   xs={12} sm={12} md={6} lg={6}>
    <div className='text-black'>
      <div className='max-w-[800px]  w-full h-screen  flex flex-col justify-center'>

        {/* <p className='text-[#00df9a] font-bold p-2'>
          UYGUNUSEC
        </p> */}


        <h1 className=' md:py-4  text-xs font-bold'>
          uygunusec.com ile
        </h1>

        <div className='flex items-center'>

            <span  className='md:text-5xl sm:text-4xl text-xl font-bold '>

            DASK
            </span>


        </div>

        {/* <div className='flex items-center'>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold '
            strings={['Seyahat Sigortası', 'Kasko', 'Trafik Sigortası']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> 
        </div> */}
        <p  className='md:py-4'>

        Siz Keyfinize Bakın Geleceğinize Sigortanız Baksın!!!

          </p>

        <button className='bg-[#1c7b17] w-[200px] rounded-md font-medium my-6  py-3 text-black teklifAlBut' onClick={()=>handleClickOpen()}>Teklif Al</button>

      </div>
    </div>


    </Grid>


    <Grid item xs={12} sm={12} md={6} lg={6} className="text-black ">

     <Grid container>
      <Grid itme xs={12} md={12} sm={12} lg={12} className="HeroSection-carousel">

      {/* <AliceCarousel
autoPlay
autoPlayControls
autoPlayStrategy="none"
autoPlayInterval={5000}
animationDuration={1200}
animationType="fadeout"
infinite
touchTracking={true}
disableDotsControls
disableButtonsControls

    mouseTracking
    keyboardNavigation
    items={items}
    responsive={responsive}
    onInitialized={onInitialized}
    onSlideChange={onSlideChange}
    onSlideChanged={onSlideChanged}
    onResized={onResized}


    
/> */}


<img src={kaskoImage} alt="" />


      </Grid>

     </Grid>

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
  );
};

export default DaskHero;