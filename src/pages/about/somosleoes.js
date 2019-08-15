import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import './sass/main.scss'
import Pic1 from './images/pic01.jpg'


const SomosLeoes = () => (
    <Layout>
        <SEO title="Somos leões" />
        <div class="is-preload">
            {/* <!-- Header --> */}
            <section id="header">
                <div className="inner">
                    <span className="icon solid major"><i class="fab fa-linux"></i></span>
                    <h1><strong>DUEE</strong> BRASIL<br /></h1>
                    <p>bla bla bla agencia</p>
                    <ul class="actions special">
                        <li><a href="#one" className="button scrolly">Descubra?</a></li>
                    </ul>
                </div>
            </section>

            {/* <!-- First --> */}
            <section id="one" className="main style1">
                <div className="container">
                    <div className="row gtr-150">
                        <div className="col-7 col-12-medium">
                            <section>
                                <header class="major">
                                    <h2>A GENTE FAZ.</h2>
                                </header>
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
                        <div className="col-5 col-12-medium imp-medium">
                            <div className="row">
                                <div className="col-12 image fit"><img src={Pic1} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
            <section id="three" className="main style1 special">
            <div class="container">
					<div class="row gtr-150">
                    <iframe src="https://player.vimeo.com/video/251860230" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="apresentacao"></iframe>
					</div>
				</div>
                    
            </section>

            {/* <!-- Fourth --> */}
            <section id="four" class="main style2 special">
            <div className="container">
                    <header class="major">
						<h2>NOSSO TRABALHO</h2>
					</header>
                        <div className="row gtr-150">
                            <div className="col-4 col-12-medium">
                                <section>
                                    <span className="major icon"></span>
                                    <header>
                                        <h3>LIVE MKT</h3>
                                    </header>
                                    <ul className="actions stacked">
                                        <li>Ativações de marca</li>
                                        <li>Eventos</li>
                                        <li>Feiras e estandes</li>
                                        <li>Lançamentos</li>
                                        <li>Workshops e Convenções</li>
                                        <li>Cenografia</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                <span className="major icon"></span>
                                    <header>
                                        <h3>PROMOÇÕES e TRADE</h3>
                                    </header>
                                    <ul className="actions stacked">
                                        <li>Ativações</li>
                                        <li>Degustação</li>
                                        <li>Ações PDV</li>
                                        <li>Promoções</li>
                                        <li>Campanhas de Incentivo e CRM</li>
                                        <li>Concursos culturais</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                <span className="major icon"></span>
                                    <header>
                                        <h3>BRANDING</h3>
                                    </header>
                                    <ul className="actions stacked">
                                        <li>Planejamento Estratégico</li>
                                        <li>Posicionamento de marca</li>
                                        <li>Identidade visual</li>
                                        <li>Brand book</li>
                                        <li>Criação de conceitos</li>
                                        <li>Campanhas institucionais</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                <span className="major icon"></span>
                                    <header>
                                        <h3>DIGITAL</h3>
                                    </header>
                                    <ul className="actions stacked">
                                        <li>Ativações online</li>
                                        <li>SEO & SEM</li>
                                        <li>Criação e conteúdos digitais</li>
                                        <li>Monitoramento e compra de mídia</li>
                                        <li>Estratégia em redes sociais e conteúdo</li>
                                        <li>Inbound Marketing</li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                <span className="major icon"></span>
                                    <header>
                                        <h3>DESENVOLVIMENTO</h3>
                                    </header>
                                    <ul className="actions stacked">
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
			</section>

            {/* Footer */}
            <section id="footer">
				<ul class="icons">
					<li><a href="google.com" className="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="google.com" className="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
					<li><a href="google.com" className="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="google.com" className="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
					<li><a href="google.com" className="icon"><i class="far fa-envelope"></i></a></li>
				</ul>
			</section>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SomosLeoes