import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './faxe2.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Logofaxe from '../../images/home/FAXE-LOGO.svg'
import { window } from 'browser-monads';

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

import Img1 from '../../images/faxe/img/Artboard 2.png'
import Img2 from '../../images/faxe/img/Artboard 3.png'
import Img3 from '../../images/faxe/img/POST-INSTAGRAM---10%.png'
import Img4 from '../../images/faxe/img/Post 1_V2.png'
import Img5 from '../../images/faxe/img/Post 3.png'
import Img6 from '../../images/faxe/img/Post 4.png'
import Img7 from '../../images/faxe/img/Post 5.png'
import Img11 from '../../images/faxe/img/Post-1.png'
import Img12 from '../../images/faxe/img/Post-3.png'
import Img13 from '../../images/faxe/img/Post-5.png'
import Img14 from '../../images/faxe/img/Post-6.png'
import Img15 from '../../images/faxe/img/Post-7.png'
import Img16 from '../../images/faxe/img/Post-7_V2.png'
import Img17 from '../../images/faxe/img/Post-Faxe-4.png'
import Img18 from '../../images/faxe/img/Post-Faxe-5.png'
import Img19 from '../../images/faxe/img/Post-Stories-1.png'
import Img21 from '../../images/faxe/img/Post3.png'
import Img25 from '../../images/faxe/img/Story_04_01.png'
import Img26 from '../../images/faxe/img/Story_04_02.png'
import Img28 from '../../images/faxe/img/Story_04_04.png'
import Img29 from '../../images/faxe/img/Story_04_05.png'
import Img30 from '../../images/faxe/img/Story_08.png'
import Img31 from '../../images/faxe/img/faxe-dia-internacional.png'
import Img32 from '../../images/faxe/img/post1.png'
import Img34 from '../../images/faxe/img/post2.png'
import Img36 from '../../images/faxe/img/post3 3.png'

import P0 from '../../images/faxe/parallax/p0-2.png'
import P1 from '../../images/faxe/parallax/p1.png'
import P2 from '../../images/faxe/parallax/p2.png'
import P3 from '../../images/faxe/parallax/p3.png'
import P4 from '../../images/faxe/parallax/p4.png'
import P5 from '../../images/faxe/parallax/p6-2.png'


export default class Faxe extends Component {

    render() {
        return (
            <Layout>
                <SEO title="Faxe" />
                {/* <!-- First --> */}
                <div className={`faxepage2 ${window.screen.height > window.screen.width ? 'portrait' : null}`} >
                        <img className="scene sky" src={P0} alt="landscape" />
                        <img className="scene" src={P1} alt="landscape" />
                        <img className="scene" src={P2} alt="landscape" />
                        <img className="scene logo" src={Logofaxe} alt="faxe" />
                        <img className="scene" src={P3} alt="landscape" />
                        <img className="scene" src={P4} alt="landscape" />
                        <img className="scene" src={P5} alt="landscape" />
                        <div className='scene conteudo row'>
                            <div className="row col-xs-12">
                                <iframe src="https://player.vimeo.com/video/296450706" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="making of" className="makingof"></iframe>
                            </div>
                            <div className="row col-xs-12">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1700: 5 }}>
                                    <Masonry>
                                        <video src={Post1} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img19} alt="conteudo faxe" className="material" />
                                        <img src={Img1} alt="conteudo faxe" className="material" />
                                        <video src={Post2} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img17} alt="conteudo faxe" className="material" />
                                        <img src={Img18} alt="conteudo faxe" className="material" />
                                        <img src={Img2} alt="conteudo faxe" className="material" />
                                        <video src={Post3} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img28} alt="conteudo faxe" className="material" />
                                        <img src={Img29} alt="conteudo faxe" className="material" />
                                        <img src={Img3} alt="conteudo faxe" className="material" />
                                        <video src={Story1} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img25} alt="conteudo faxe" className="material" />
                                        <img src={Img26} alt="conteudo faxe" className="material" />
                                        <img src={Img4} alt="conteudo faxe" className="material" />
                                        <video src={Post4} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img31} alt="conteudo faxe" className="material" />
                                        <img src={Img32} alt="conteudo faxe" className="material" />
                                        <video src={Post5} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img12} alt="conteudo faxe" className="material" />
                                        <img src={Img13} alt="conteudo faxe" className="material" />
                                        <video src={Post9} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img30} alt="conteudo faxe" className="material" />
                                        <img src={Img6} alt="conteudo faxe" className="material" />
                                        <video src={Post6} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img34} alt="conteudo faxe" className="material" />
                                        <img src={Img7} alt="conteudo faxe" className="material" />
                                        <img src={Img5} alt="conteudo faxe" className="material" />
                                        <video src={Post7} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img15} alt="conteudo faxe" className="material" />
                                        <img src={Img36} alt="conteudo faxe" className="material" />
                                        <video src={Post8} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img11} alt="conteudo faxe" className="material" />
                                        <img src={Img21} alt="conteudo faxe" className="material" />
                                        <video src={Story2} autoPlay={true} mute controls={true} className="material" />
                                        <img src={Img16} alt="conteudo faxe" className="material" />
                                        <img src={Img14} alt="conteudo faxe" className="material" />
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
                        </div>
                    </div>
            </Layout >
        )
    }
}