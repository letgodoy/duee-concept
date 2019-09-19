import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './made2.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import LogoMade from '../../images/made/Banner1.png'

import Img1 from '../../images/made/imgs/1.png'
import Img2 from '../../images/made/imgs/2017_11_KALA-LTP-SCC-6919.jpg'
import Img3 from '../../images/made/imgs/2017_11_KALA-LTP-SCC-6924.jpg'
import Img4 from '../../images/made/imgs/2017_11_KALA-LTP-SCC-6932.jpg'
import Img6 from '../../images/made/imgs/Aproximacao_Guitarra.MP4'
import Img7 from '../../images/made/imgs/BAT_1.png'
import Img8 from '../../images/made/imgs/B_4.png'
import Img9 from '../../images/made/imgs/Blog1.png'
import Img11 from '../../images/made/imgs/CARROSSEL_VIOLAO_I_02.JPG'
import Img12 from '../../images/made/imgs/Carrossel_Guitarra_03.jpg'
import Img13 from '../../images/made/imgs/Carrossel_Guitarra_04.jpg'
import Img14 from '../../images/made/imgs/Carrossel_Guitarra_05.jpg'
import Img15 from '../../images/made/imgs/Case_Violao.MP4'
import Img16 from '../../images/made/imgs/Chello.MP4'
import Img17 from '../../images/made/imgs/Composicao_03.jpg'
import Img18 from '../../images/made/imgs/Cordas.MOV'
import Img19 from '../../images/made/imgs/CorreiaKiss.png'
import Img20 from '../../images/made/imgs/EMKT-LUTHIERIA.png'
import Img21 from '../../images/made/imgs/FenderJimiHendrix.png'
import Img22 from '../../images/made/imgs/IMG_3092.jpg'
import Img23 from '../../images/made/imgs/IMG_3145.jpg'
import Img24 from '../../images/made/imgs/IMG_3545.jpg'
import Img25 from '../../images/made/imgs/IMG_7981-1.png'
import Img26 from '../../images/made/imgs/Ilha_Fender.MP4'
import Img27 from '../../images/made/imgs/Kala2.png'
import Img28 from '../../images/made/imgs/LIU_2.png'
import Img29 from '../../images/made/imgs/Luthier_01.jpg'
import Img30 from '../../images/made/imgs/Luthier_02.jpg'
import Img31 from '../../images/made/imgs/Luthier_05.jpg'
import Img32 from '../../images/made/imgs/Luthier_07.jpg'
import Img33 from '../../images/made/imgs/Luthier_08.jpg'
import Img34 from '../../images/made/imgs/M_2.png'
import Img35 from '../../images/made/imgs/M_3.png'
import Img36 from '../../images/made/imgs/Microfones.MP4'
import Img37 from '../../images/made/imgs/PRATOS_DIR.JPG'
import Img38 from '../../images/made/imgs/Pads.MP4'
import Img39 from '../../images/made/imgs/Pedais.MP4'
import Img40 from '../../images/made/imgs/Pilha.MP4'
import Img41 from '../../images/made/imgs/Post.mp4'
import Img42 from '../../images/made/imgs/Post1.png'
import Img43 from '../../images/made/imgs/Post4.png'
import Img44 from '../../images/made/imgs/Post8.png'
import Img45 from '../../images/made/imgs/Review Baixo Squier Precision 50.mp4'
import Img46 from '../../images/made/imgs/Set_Gaitas.MP4'
import Img47 from '../../images/made/imgs/Zoom_loja_V2.mp4'
import Img48 from '../../images/made/imgs/Zoom_violao_V2.mp4'
import Img49 from '../../images/made/imgs/caixas.jpg'
import Img50 from '../../images/made/imgs/encordoamentoretro.png'

export default class Made extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Made In Brazil" />
                <div className="middle-xs center-xs" id="madepage2">
                    <header>
                        <img src={LogoMade} alt="Logo Made in Brazil" />
                        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:e4andqtcxjiik8wlcyns8sbue&size=detail&theme=dark" width="240" height="56" frameborder="0" allowtransparency="true"></iframe>
                    </header>
                    <div className="row col-xs-12 center-xs playlistas">
                    <iframe src="https://open.spotify.com/embed/playlist/68LglzhL6afHlY0D877XXw" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist1"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/6euNX0DQ8V0iyJxMuqQZn5" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist2"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/3AXlUoMZPdQBHcBQG8J9ut" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist3"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/4OjqDsSaQRQQyqozzD7Csw" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist4"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/3AD3DKHsILTPXpbkDGtVmp" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist5"></iframe>
                    </div>
                    <div className="row col-xs-12 makingof">
                    <iframe src="https://player.vimeo.com/video/340465615" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                    <div className="row col-xs-12">
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1700: 5 }}>
                            <Masonry>
                                {/* <video src={Post1} autoPlay={true} mute controls={true} className="material" /> */}
                                {/* <img src={Img19} alt="conteudo faxe" className="material" /> */}
                                <img src={Img1} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img2} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img3} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img4} alt="conteudo madeinbrazil" className="material" />
                                {/* <video src={Img5} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" /> */}
                                <video src={Img6} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img7} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img8} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img9} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img10} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img11} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img12} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img13} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img14} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img15} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img16} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img17} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img18} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img19} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img20} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img21} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img22} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img23} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img24} alt="conteudo madeinbrazil" className="material" />
                                {/* <img src={Img25} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img26} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img27} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img28} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img29} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img30} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img31} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img32} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img33} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img34} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img35} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img36} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img37} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img38} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img39} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img40} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img41} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img42} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img43} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img44} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img45} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img46} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img47} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <video src={Img48} controls={true} autoPlay={true} mute={true} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img49} alt="conteudo madeinbrazil" className="material" />
                                <img src={Img50} alt="conteudo madeinbrazil" className="material" /> */}


                            </Masonry>
                        </ResponsiveMasonry>
                    </div>

                    {/* <div><iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:e4andqtcxjiik8wlcyns8sbue&size=detail&theme=dark" width="300" height="56" frameborder="0" style="border:none;" allowtransparency="true"></iframe></div> */}
                    
                </div>
            </Layout >
        )
    }
}