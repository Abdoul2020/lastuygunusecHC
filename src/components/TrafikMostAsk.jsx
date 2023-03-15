import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";



//import css




// react mui here
import Searchbar from "./SearchbarQuestion";
import Question from "./Question";


const styles={}



const CarouselTrafik = (props) => {
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
  }, [searchTerm]);

  
  
  return (

   <Grid container>

    <Grid item xs={12} sm={12} md={12} lg={12}>

    <div style={{width:"100%", }}>
<div className='container'>
      <h2 className="heading">Trafik Sigortası Hakkında Sıkça Sorulan Sorular</h2>
      {/* <Searchbar onSearchChange={handleSearchChange}/>  */}
      <section className='faq'>
       {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
      </section>      
    </div>
    </div>


    </Grid>

   </Grid>
  );
};


CarouselTrafik.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(CarouselTrafik));
