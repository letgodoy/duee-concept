import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './somosleoes.scss'
import Faz from '../../images/a_gente_faz_400x400.jpg'
import Brand from '../../images/Elementos Digitais Branding.svg'
import Dev from '../../images/Elementos Digitais Desenvolvimento.svg'
import Digital from '../../images/Elementos Digitais Digital.svg'
import Eventos from '../../images/Elementos Digitais Eventos.svg'
import Live from '../../images/Elementos Digitais Live Marketing.svg'


const SomosLeoes = () => (
    <Layout>
        <SEO title="Somos leões" />
        {/* <!-- Header --> */}
        <div id="header" className="headervideo">
            <div>
            </div>
        </div>
        <video id="video" className="video" controls autoplay="autoplay">
            <source src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2FDUEE_COMPLETO.mp4?alt=media&token=551c33ba-9d03-495b-b040-90c15394e7d7" type="video/mp4" />
            Your browser does not support HTML5 video.
</video>

        {/* <!-- First --> */}
        <div className="row" id="gentefaz">
            <div className="col-md-5 col-sm-12 noPadding">
                <div className="image fit genteFaz"><img src={Faz} alt="A Gente Faz." /></div>
            </div>
            <div className="col-md-7 col-sm-12 noPadding">
                <p>A Duee é uma agência full service, que preza pela comunicação integrada, porque sabe que o mundo não se divide em on e off. Não criamos apenas conteúdos e campanhas,
                                        nós geramos ideias e conexões.</p>
                <p>Nós somos uma agência que acredita que o trabalho está em constante movimento. Por isso, estamos sempre atentos às novidades, ao público,
                                        às revoluções e novas ideias.</p>
                <p>É por meio de nossa paixão, criatividade e estratégias que ajudamos marcas a terem retornos eficientes, se tornarem relevantes e atingirem grandes resultados.</p>
                <p>O conceito A Gente Faz traduz  a nossa experiência de 11 anos, nosso espírito de equipe e de proatividade. É o reflexo do nosso posicionamento como agência 360 graus.
                                            A gente faz criativo. A gente faz diferente. A gente faz inteligente.</p>
                <p>Eventos? A gente faz.</p>
                <p>Digital? A gente faz.</p>
                <p>Branding? A gente faz.</p>
            </div>
        </div>

        {/* <!-- Second --> */}
        <section id="two" className="main style2">
            <div className="container">
                <div className="row gtr-150">
                    <div className="col-12">
                        <section className="text-center">
                            <h3>SOMOS LEÕES</h3>
                            <h3>Rugimos bem alto para que todos possam nos ouvir.</h3>
                            <h3>Defendemos nossas ideias, não temos medo de nos aventurar.</h3>
                            <h3>Somos ágeis, valentes, estrategistas e inquietos.</h3>
                            <h3>Estamos sempre nos desafiando e caçando oportunidades de fazer diferente.</h3>
                            <h3>Somos leões.</h3>
                        </section>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Third --> */}




        {/* Footer */}
        <section id="footer">
            <ul className="icons">
                <li><a href="https://www.facebook.com/agenciadueebrasil" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/dueebrasil" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="mailto:monalisa@dueebrasil.com.br" className="icon"><i className="far fa-envelope"></i></a></li>
            </ul>
        </section>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SomosLeoes