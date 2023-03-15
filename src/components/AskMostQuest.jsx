import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";



//import css

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

import FormTo from "./SimpleForm/FormTo";




// react mui here
import Searchbar from "./SearchbarQuestion";
import Question from "./Question";






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


const styles={
  
  
}





const CarouselMain = (props) => {
  const { classes } = props;

  

  //useState here
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  //useEffect
  React.useEffect(() => {
    const results = props.data.filter(item=>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);

    console.log("seearchResul", results);

    if(results.length === 0){
      handleClickOpen()
    }

  }, [searchTerm]);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  
  return (

   <Grid container>

    <Grid item xs={12} sm={12} md={12} lg={12}>

    <div style={{width:"100%", }}>
<div className='container'>
      <h2 className="heading">UygunuSec.com Hakkında Merak Edilen</h2>
      <Searchbar onSearchChange={handleSearchChange}/> 
      <section className='faq'>
       {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
      </section>      
    </div>
    </div>


    </Grid>



    <BootstrapDialog
  onClose={handleClose}
  aria-labelledby="customized-dialog-title"
  open={open}

  style={{zIndex:"99999"}}
>
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

   Hızlı Soru Cevap
     
  </BootstrapDialogTitle>
  <DialogContent dividers>

    <div className="questionSoru">
    <FormTo />
    </div>

    

  </DialogContent>
  <DialogActions>


<Grid container>

</Grid>

    
  </DialogActions>
</BootstrapDialog>

   </Grid>
  );
};


CarouselMain.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(CarouselMain));
