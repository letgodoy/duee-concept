import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import './assets/sass/main.scss'
import Pic1 from './images/pic01.jpg'
import Pic2 from './images/pic02.jpg'


const SomosLeoes = () => (
    <Layout>
        <SEO title="Somos leões" />
        <div class="is-preload">
            {/* <!-- Header --> */}
            <section id="header" className="dark">
                <header>
                    <h1>DUEE BRASIL</h1>
                    <p>bla bla bla agencia</p>
                </header>
            </section>

            {/* <!-- First --> */}
            <section id="first" className="main">
                <div className="content style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 col-12-narrow">
                                <section>
                                    <h3>A GENTE FAZ.</h3>
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
                                </section>
                            </div>
                            <div className="col-4 col-12-narrow">
                                <div className="row">
                                    <div className="col-12 image fit"><img src={Pic1} alt="" /></div>
                                    <div className="col-12 image fit"><img src={Pic2} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>

            {/* <!-- Second --> */}
            <section id="second" className="main">
                <div className="content dark style2">
                    <div className="container">
                        <div className="row">
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
                </div>
            </section>

            {/* <!-- Third --> */}
            <section id="third" className="main">
                <div className="content style3 featured">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>NOSSO TRABALHO</h3>
                            </div>
                            <div className="col-4 col-12-narrow">
                                <section>
                                    <span className="feature-icon"><span className="icon fa-clock"></span></span>
                                    <header>
                                        <h3>LIVE MKT</h3>
                                    </header>
                                    <ul class="default">
                                        <li>Ativações de marca</li>
                                        <li>Eventos</li>
                                        <li>Feiras e estandes</li>
                                        <li>Lançamentos</li>
                                        <li>Workshops e Convenções</li>
                                        <li>Cenografia</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-narrow">
                                <section>
                                    <span className="feature-icon"><span className="icon solid fa-bolt"></span></span>
                                    <header>
                                        <h3>PROMOÇÕES e TRADE</h3>
                                    </header>
                                    <ul class="default">
                                        <li>Ativações</li>
                                        <li>Degustação</li>
                                        <li>Ações PDV</li>
                                        <li>Promoções</li>
                                        <li>Campanhas de Incentivo e CRM</li>
                                        <li>Concursos culturais</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-narrow">
                                <section>
                                    <span className="feature-icon"><span className="icon solid fa-cloud"></span></span>
                                    <header>
                                        <h3>BRANDING</h3>
                                    </header>
                                    <ul class="default">
                                        <li>Planejamento Estratégico</li>
                                        <li>Posicionamento de marca</li>
                                        <li>Identidade visual</li>
                                        <li>Brand book</li>
                                        <li>Criação de conceitos</li>
                                        <li>Campanhas institucionais</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-narrow">
                                <section>
                                    <span className="feature-icon"><span className="icon solid fa-cloud"></span></span>
                                    <header>
                                        <h3>DIGITAL</h3>
                                    </header>
                                    <ul class="default">
                                        <li>Ativações online</li>
                                        <li>SEO & SEM</li>
                                        <li>Criação e conteúdos digitais</li>
                                        <li>Monitoramento e compra de mídia</li>
                                        <li>Estratégia em redes sociais e conteúdo</li>
                                        <li>Inbound Marketing</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-narrow">
                                <section>
                                    <span className="feature-icon"><span className="icon solid fa-cloud"></span></span>
                                    <header>
                                        <h3>DESENVOLVIMENTO</h3>
                                    </header>
                                    <ul class="default">
                                        <li>Desenvolvimento Sites e Hotsites</li>
                                        <li>Criação Aplicativos</li>
                                        <li>Desenvolvimento Mobile</li>
                                        <li>Sistema Web</li>
                                        <li>Aplicativos p/ redes sociais</li>
                                        <li>Sistemas CRM</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Fourth --> */}
            <section id="fourth" class="main">
                <div class="content featured">
                    <div class="container medium">
                        <ul className="icons">
                            <li>lista das redes</li>
                            <li>sociais</li>
                            {/* <li><a href="https://twitter.com" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://twitter.com" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="https://twitter.com" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li> */}
                        </ul>
                    </div>
                </div>
            </section>

        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SomosLeoes