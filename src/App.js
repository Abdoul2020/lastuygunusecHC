import React,{useState, useEffect} from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Analytics from './components/Analytics';
import AskMostQuest from './components/AskMostQuest';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import PartnerCompany from './components/PartnerCompany';
import ScrollFeatures from './components/ScrollFeatures';
import SearchBar from './components/SearchBar';
import TeklifAlForm from './components/TeklifAlForm';

import Carousel from './components/Carousel/Carousel'
import ProductCarousel from './components/ProductCarousel';
import CarInsuranceTeklif from './components/carInssurance/CarInsuranceTeklif';
import FormTransfer from './components/FormTeklif/FormTransfer'
import Home from './components/Home';
import About from './components/About';
import Kasko from './components/carInssurance/Kasko';
import Kampaya from './components/Kampaya';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import Trafik from './components/carInssurance/Trafik';
import Dask from './components/carInssurance/Dask';

import KonutSigort from './components/carInssurance/konutSigort';
import EvimGuven from './components/carInssurance/EvimGuven';
import CepTel from './components/carInssurance/CepTel';
import TamamSaglik from './components/carInssurance/TamamSaglik';
import OzelSaglik from './components/carInssurance/OzelSaglik';
import Seyahat from './components/carInssurance/Seyahat';
import YabanciSag from './components/carInssurance/YabanciSag';
import Kefalet from './components/carInssurance/Kefalet';
import BinaTamam from './components/carInssurance/BinanTamam';
import AlacakSigorta from './components/carInssurance/AlacakSigorta';
import PolicePrim from './components/carInssurance/PolicePrim';
import EnerjiTesisiKurlum from './components/carInssurance/EnerjiTesisKurulum';
import İnsaatTum from "./components/carInssurance/İnsaatTum";
import Montaj from './components/carInssurance/Montaj';
import Makine from './components/carInssurance/Makine';

import ServiceProvider from './components/SigortaOperations/ServisProvider';
import Admin from './components/AdminPage/Admin';
import KonutTasit from './components/TumKampanyaPage/KonutTasit';
import PageNotFound from './components/PageNotFound';
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie"; //cookies
import HeaderAdmin from './components/HeaderAdmin';
import HeaderServicep from './components/HeaderServicep';
import AdminUser from './components/AdminPage/AdminUser';


import RingLoader from "react-spinners/RingLoader";

import loadKons from "./assets/aboutKons/loadKons.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrafikHizmet from './components/TumKampanyaPage/TrafikHizmet';
import KaskoPpolice from './components/TumKampanyaPage/KaskoPolice';
import GelecekGuvende from './components/TumKampanyaPage/GelecekGuvende';
import KadinSigorta from './components/TumKampanyaPage/KadinSigorta';




//jwt time
//last changes made heer

const cookies = new Cookies();
const token = cookies.get("idToken");

console.log("cookiesteki token:", token);

if (token) {
  const decodedToken = jwtDecode(token);
  console.log("zaman var:", decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    // store.dispatch(logoutUser());

    // window.location.href = '/';
    console.log("zaman Bitti");
    cookies.remove("idToken");
  } else {
    

    console.log("daha zaman var");
  }
}



function App() {
  const location = useLocation();

  const [loading,setLoading]= useState(true)

  useEffect(() => {


    // setLoading(true);

    setTimeout((i)=>{
      console.log("Tieme::", i)
      setLoading(false)
    },5000);

  }, [loading])

  return (

    <div 
      className={ location.pathname==="/uygunusec-admin/users" ? `` : location.pathname==="/uygunusec-admin" ? `` :
      location.pathname==="/service-provider" ? `` : loading ? `loadingClass`:
      `allHoverTopMaxwidth`} >


        {
loading ?  (

  <div style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>

{/* <RingLoader
  color="#1c7b17"
  loading={loading}
  size={50}
  aria-label="Loading Spinner"
  data-testid="loader"/> */}


<img src={loadKons} alt="uygunsec" />



  <span style={{color:"black"}}>
    Yükleniyor...
  </span>

  </div>
) :(

  <div>
     {
        location.pathname==="/page/404" ? (""): location.pathname === "/uygunusec-admin" ? (

          <HeaderAdmin />

        ): location.pathname === "/uygunusec-admin/users" ? (<HeaderAdmin />) : location.pathname === "/service-provider" ? (

          <HeaderServicep />

        ) :(<Navbar />)

      }
      
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/page/hakkimizda" element={<About/>}  />
        <Route  path="/kasko" element={<Kasko/>} />
        <Route  path="/kampanyalar"  element={<Kampaya/>} />
        <Route  path="/login"  element={<LoginPage/>} />
        <Route path='/page/iletisim' element={<ContactPage/>}/>
        <Route path='/trafik-sigortasi' element={<Trafik/>}/>
        <Route path='/dask' element={<Dask/>}/>
        <Route path='/konut-sigortasi' element={<KonutSigort/>}/>
        <Route path='/evim-guvende' element={<EvimGuven/>}/>
        <Route path='/cep-telefonum-guvende' element={<CepTel/>}/>
        <Route path='/tamamlayici-saglik-sigortasi' element={<TamamSaglik/>}/>
        <Route path='/ozel-saglik-sigortasi' element={<OzelSaglik/>}/>
        <Route path='/vize-seyahat-sigortasi' element={<Seyahat/>}/>
        <Route path='/yabancilar-saglik-sigortasi' element={<YabanciSag/>}/>
        <Route path='/kefalet-sigortasi' element={<Kefalet/>}/>
        <Route path='/bina-tamamlama' element={<BinaTamam/>}/>
        <Route path='/alacak-sigortasi' element={<AlacakSigorta/>}/>
        <Route path='/police-prim-kredisi' element={<PolicePrim/>}/>
        <Route path='/enerjisi-tesisi-kurulumu-isletim-sigortasi' element={<EnerjiTesisiKurlum/>}/>
        <Route path='/insaat-tum-riskler-sigortasi' element={<İnsaatTum/>}/>
        <Route path='/montaj-tum-riskler' element={<Montaj/>}/>
        <Route path='/makine-kirilmasi-sigortasi' element={<Makine/>}/>
        <Route path='/service-provider' element={<ServiceProvider/>}/>
        <Route path='/uygunusec-admin' element={<Admin/>}/>
        <Route path='/kampanyalar/konut-tasit-kampayasi' element={<KonutTasit/>}/>
        <Route path='/kampanyalar/trafik-sigorta-cekici-hizmet' element={<TrafikHizmet/>}/>
        <Route path='/kampanyalar/kasko-trafik-police' element={<KaskoPpolice/>}/>
        <Route path='/kampanyalar/geleceginiz-guvende' element={<GelecekGuvende/>}/>
        <Route path='/kampanyalar/kadin-sigorta-uygunusec-hediye-paketi' element={<KadinSigorta/>}/>


        <Route path='/page/404' element={<PageNotFound/>}/>
        <Route path='/uygunusec-admin/users' element={<AdminUser/>}/>
      </Routes>

      <ToastContainer />

      {
        location.pathname==="/page/404" ? (""): location.pathname === "/uygunusec-admin" ? ("") : location.pathname === "/service-provider" ? null :
        location.pathname === "/uygunusec-admin/users" ? null :
        (<Footer />)
      }
  </div>


)

        }



     
      
    </div>
  );
}

export default App;
