import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './faxe.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Fundo from '../../images/faxe/map.png'

import Post1 from '../../images/faxe/post/3_POST_FAXE_V1 2.mp4'
import Post2 from '../../images/faxe/post/3_POST_FAXE_V1.mp4'
import Post3 from '../../images/faxe/post/POST-2.mp4'
import Post4 from '../../images/faxe/post/Post 02.mp4'
import Post5 from '../../images/faxe/post/Post 07_V2.mp4'
import Post6 from '../../images/faxe/post/Post1.mp4'
import Post7 from '../../images/faxe/post/Post2.mp4'
import Post8 from '../../images/faxe/post/post2 2.mp4'
import Post9 from '../../images/faxe/post/post7-vid.mp4'


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


const Faxe = () => (
    <Layout>
        <SEO title="Faxe" />
        {/* <!-- First --> */}
        <div className="row middle-xs center-xs" id="faxepage">
            <div id='fundo'>
                <img src={Fundo} alt="mapa" />

                <div id='posts'>Posts Instagram</div>
                <div id='stories'>Stories Instagram</div>
                <div id='making'>Making Of</div>
                <div id='dinner'>Dinner in the Sky</div>
                <div id='embal'>Embalagem</div>

                
            </div>

            <section id='slidestories'>
                    <Slider {...settings}>
                        <div className="storiesfx">
                            <video src={Post1} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post2} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post3} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post4} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post5} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post6} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post7} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post8} autoplay={true} controls={true} loop={true} />
                        </div>
                        <div className="storiesfx">
                            <video src={Post9} autoplay={true} controls={true} loop={true} />
                        </div>
                    </Slider>
                </section>
        </div>
    </Layout >
)

export default Faxe