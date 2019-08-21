import React from "react"

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
        <div id="trabalho" className="row">
            <header className="col-md-2 col-sm-12 title">
                <h2>NOSSO TRABALHO</h2>
            </header>
            <div className="col-md-2 col-sm-12 strech">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={Live} className="img" alt="Live MKT" />
                            <br />
                            <h3>LIVE MKT</h3>
                        </div>
                        <div className="flip-box-back">
                            <ul className="">
                                <li>Ativações de marca</li>
                                <li>Eventos</li>
                                <li>Feiras e estandes</li>
                                <li>Lançamentos</li>
                                <li>Workshops e Convenções</li>
                                <li>Cenografia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-12">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={Eventos} className="img" alt="PROMOÇÕES e TRADE" />
                            <br />
                            <h3>PROMOÇÕES e TRADE</h3>
                        </div>
                        <div className="flip-box-back">
                            <ul className="">
                                <li>Ativações</li>
                                <li>Degustação</li>
                                <li>Ações PDV</li>
                                <li>Promoções</li>
                                <li>Campanhas de Incentivo e CRM</li>
                                <li>Concursos culturais</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-12">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={Brand} className="img" alt="BRANDING" />
                            <br />
                            <h3>BRANDING</h3>
                        </div>
                        <div className="flip-box-back">
                            <ul className="">
                                <li>Planejamento Estratégico</li>
                                <li>Posicionamento de marca</li>
                                <li>Identidade visual</li>
                                <li>Brand book</li>
                                <li>Criação de conceitos</li>
                                <li>Campanhas institucionais</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-12">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={Digital} className="img" alt="DIGITAL" />
                            <br />
                            <h3>DIGITAL</h3>
                        </div>
                        <div className="flip-box-back">
                            <ul className="">
                                <li>Ativações online</li>
                                <li>SEO & SEM</li>
                                <li>Criação e conteúdos digitais</li>
                                <li>Monitoramento e compra de mídia</li>
                                <li>Estratégia em redes sociais e conteúdo</li>
                                <li>Inbound Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-12">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={Dev} className="img" alt="DESENVOLVIMENTO" />
                            <br />
                            <h3>DESENVOLVIMENTO</h3>
                        </div>
                        <div className="flip-box-back">
                            <ul className="">
                                <li>Desenvolvimento Sites e Hotsites</li>
                                <li>Criação Aplicativos</li>
                                <li>Desenvolvimento Mobile</li>
                                <li>Sistema Web</li>
                                <li>Aplicativos p/ redes sociais</li>
                                <li>Sistemas CRM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default NossoTrabalho