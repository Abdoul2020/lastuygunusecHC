import React,{useEffect} from 'react'
import AskMostQuest from './AskMostQuest'
import Cards from './Cards'
import Carousel from './Carousel/Carousel'
import Hero from './Hero'
import PartnerCompany from './PartnerCompany'
import ProductCarousel from './ProductCarousel'
import ScrollFeatures from './ScrollFeatures'
import SearchBar from './SearchBar'
import {  useLocation } from "react-router-dom";


const Home = () => {

  const location = useLocation();


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
    

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    


  return (
    <div>
<Hero/>
{/* <SearchBar/> */}
{/* <ProductCarousel/> */}
{/* <Cards/> */}
<ScrollFeatures/>
<PartnerCompany/>
<Carousel/>
      <AskMostQuest data={questions}/>
    </div>
  )
}

export default Home
