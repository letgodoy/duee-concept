import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './nossotrabalho.scss'
import Brand from '../../images/branding.svg'
import Dev from '../../images/desenvolvimento.svg'
import Digital from '../../images/digital.svg'
import Eventos from '../../images/eventospromo.svg'
import Live from '../../images/livemarketing.svg'
import Logo from '../../images/logo-gambi.png'


const NossoTrabalho = () => (
    <Layout>
        <SEO title="Somos leões" />
        {/* <!-- Fourth --> */}
        <div id="trabalho" className="custom-accordion">
            <div className="item">
                <div className="icon">
                    <img src={Live} className="img" alt="Live MKT" />
                    </div>
                <div className="title">
                    <div className="text"><h3>LIVE MKT</h3></div>
                </div>
                <div className="content">
                    <ul className="lista">
                        <li>Ativações de marca</li>
                        <li>Eventos</li>
                        <li>Feiras e estandes</li>
                        <li>Lançamentos</li>
                        <li>Workshops e Convenções</li>
                        <li>Cenografia</li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={Eventos} className="img" alt="PROMOÇÕES e TRADE" />
                    </div>
                <div className="title">
                    <div className="text"><h3>PROMOÇÕES e TRADE</h3></div>
                </div>
                <div className="content">
                    <ul className="lista">
                        <li>Ativações</li>
                        <li>Degustação</li>
                        <li>Ações PDV</li>
                        <li>Promoções</li>
                        <li>Campanhas de Incentivo e CRM</li>
                        <li>Concursos culturais</li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={Brand} className="img" alt="BRANDING" />
                    </div>
                <div className="title">
                    <div className="text"><h3>BRANDING</h3></div>
                </div>
                <div className="content">
                    <ul className="lista">
                        <li>Planejamento Estratégico</li>
                        <li>Posicionamento de marca</li>
                        <li>Identidade visual</li>
                        <li>Brand book</li>
                        <li>Criação de conceitos</li>
                        <li>Campanhas institucionais</li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={Digital} className="img" alt="DIGITAL" />
                    </div>
                <div className="title">
                    <div className="text"><h3>DIGITAL</h3></div>
                </div>
                <div className="content">
                    <ul className="lista">
                        <li>Ativações online</li>
                        <li>SEO & SEM</li>
                        <li>Criação e conteúdos digitais</li>
                        <li>Monitoramento e compra de mídia</li>
                        <li>Estratégia em redes sociais e conteúdo</li>
                        <li>Inbound Marketing</li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <img src={Dev} className="img" alt="DESENVOLVIMENTO" />
                    </div>
                <div className="title">
                    <div className="text"><h3>DESENVOLVIMENTO</h3></div>
                </div>
                <div className="content">
                    <ul className="lista">
                        <li>Desenvolvimento Sites e Hotsites</li>
                        <li>Criação Aplicativos</li>
                        <li>Desenvolvimento Mobile</li>
                        <li>Sistema Web</li>
                        <li>Aplicativos p/ redes sociais</li>
                        <li>Sistemas CRM</li>
                    </ul>
                </div>
            </div>
            <div class="item">
                {/* <div class="icon">7</div> */}
                <div class="title">A GENTE FAZ</div>
                <div class="content">
                    <div class="heart-icon"><img src={Logo} className="logo" alt="Duee Brasil" /></div>
                </div>
            </div>
        </div>
    </Layout >
)

export default NossoTrabalho