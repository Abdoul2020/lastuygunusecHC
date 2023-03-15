import React, {useState} from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import InfiniteCarousel from 'react-leaf-carousel';
import { Height } from "@mui/icons-material";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import healthecare from "../../assets/images/MenuKons/healthcare.gif"
import carArac from "../../assets/navbarKon/cararac.svg"
import evHouse from "../../assets/navbarKon/evHouse.svg"
import sagHealth from "../../assets/navbarKon/sagHealth.svg"

import FinanceBu from "../../assets/navbarKon/financeBu.svg"
import enerjiKon from "../../assets/navbarKon/enerjiKon.svg"








const styles = {
  menuKare: {
    justifyContent: "space-between",
    maxWidth: "400px",
    margin: "0 auto",
    background: "#f5f7f9",
    padding: "10px 10px 10px 10px",
  },
};



const Menu = (props ) => {






  const { classes } = props;

  const itemsLength = Array.from({ length: 5 });

const items = itemsLength.map((item, index) => {

    const style = { width: 270 , marginLeft:"5px",borderRadius:"20px" };

    return (<div className="item" style={style}>
      
      {/* {index + 1} */}

      {
        index===0 ? (

          <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12}>
          <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                  <Grid item  xs={12}  >

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                      <div style={{ marginTop:"auto", marginBottom:"auto"}}>
                      <h1>Araç sigortası</h1>
                      </div>
                      <div>
                        <img src={carArac}  alt=""  style={{maxWidth:"80px", maxHeight:"60px"}}/>
  
                      </div>
                    </div>
                  <br />
                   <Link to="/kasko" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                     <span > Kasko</span>
                   </Link>
                  
                   <Link to="/trafik-sigortasi" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Traffic Sigortası</span>
                   </Link>
                   
                   <Link to="" className="sigorta-item-name-null">
                   <span></span>
                   </Link><br />
                   <Link to="" className="sigorta-item-name-null">
  
  <span></span>

  </Link><br />
  <Link to="" className="sigorta-item-name-null">
  
  <span></span>

  </Link><br />
                  </Grid>
                </Grid>
          </Grid>
          
  
        </Grid>

        ): index===1 ?(
          <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12}>
          <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                  <Grid item  xs={12}  >
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                      <div style={{marginTop:"auto", marginBottom:"auto"}}>
                      <h1>Evim Ve Eşyalarım</h1>
                      </div>
                      <div>
                        <img src={evHouse} alt=""  style={{maxWidth:"80px", maxHeight:"60px"}}/>
  
                      </div>
                    </div>
                  <br />
                   <Link to="/dask" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> DASK</span>
                   </Link>
                  
                   <Link to="/konut-sigortasi" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                   <span>Konut Sigortası</span>
                   </Link>
                   
                   <Link to="/evim-guvende" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                   <span>Evim Güvende</span>
                   </Link>
                  
                   <Link to="/cep-telefonum-guvende" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Cep Telefonum Güvende</span>
                   </Link>

                   <Link to="/cep-telefonum-guvende"   className="sigorta-item-name-null"  >
                   <span></span>
                   </Link><br />
                   
                  </Grid>
                </Grid>
          </Grid>

          
          
  
        </Grid>
        ): index==2 ?(
          <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12}>
          <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                  <Grid item  xs={12}  >
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <div style={{marginTop:"auto", marginBottom:"auto"}}>
                      <h1>Sağlığım</h1>
                      </div>
                      <div>
                        <img src={sagHealth} alt=""  style={{maxWidth:"80px", maxHeight:"60px"}}/>
  
                      </div>
                    </div>
                  <br />
                   <Link to="/tamamlayici-saglik-sigortasi" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Tamamlayıcı Sağlık</span>
                   </Link>
                   
                   <Link to="/ozel-saglik-sigortasi" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
  
                  <span> Özel Sağlık </span>
  
                   </Link>
                   
                   <Link to="/vize-seyahat-sigortasi" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Vize ve Seyahat Sigortası</span>
                   </Link>
                   <Link to="/yabancilar-saglik-sigortasi" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                 <span> Yabancılar Sağlık </span>
                   </Link>
                   <Link to="" className="sigorta-item-name-null">
  
  <span></span>

  </Link><br />
                  </Grid>
                </Grid>
          </Grid>
          
  
        </Grid>
        ): index===3 ?(
          <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12}>
          <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                  <Grid item  xs={12}  >
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <div style={{marginTop:"auto", marginBottom:"auto"}}>
                      <h1>Finansal</h1>
                      </div>
                      <div>
                        <img src={FinanceBu} alt="" style={{maxWidth:"80px", maxHeight:"60px"}} />
  
                      </div>
                    </div>
                  <br />
                   <Link to="/kefalet-sigortasi" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Kefalet Sigortası</span>
                   </Link>
                  
                   <Link to="/bina-tamamlama" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
  
                  <span> Bina Tamamlama</span>
  
                   </Link>
                   
                   <Link to="/alacak-sigortasi" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Alacak Sigortası</span>
                   </Link>

                   <Link to="/police-prim-kredisi" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Poliçe Prim Kredisi</span>
                   </Link>
                   <Link to="" className="sigorta-item-name-null">
  
  <span></span>

  </Link><br />
                  </Grid>
                </Grid>
          </Grid>
          
  
        </Grid>
        ) : index===4 ? (

          <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12}>
          <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                  <Grid item  xs={12}  >
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <div style={{marginTop:"auto", marginBottom:"auto"}}>
                      <h1> Enerji Sigortaları</h1>
                      </div>
                      <div>
                        <img src={enerjiKon} alt="" style={{maxWidth:"80px", maxHeight:"60px"}} />
  
                      </div>
                    </div>
                  <br />
                   <Link to="/enerjisi-tesisi-kurulumu-isletim-sigortasi" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span>
                    Enerji Tesisi Kurulumu & İşletim Sigortası

                  </span>
                   </Link>
                  
                   <Link to="/insaat-tum-riskler-sigortasi" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
  
                  <span> İnşaat Tüm Riskler Sigortası </span>
  
                   </Link>
                   
                   <Link to="/montaj-tum-riskler" className="sigorta-item-name" onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Montaj Tüm Riskler </span>
                   </Link>

                   <Link to="/makine-kirilmasi-sigortasi" className="sigorta-item-name"  onClick={()=>{props.chooseMessage(false); console.log("hereYouara::")}}>
                  <span> Makine Kırılması Sigortası </span>
                   </Link>
                
                  </Grid>
                </Grid>
          </Grid>
          
        </Grid>

        ): (
          ""
        )

        
      }

     
    
    
    </div>);
});

const [activeIndex, setActiveIndex] = useState(0);
const slidePrev = () => setActiveIndex(activeIndex - 1);
const slideNext = () => setActiveIndex(activeIndex + 1);


  return (
    <div
      className={`${props.isVisible ? "block" : "hidden"} absolute   `}
      style={{
        right: "2.5rem",
        marginTop:"60px",
        width:"80%"
      }}
    >
      <div
        className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full"
        style={{ borderRadius: "10px" }}
      >
        
        {/* <SubMenu items={items} /> */}{" "}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}  className="products-alt-carousel">


          <AliceCarousel


animationType="fadeout"
infinite
touchTracking={true}
disableDotsControls
disableButtonsControls

        autoWidth  
        mouseTracking
        items={items}
        activeIndex={activeIndex}

    />
     <div className="b-refs-buttons">
            <button className="prev-top-slider arrow left" onClick={slidePrev} ></button>
            <button  className="next-top-slider arrow right" onClick={slideNext}></button>
        </div>
          </Grid>

        </Grid>{" "}

      </div>{" "}
    </div>
  );
};

Menu.protoTypes = {
  
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Menu);

{
  /* <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full altmenuPart">
                          <SubMenu items={items} />
                      </div> */
}
