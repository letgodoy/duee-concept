import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './starbucks.scss'
import InstaPost from '../../components/instaPost/instaPost'
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import HorizontalScroll from 'react-scroll-horizontal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Sereia from '../../images/starbucks/starbucks-coffee-logo-vector.svg'
import Instagram from '../../images/starbucks/Instagram_logo.svg'
import envelopeup from '../../images/starbucks/envelope-up.svg'
import envelope from '../../images/starbucks/envelope.svg'
import moto from '../../images/starbucks/motorcycle_8861_rappi.png'

import Rappi1 from '../../images/starbucks/Rappi/Banner-App-Starbucks-Rappi-V2.png'
import Rappi2 from '../../images/starbucks/Rappi/Banner-App-Starbucks-Rappi_V2.png'
import Rappi3 from '../../images/starbucks/Rappi/Banner-Web-Starbucks-Rappi-V1.png'
import Rappi4 from '../../images/starbucks/Rappi/InAPP Starbucks_V2.png'
import Rappi5 from '../../images/starbucks/Rappi/pdq_870x360_t.png'

import Mail1 from '../../images/starbucks/Email Marketing/07-12-DE-MAIO.png'
import Mail2 from '../../images/starbucks/Email Marketing/11-DE-ABRIL.png'
import Mail3 from '../../images/starbucks/Email Marketing/23-28-DE-ABRIL.png'
import Mail4 from '../../images/starbucks/Email Marketing/26-28-DE-ABRIL.png'
import Mail5 from '../../images/starbucks/Email Marketing/30-05-DE-MAIO.png'

import Post1 from '../../images/starbucks/Posts/13.12_post-feed-starbucks-1080x1080.mp4'
import Post2 from '../../images/starbucks/Posts/26_03.png'
import Post3 from '../../images/starbucks/Posts/DarkPost.png'
import Post4 from '../../images/starbucks/Posts/SBUX_FRAP_MORANGO_V4.mp4'
import Post5 from '../../images/starbucks/Posts/Starbucks-Post-11-abril.png'
import Post6 from '../../images/starbucks/Posts/post_doublestars_final.mp4'

import Story1 from '../../images/starbucks/Stories/01-mp4.mp4'
import Story2 from '../../images/starbucks/Stories/1-4_SBUX_STORIES_FRAP_MORANGO_V2.mp4'
import Story3 from '../../images/starbucks/Stories/STORIES_V2.mp4'
import Story4 from '../../images/starbucks/Stories/Stories-Chai-V1.gif'
import Story5 from '../../images/starbucks/Stories/Stories-Dia-das-Maes.gif'
import Story6 from '../../images/starbucks/Stories/Stories-Starbucks-Berinjela-5.png'

var settings = {
    dots: false,
    infinite: true,
    // speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    accessibility: true,
    mobileFirst: true
};


const Starbucks = () => (
    <Layout>
        <SEO title="Starbucks" />
        {/* <!-- First --> */}
        <div className="row middle-xs" id="starbuckspage">
            <div className="col-xs-12 row center-xs" id="headstarbucks">
                <div className="col-xs-12">
                    <div className="fixo">
                        {/* <img src={Logo} alt="starbucks" /> */}
                        <img src={Sereia} alt="starbuckslogo" className="move" />
                    </div>

                </div>
            </div>
            <div className="col-xs-12 row" id="rappi">
                <HorizontalScroll pageLock="true" reverseScroll="true">
                    <img src={Rappi1} alt="anuncio Rappi" />
                    <img src={Rappi2} alt="anuncio Rappi" />
                    <img src={Rappi3} alt="anuncio Rappi" />
                    <img src={Rappi4} alt="anuncio Rappi" />
                    <img src={Rappi5} alt="anuncio Rappi" />
                    <img src={moto} alt="anuncio Rappi" />
                </HorizontalScroll>
                {/* <img src={moto} alt="email marketing" className="mails" /> */}
            </div>
            <div className="col-xs-12 row" id="emailMkt">
                <img src={envelope} alt="email marketing" className="envelope" />
                <div className="hscroll">
                    {/* <HorizontalScroll pageLock="true" className="hscroll"> */}
                    <img src={Mail1} alt="email marketing" className="mails" />
                    <img src={Mail2} alt="email marketing" className="mails" />
                    <img src={Mail3} alt="email marketing" className="mails" />
                    <img src={Mail4} alt="email marketing" className="mails" />
                    <img src={Mail5} alt="email marketing" className="mails" />
                    {/* </HorizontalScroll> */}
                </div>
                <img src={envelopeup} alt="email marketing" className="envelope" />
            </div>
            <div className="col-xs-12 row center-xs" id="postInsta">
                <div className="headInsta">
                    <div>
                        <span>
                            <i class="fab fa-instagram"></i> | <img src={Instagram} alt="instagram" />
                        </span>
                    </div>
                </div>
                <div className="feedInsta middle-xs center-xs">
                    <InstaPost video={Post1} legenda="É momento mágico que chama? Chegou o Butter Frappuccino® * , inspirado na magia das histórias de mistério e aventura. Nossos magos criaram uma bebida cremosa, com nuts caramelizados e especiarias encantadas. Mas ela é tão secreta que só funciona se você pedir a um dos nossos bruxinhos de avental. Visite uma de nossas lojas e peça o seu! #ButterFrappuccino" />
                    <InstaPost foto={Post2} legenda="" />
                    <InstaPost foto={Post3} legenda="O Novo Triple Coffee é preparado com três ingredientes diferentes de café (espresso, chantilly e granulado), e você pode provar nas versões Frappuccino, Latte ou Espresso. Surpreenda-se três vezes com esse sabor ☕" />
                    <InstaPost video={Post4} legenda="" />
                    <InstaPost foto={Post5} legenda="" />
                    <InstaPost video={Post6} legenda="" />
                </div>
            </div>
            <div className="col-xs-12 row center-xs" id="storiesInsta">
                <div className="col-xs-12">
                    <div className="smartphone">
                        <div className="contentphone">
                            <Slider {...settings}>
                                <div className="display">
                                    <video src={Story1} autoplay={true} controls={true} loop={true} className="videoslider"/>
                                    {/* <h1>1</h1> */}
                                </div>
                                <div className="display">
                                    <video src={Story2} autoplay={true} controls={true} loop={true} className="videoslider" />
                                    {/* <h1>1</h1> */}
                                </div>
                                <div className="display">
                                    <video src={Story3} autoplay={true} controls={true} loop={true} className="videoslider" />
                                    {/* <h1>1</h1> */}
                                </div>
                                <div className="display">
                                    <img src={Story4} autoplay={true} className="videoslider" />
                                    {/* <h1>1</h1> */}
                                </div>
                                <div className="display">
                                    <img src={Story5} autoplay={true} className="videoslider" />
                                    {/* <h1>1</h1> */}
                                </div>
                                <div className="display">
                                    <img src={Story6} autoplay={true} className="videoslider" />
                                    {/* <h1>1</h1> */}
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-xs-12 row center-xs" id="pdv">
            <div className="col-xs-12">
                pdv
                    </div>
        </div> */}
        </div>
    </Layout >
)

export default Starbucks