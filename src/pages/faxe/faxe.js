import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './faxe.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Fundo from '../../images/faxe/map.png'
import Modal from '../../components/Modal/modal'
import Lata1 from '../../images/faxe/latas png/13179_FAXE_IPA_500CAN_DRY.png'
import Lata2 from '../../images/faxe/latas png/FAXE_8716_1000ml_Front.png'
import Lata3 from '../../images/faxe/latas png/FAXE_Premium_1000ml_Front.png'
import Lata4 from '../../images/faxe/latas png/FAXE_Royal_1000ml_Front.png'
import Lata5 from '../../images/faxe/latas png/FAXE_Witbier_3D_can_front_HIGH.png'
import Barco1 from '../../images/faxe/latas png/barco1.png'
import Barco2 from '../../images/faxe/latas png/barco2.png'
import Logofaxe from '../../images/home/FAXE-LOGO.svg'
import LogofaxeS from '../../images/home/FAXE-LOGO-sorrindo.svg'

import Story1 from '../../images/faxe/stories/STORIE_FINAL.mp4'
import Story2 from '../../images/faxe/stories/Storie.mp4'

import Post1 from '../../images/faxe/post/3_POST_FAXE_V1 2.mp4'
import Post2 from '../../images/faxe/post/3_POST_FAXE_V1.mp4'
import Post3 from '../../images/faxe/post/POST-2.mp4'
import Post4 from '../../images/faxe/post/Post 02.mp4'
import Post5 from '../../images/faxe/post/Post 07_V2.mp4'
import Post6 from '../../images/faxe/post/Post1.mp4'
import Post7 from '../../images/faxe/post/Post2.mp4'
import Post8 from '../../images/faxe/post/post2 2.mp4'
import Post9 from '../../images/faxe/post/post7-vid.mp4'

export default class Faxe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPI: false,
            showSI: false,
            showMO: false,
            showDS: false,
            showEM: false,
        }

        this.showModalPI = e => this.setState({ showPI: !this.state.showPI })
        this.showModalSI = e => this.setState({ showSI: !this.state.showSI })
        this.showModalMO = e => this.setState({ showMO: !this.state.showMO })
        this.showModalDS = e => this.setState({ showDS: !this.state.showDS })
        this.showModalEM = e => this.setState({ showEM: !this.state.showEM })

    }

        render() {
            const settings = {
                dots: false,
                infinite: true,
                // speed: 900,
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                accessibility: true,
                mobileFirst: true
            };
            return (
                <Layout>
                    <SEO title="Faxe" />
                    {/* <!-- First --> */}
                    <div className="row middle-xs center-xs" id="faxepage">
                        <div id='fundo'>
                            <img src={Fundo} alt="mapa" />

                            <div id='posts' onClick={this.showModalPI} className="floating">Posts Instagram</div>
                            <div id='stories' onClick={this.showModalSI} className="floating">Stories Instagram</div>
                            <div id='making' onClick={this.showModalMO} className="floating">Making Of Happy<br/>Hour Viking</div>
                            <div id='dinner' onClick={this.showModalDS} className="floating">Dinner in the Sky</div>
                            <div id='embal' onClick={this.showModalEM} className="floating">Embalagem</div>

                            <div id='lata1' className="navegating"><img src={Lata1} alt="Faxe IPA" /></div>
                            <div id='lata2' className="navegating"><img src={Lata2} alt="Faxe 10%" /></div>
                            <div id='lata3' className="navegating"><img src={Lata3} alt="Faxe Premium" /></div>
                            <div id='lata4' className="navegating"><img src={Lata4} alt="Faxe Royal" /></div>
                            <div id='lata5' className="navegating"><img src={Lata5} alt="Faxe Witbier" /></div>
                            <div id='barco1' className="navegating"><img src={Barco1} alt="Barco Viking" /></div>
                            <div id='barco2' className="navegating"><img src={Barco2} alt="Barco Viking" /></div>

                            <div id='logo'><img src={Logofaxe} alt="Faxe" /></div>
                            <div id='logoS'><img src={LogofaxeS} alt="Faxe" /></div>


                        </div>
                        <Modal show={this.state.showPI} onClose={this.showModalPI} title='Posts Instagram'>
                            <section className='slides'>
                                <Slider {...settings}>
                                    <div className="storiesfx">
                                        <video src={Post1} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post2} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post3} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post4} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post5} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post6} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post7} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post8} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post9} autoplay={true} controls={true} />
                                    </div>
                                </Slider>
                            </section>
                        </Modal>
                        <Modal show={this.state.showSI} onClose={this.showModalSI} title='Stories Instagram'>
                            <section className='slides'>
                                <Slider {...settings}>
                                    <div className="storiesfx">
                                        <video src={Story1} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Story2} autoplay={true} controls={true} />
                                    </div>
                                </Slider>
                            </section>
                        </Modal>
                        <Modal show={this.state.showMO} onClose={this.showModalMO} title='Making Of Happy Hour Viking'>
                        <div id="makingvideo"><iframe src="https://player.vimeo.com/video/296450706" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="makingof"></iframe></div>
                        </Modal>
                        <Modal show={this.state.showDS} onClose={this.showModalDS} title='Dinner in the Sky'>
                            <section className='slides'>
                                <Slider {...settings}>
                                    <div className="storiesfx">
                                        <video src={Post1} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post2} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post3} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post4} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post5} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post6} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post7} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post8} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post9} autoplay={true} controls={true} />
                                    </div>
                                </Slider>
                            </section>
                        </Modal>
                        <Modal show={this.state.showEM} onClose={this.showModalEM} title='Embalagem'>
                            <section className='slides'>
                                <Slider {...settings}>
                                    <div className="storiesfx">
                                        <video src={Post1} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post2} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post3} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post4} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post5} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post6} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post7} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post8} autoplay={true} controls={true} />
                                    </div>
                                    <div className="storiesfx">
                                        <video src={Post9} autoplay={true} controls={true} />
                                    </div>
                                </Slider>
                            </section>
                        </Modal>
                    </div>
                </Layout >
            )
        }
    }