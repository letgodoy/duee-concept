import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './somosleoes.scss'

export default class SomosLeoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offsetX: '',
            offsetY: '',
            friction: 1 / 32
        }
        this._mouseMove = this._mouseMove.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this._mouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this._mouseMove);
    }

    _mouseMove(e) {
        let followX = (window.innerWidth / 2 - e.clientX);
        let followY = (window.innerHeight / 2 - e.clientY);

        let x = 0,
            y = 0;
        x += ((-followX - x) * this.state.friction);
        y += (followY - y) * this.state.friction;
        this.setState({
            offsetX: x,
            offsetY: y
        });
    }

    render() {
        let offset = {
            transform: `translate(-50%, -50%) perspective(2000px)
                      rotateY(${this.state.offsetX}deg)
                      rotateX(${this.state.offsetY}deg)`
        }

        return (
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
                <div id="gentefaz">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 box" id="resumo">
                            {/* <img src={gif} /> */}
                            <h2 className="LIVE">LIVE MKT</h2>
                            <h2 className="PROMO">PROMOÇÕES</h2>
                            <h2 className="BRAND">BRANDING</h2>
                            <h2 className="DIGITAL">DIGITAL</h2>
                            <h2 className="DEV">DESENVOLVIMENTO</h2>
                            <h1 className="glitchhover" value="A GENTE FAZ">A GENTE FAZ</h1>
                        </div>
                        <div className="col-md-7 col-sm-12" id="manifesto">
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

                {/* <!-- Second --> */}
                <div className="row" id="versinho">
                    <div className="col-xs-12 fadeIn wrapper" style={offset}>
                        <h3>SOMOS LEÕES</h3>
                        <h3>Rugimos bem alto para que todos possam nos ouvir.</h3>
                        <h3>Defendemos nossas ideias, não temos medo de nos aventurar.</h3>
                        <h3>Somos ágeis, valentes, estrategistas e inquietos.</h3>
                        <h3>Estamos sempre nos desafiando e caçando oportunidades de fazer diferente.</h3>
                        <h3>Somos leões.</h3>
                    </div>
                </div>
                <Link to="/fazemos">O que fazemos</Link><br/>
                <Link to="/contato">Vamos conversar?</Link><br/>
                <Link to="/contato">Clientes</Link><br/>
                <Link to="/">Home</Link>
            </Layout>
        )
    }
}