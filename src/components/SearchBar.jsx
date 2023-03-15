import React, {useState, useEffect} from 'react'
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";

import buttonIcon from "../assets/newImage/searchbar.svg"



const SearchBar = () => {
  return (
   <Grid container className='w-full bg-white py-16 px-4 formAlquick' style={{
    
    padding: "35px",
    visibility: "visible",
    animationDelay: "0.1s",
    animationName: "fadeIn"
   }}>

    {/* <Grid item xs={12} sm={12} md={12} lg={12} >
       

           
                <Grid container spacing={3}>
                    
                    <Grid item xs={12} sm={12} md={4} lg={4}>

                    <select className="form-select border-0">
                                    <option selected className='optionsearch'>Kategori Seçiniz</option>
                                    <option value="1" className='optionsearch'>Araç sigortası</option>
                                    <option value="2" className='optionsearch'>Sağlığım</option>
                                    <option value="3" className='optionsearch'>Finansal</option>
                                    <option value="3" className='optionsearch'>Evim Ve Eşylarım</option>
                                </select>

                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>

<select className="form-select border-0 ">
                <option selected className='optionsearch'>Property Type</option>
                <option value="1" className='optionsearch'>Property Type 1</option>
                <option value="2" className='optionsearch'>Property Type 2</option>
                <option value="3" className='optionsearch'>Property Type 3</option>
            </select>

</Grid>

<Grid item xs={12} sm={12} md={3} lg={3}>

                    <input type="text" className="form-control border-0 " placeholder="Anahtar Kelime Ara" />
                    

                    </Grid>


                    <Grid item xs={12} sm={12} md={1} lg={1}>
               

               <button className="btn btn-dark border-0 seechbar" style={{ width:"50px"  }}>
                <img src={buttonIcon} alt=""  style={{maxWidth:"20px", marginLeft:"auto", marginRight:"auto"}}/>
               </button>

           </Grid>

                </Grid>

    </Grid> */}

   </Grid>
  )
}

export default SearchBar
