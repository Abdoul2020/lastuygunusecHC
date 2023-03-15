import assset1 from "../../assets/kampaya/Asset 1.jpg"
import assset2 from "../../assets/kampaya/Asset 2.jpg"
import assset3 from "../../assets/kampaya/Asset 3.jpg"
import assset4 from "../../assets/kampaya/Asset 4.jpg"
import assset5 from "../../assets/kampaya/Asset 5.jpg"







export const data = [{
        title: ' Hediye Paketti',
        description: 'Kadın Sigortalılarımıza Uygunu Seç Hediye Paketti...',
        image: assset1,
    },
    {
        title: ' Kredisi desteği.  ',
        description: 'Konut ve Taşıt ihtiyacına , yönelik finansman kredisi desteği... ',
        image: assset2,
    },
    {
        title: 'Geleceğiniz Güvende',
        description: 'Kasko Poliçesi Yaptıran, 18—60 Yaş aralığı da geçerli olmak üzere,...',
        image: assset3,
    },
    {
        title: 'Kasko ve Trafik Poliçelerini ',
        description: 'Kasko ve Trafik Poliçelerini İLK kez Uygunu SEÇ i tercih edenlere...',
        image: assset4,
    },
    {
        title: 'Trafik sigortası',
        description: 'Trafik sigortasında çekici hizmeti UygunuSEÇ de devam ediyor....',
        image: assset5,
    },
];



export const sliderSettings = {

    arrows: false,
    slidesToShow: 3,
    focusOnselect: false,
    accessability: false,
    responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
            },
        },

        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};