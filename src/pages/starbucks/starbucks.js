import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './starbucks.scss'
import InstaPost from '../../components/instaPost/instaPost'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import HorizontalScroll from 'react-scroll-horizontal'


import Sereia from '../../images/starbucks/starbucks-coffee-logo-vector.svg'
import Instagram from '../../images/starbucks/Instagram_logo.svg'
import Post1 from '../../images/starbucks/Post-butter-frap-starbucks.png'
import Post2 from '../../images/starbucks/Post Triplo Mocha.mp4'
import Post3 from '../../images/starbucks/Post_V2.mp4'
import Post4 from '../../images/starbucks/SBUX_FRAP_MORANGO_V4.mp4'
import Post5 from '../../images/starbucks/DarkPost.png'
import Post6 from '../../images/starbucks/TEASER_V2_10.gif'
import envelopeup from '../../images/starbucks/envelope-up.svg'
import envelope from '../../images/starbucks/envelope.svg'



const Contato = () => (
    <Layout>
        <SEO title="Contato" />
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
            <div className="col-xs-12 row center-xs" id="rappi">
                <div className="col-xs-12">
                    <HorizontalScroll>

                    </HorizontalScroll>
                </div>
            </div>
            <div className="col-xs-12 row" id="emailMkt">
                    <img src={envelope} alt="email marketing" className="envelope" />
                    
                    <HorizontalScroll pageLock={true} animValues={1} className="hscroll">
                    <img src={Post1} alt="email marketing" className="mails" />
                    <img src={Post1} alt="email marketing" className="mails" />
                    <img src={Post1} alt="email marketing" className="mails" />
                    <img src={Post1} alt="email marketing" className="mails" />
                    <img src={Post1} alt="email marketing" className="mails" />
                    </HorizontalScroll>
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
                    <InstaPost foto={Post1} legenda="dghjshaghjsaghjasgdjs" />
                    {/* <InstaPost foto={Post2} legenda="dghjshaghjsaghjasgdjs" /> */}
                    {/* <InstaPost foto={Post3} legenda="dghjshaghjsaghjasgdjs" /> */}
                    {/* <InstaPost foto={Post4} legenda="dghjshaghjsaghjasgdjs" /> */}
                    <InstaPost foto={Post5} legenda="dghjshaghjsaghjasgdjs" />
                    <InstaPost foto={Post6} legenda="dghjshaghjsaghjasgdjs" />
                </div>
            </div>
            <div className="col-xs-12 row center-xs" id="storiesInsta">
                <div className="col-xs-12">
                    <div class="smartphone">
                        <div class="content">
                            <AwesomeSlider fillParent={true} bullets={false}>
                                <div data-src={Post2} autoplay />
                                <div data-src={Post3} autoplay />
                                <div data-src={Post4} autoplay />
                            </AwesomeSlider>
                            {/* <iframe src="/w3css/tryw3css_templates_band.htm" style="width:100%;border:none;height:100%" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 row center-xs" id="pdv">
                <div className="col-xs-12">
                    pdv
                    </div>
            </div>
        </div>
    </Layout>
)

export default Contato