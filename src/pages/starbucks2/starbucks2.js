import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './starbucks2.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import Sereia from '../../images/starbucks/starbucks-coffee-logo-vector.svg'

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

import Pdv1 from '../../images/starbucks/pdv/08_01.jpg'

const Starbucks = () => (
    <Layout>
        <SEO title="Starbucks" />
        {/* <!-- First --> */}
        <div className="row" id="starbuckspage2">
            <div className="col-xs-12 row center-xs" id="headstarbucks">
                <div className="col-xs-12">
                    <div className="fixo">
                        {/* <img src={Logo} alt="starbucks" /> */}
                        <img src={Sereia} alt="starbuckslogo" className="move" />
                    </div>
                </div>
            </div>
            <div className="row col-xs-12 col-sm-8 col-md-6 col-lg-5 description">
                        <p>A Starbucks é a maior franquia de cafeteria do mundo, conhecida pela excelência desde a colheita do café até a sua apresentação.</p>
                        <p>A sua comunicação deve ser uma extensão dessa excelência e, por isso, a Starbucks Brasil escolheu a DUEE para desenvolver parte dela.</p>
                        <p>Desenvolvemos a comunicação de PDV, fazemos material de endomarketing, cuidamos de campanhas de lançamentos de produtos, embalagens, conteúdos internos e damos suporte full service.</p>
                        <p>Aqui estão alguns dos melhores trabalhos em parceria com a Starbucks.</p>
                    </div>
            <div className="content row col-xs-12">
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1700: 5 }}>
                    <Masonry>
                        <img src={Rappi1} alt="anuncio Rappi" className="material" />
                        <img src={Post5} alt="post instagram" className="material" />
                        <img src={Mail4} alt="email marketing" className="material" />
                        <video src={Story3} autoplay={true} controls={true} loop={true} className="material" />
                        <img src={Post4} alt="post instagram" className="material" />
                        <img src={Rappi4} alt="anuncio Rappi" className="material" />
                        <img src={Post6} alt="post instagram" className="material" />
                        <img src={Mail3} alt="email marketing" className="material" />
                        <img src={Story4} autoplay={true} alt="story instagram" className="material" />
                        <img src={Post2} alt="post instagram" className="material" />
                        <img src={Rappi5} alt="anuncio Rappi" className="material" />
                        <video src={Story2} autoplay={true} controls={true} loop={true} className="material" />
                        <img src={Mail1} alt="email marketing" className="material" />
                        <img src={Mail5} alt="email marketing" className="material" />
                        <img src={Story5} autoplay={true} alt="story instagram" className="material" />
                        <img src={Post1} alt="post instagram" className="material" />
                        <img src={Rappi2} alt="anuncio Rappi" className="material" />
                        <video src={Story1} autoplay={true} controls={true} loop={true} className="material" />
                        <img src={Pdv1} alt="pdv" className="material" />
                        <img src={Post3} alt="post instagram" className="material" />
                        <img src={Mail2} alt="email marketing" className="material" />
                        <img src={Story6} autoplay={true} alt="story instagram" className="material" />
                        <img src={Rappi3} alt="anuncio Rappi" className="material" />
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    </Layout >
)

export default Starbucks