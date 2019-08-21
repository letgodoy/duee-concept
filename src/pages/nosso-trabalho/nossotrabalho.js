import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './nossotrabalho.scss'
import Brand from '../../images/branding.svg'
import Dev from '../../images/desenvolvimento.svg'
import Digital from '../../images/digital.svg'
import Eventos from '../../images/eventospromo.svg'
import Live from '../../images/livemarketing.svg'


const NossoTrabalho = () => (
    <Layout>
        <SEO title="Somos leões" />

            {/* <!-- Fourth --> */}
            <section id="four" className="main style2 special">
                <div className="container">
                    <header className="major">
                        <h2>NOSSO TRABALHO</h2>
                    </header>
                    <div className="row gtr-150">
                        <div className="col-4 col-12-medium">
                            <section>
                                <img src={Live} className="segmento" alt="Live MKT"/>
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
                                <img src={Eventos} className="segmento" alt="PROMOÇÕES e TRADE" />
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
                                <img src={Brand} className="segmento" alt="BRANDING" />
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
                                <img src={Digital} className="segmento" alt="DIGITAL" />
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
                                <img src={Dev} className="segmento" alt="DESENVOLVIMENTO" />
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
            <Link to="/">Go back to the homepage</Link>
    </Layout>
        )
        
export default NossoTrabalho