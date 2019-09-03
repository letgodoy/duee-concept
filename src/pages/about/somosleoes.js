import React from "react"
// import { Link } from "gatsby"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Layout from "../../components/layout/layout"
import News from "../../components/news/news"
import SEO from "../../components/seo"
import './somosleoes.scss'
import JovenPan from '../../images/noticias/logo_jovempan.jpg'
import Propmark from '../../images/noticias/logo_propmark.jpg'
import Blog from '../../images/noticias/logo_blog_fernando.jpg'
import Adonline from '../../images/noticias/logo_adonline.jpg'
import meiomsg from '../../images/noticias/logo_meio_mensagem.jpg'
import Grandes from '../../images/noticias/logos_AI.jpg'
import Promoview from '../../images/noticias/logos_AI2.jpg'
import Mundomkt from '../../images/noticias/logos_AI-1.jpg'
import Mkgpro from '../../images/noticias/logos_AI-2.jpg'
import Clientesa from '../../images/noticias/logo_clientesa.jpg'
import Proxxima from '../../images/noticias/logo_proxxima.jpg'
import Leaocolor from '../../images/Leão-Duee-color.png'
import Hashtag from '../../images/SOMOSLEOES.png'

import Trabalho from '../nosso-trabalho/nossotrabalho'


import { Collapse } from 'react-collapse';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class SomosLeoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNews: false,
            index: 0,
        }
    }

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };


    render() {
        return (
            <Layout>

                <SEO title="Somos leões" />
                {/* <!-- Header --> */}
                <div id="header" className="headervideo row middle-md top-xs end-xs">
                    <img src={Hashtag} alt="#somosleoes" />
                    <div className="col-xs-12">
                    </div>
                </div>
                {/* <video id="video" className="video" controls autoplay="autoplay">
                    <source src="https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2FDUEE_COMPLETO.mp4?alt=media&token=551c33ba-9d03-495b-b040-90c15394e7d7" type="video/mp4" />
                    Your browser does not support HTML5 video.
</video> */}
                <div className="row video" id="videoapresentacao">
                    <iframe src="https://player.vimeo.com/video/355173390" title="Duee Brasil" className="video col-xs-12" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>


                {/* <!-- First --> */}
                <div id="gentefaz" className="row">
                    <div className="row col-xs-12">
                        <div className="col-md-5 col-xs-12 box center-xs" id="resumo">
                            {/* <img src={gif} /> */}
                            <h2 className="LIVE">LIVE MKT</h2>
                            <h2 className="PROMO">PROMOÇÕES</h2>
                            <h2 className="BRAND">BRANDING</h2>
                            <h2 className="DIGITAL">DIGITAL</h2>
                            <h2 className="DEV">DESENVOLVIMENTO</h2>
                            <h1 className="glitchhover" value="A GENTE FAZ">A GENTE FAZ</h1>
                        </div>
                        <div className="col-md-7 col-xs-12" id="manifesto">
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
                </div>

                <div className="row end-xs middle-xs" id="versinho">
                    <div className="text slideDown col-xs-12 col-md-5">
                        <h2>SOMOS LEÕES</h2>
                        <h3>Rugimos bem alto para que todos possam nos ouvir.</h3>
                        <h3>Defendemos nossas ideias, não temos medo de nos aventurar.</h3>
                        <h3>Somos ágeis, valentes, estrategistas e inquietos.</h3>
                        <h3>Estamos sempre nos desafiando e caçando oportunidades de fazer diferente.</h3>
                        <h3>Somos leões.</h3>
                    </div>
                    <div className="col-xs-12 col-md-7 slideLeft">
                        <img src={Leaocolor} alt="Roar" className="lion" />
                    </div>
                </div>

                <Trabalho />

                <div id='news' className="row" >
                    <div className="col-xs-12 center-xs">
                        <button type='button' onClick={() => this.setState({ openNews: !this.state.openNews })}>Ver Mais</button>
                    </div>

                    <div className="col-xs-12 vermais center-xs">
                        <div className="row">
                            <Collapse isOpened={this.state.openNews}>

                                <div className="col-xs-12 depoimentos">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <h4>Depoimentos</h4>
                                        </div>

                                        <div className="col-xs-12 around-xs">
                                            <div className="row">
                                                <AutoPlaySwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
                                                    <div className="depo"><h5>“Os maiores diferenciais da Duee são principalmente a confiança, transparência e qualidade. A Duee é uma agência que preza pelo respeito com o cliente.”</h5>
                                                        <p><strong>Sandra Collier</strong></p>
                                                        <p>Gerente de Marketing, Walmart Brasil</p></div>
                                                    <div className="depo"><h5>“É uma agência com flexibilidade, aberta a mudanças e eles sempre entregam com bastante agilidade.“</h5>
                                                        <p><strong>Maricy Gattai</strong></p>
                                                        <p>Gerente de Marketing, Bauducco</p></div>
                                                    <div className="depo"><h5>“O que é muito legal da Duee, é que ela sempre traz uma proposta 360o. Isso, pra gente, facilita muito.”</h5>
                                                        <p><strong>Fernando Colino</strong></p>
                                                        <p>Gerente de Compras, Pernod-Ricard Brasil</p></div>
                                                    <div className="depo"><h5>“A qualidade gráfica e criativa do projeto foi muito interessante. Temos sempre os retornos muito rápidos com uma flexibilidade e agilidade para resolver qualquer contratempo.”</h5>
                                                        <p><strong>Vanessa Campanholo</strong></p>
                                                        <p>Gerente de Marketing, AES Eletropaulo</p></div>
                                                </AutoPlaySwipeableViews>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 midia">
                                    <h4>Duee na midia</h4>

                                    <div className="row around-xs">
                                        <News img={JovenPan} title="CODORNÍU CONVIDA EXPERTS PARA CRIAR BEBIDAS AUTORAIS COM CAVA" link="http://jovempan.uol.com.br/opiniao-jovem-pan/consultores/cesar-adames/codorniu-convida-experts-para-criar-bebidas-autorais-com-cava.html" />
                                        <News img={Propmark} title="MASCOTE DA CERVEJA BELGA VEDETT INVADE CIDADE DE SÃO PAULO" link="http://propmark.com.br/anunciantes/mascote-da-cerveja-belga-vedett-invade-cidade-de-sao-paulo" />
                                        <News img={Propmark} title="DUEE BRASIL ASSUME CONTA DA CODORNÍU, DA INTERFOOD IMPORTAÇÃO" link="http://propmark.com.br/agencias/duee-brasil-assume-conta-da-codorniu-da-interfood-importacao" />
                                        <News img={Blog} title="MARKET LOOK COM HENRIQUE CASTRO" link="http://blogdofernandocoelho.blogspot.com.br/2015/03/voce-ja-ouviu-falar-em-comunicacao-all.html" />
                                        <News img={Propmark} title="ENTRE ASPAS: ENGAJAMENTO ORGÂNICO" link="http://propmark.com.br/digital/entre-aspas-engajamento-organico" />
                                        <News img={Adonline} title="DUEE BRASIL ASSUME COMO UMA DAS AGÊNCIAS DE LG" link="http://www.adonline.com.br/rapidinhas/57746-duee-brasil-assume-como-uma-das-agencias-de-lg.html" />
                                        <News img={meiomsg} title="DANÇA DAS CONTAS" link="http://www.meioemensagem.com.br/home/comunicacao/2015/10/23/dan-a-das-contas-duracell-e-unesco.html" />
                                        <News img={Propmark} title="ESPANHOLA CODORNÍU LANÇA WEBSÉRIE NO BRASIL" link="https://dueebrasil.com.br/Site_2016?page_id=907" />
                                        <News img={Grandes} title="COINTREAU RENOVA POSICIONAMENTO" link="http://grandesnomesdapropaganda.com.br/tag/duee-brasil/" />
                                        <News img={Promoview} title="DUEE BRASIL CONQUISTA DUAS NOVAS CONTAS" link="http://www.promoview.com.br/agencia/contas/duee-brasil-conquista-duas-novas-contas.html" />
                                        <News img={Mundomkt} title="COMO SE COMPORTAR NA REDE SOCIAL QUANDO O CONSUMIDOR PRECISA DE VOCÊ" link="https://www.mundodomarketing.com.br/artigos/henrique-castro/34101/como-se-comportar-na-rede-social-quando-o-consumidor-precisa-de-voce.html" />
                                        <News img={meiomsg} title="DANÇA DAS CONTAS: CATHO, SALVAT E BRILIA" link="http://www.meioemensagem.com.br/home/comunicacao/2015/11/13/dan-a-das-contas-catho-editora-salvat-e-brilia.html" />
                                        <News img={Mkgpro} title="AGÊNCIA DUEE BRASIL ASSUME NOVOS CLIENTES" link="http://www.propagandasc.com.br/agencia_duee_brasil_assume_novos_clientes.html" />
                                        <News img={Clientesa} title="AMOSTRA DE UMA FIDELIZAÇÃO" link="http://www.clientesa.com.br/marketingderelacionamento/58535/amostra-de-uma-fidelizacao/Ler.aspx" />
                                        <News img={Proxxima} title="O UBER ALÉM DO UBER E A REVOLUÇÃO DA INDÚSTRIA AUTOMOBILÍSTICA" link="http://www.proxxima.com.br/busca-proxxima?search=duee+brasil&ordenar=data&periodode=&periodoate=&categoria=&dias=" />
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>


                {/* 
                <Link to="/fazemos">O que fazemos</Link><br />
                <Link to="/contato">Vamos conversar?</Link><br />
                <Link to="/contato">Clientes</Link><br />
                <Link to="/">Home</Link> */}

            </Layout>
        )
    }
}