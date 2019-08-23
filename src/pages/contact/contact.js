import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './contact.scss'


const Contato = () => (
    <Layout>
        <SEO title="Contato" />

        {/* <!-- First --> */}
            <div className="row background middle-xs" id="contato">
                <header className="col-xs-12 fadeIn">
                    <h1 className="stretchRight">VAMOS CONVERSAR?</h1>
                </header>
                <div className="col-xs-12 row center-xs" style={{ alignSelf: 'stretch' }}>
                    <div className="col-md-3 col-xs-12 col-sm-6 local slideRight middle-xs">
                        <i className="fas fa-map-marker-alt hatch"></i>
                        <h4>São Paulo</h4>
                        <p>Alameda Joaquim Eugênio de Lima, 696 - Jardins</p>
                        <p>CEP 01403-000</p>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-6 local slideDown middle-xs">
                        <i className="fas fa-map-marker-alt hatch"></i>
                        <h4>Madrid</h4>
                        <p>Calle Montalbán 9 2d</p>
                        <p>28014 Madrid</p>
                    </div>
                    <div className="col-md-2 col-xs-12 col-sm-6 phone slideDown middle-xs">
                        <i className="fas fa-phone hatch"></i>
                        <h4>Telefone</h4>
                        <p>11 2532.7152</p>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-6 mail slideLeft middle-xs">
                        <i className="fas fa-mail-bulk hatch"></i>
                        <h4>Novos negócios</h4>
                        <p>Monalisa</p>
                        <p><a href="mailto:monalisa@dueebrasil.com.br">monalisa@dueebrasil.com.br</a></p>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-6 social slideUp middle-xs">
                        <h4><a href="https://www.facebook.com/agenciadueebrasil"><i className="fab fa-facebook-f"></i></a></h4>
                        <h4><a href="https://www.instagram.com/dueebrasil"><i className="fab fa-instagram"></i></a></h4>
                        <h4><a href="https://www.linkedin.com/company/duee-brasil"><i class="fab fa-linkedin-in"></i></a></h4>
                        <h4><a href="https://dueetando.com.br"><i class="fas fa-blog"></i></a></h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-6 slideLeft middle-xs">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0351629017696!2d-46.65470238447564!3d-23.56718056769357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7420ee309%3A0x31541a74223471bb!2sDUEE+BRASIL!5e0!3m2!1spt-BR!2sbr!4v1565909031974!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen title="mapa" className="pullDown mapa"></iframe>
                    </div>
                </div>
            </div>
            {/* <Link to="/fazemos">O que fazemos</Link><br/>
                <Link to="/leoes">#somosleos</Link><br/>
                <Link to="/contato">Clientes</Link><br/>
                <Link to="/">Home</Link> */}
    </Layout>
)

export default Contato