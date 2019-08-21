import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './contact.scss'


const Contato = () => (
    <Layout>
        <SEO title="Contato" />
        
        {/* <!-- First --> */}
        <section id="contato">
            <div className="row middle-xs background">
                    <section className="col-md-7 col-sm-12 row">
                        <header>
                            <h1>VAMOS CONVERSAR?</h1>
                        </header>
                        <div className="col-xs-12 row">
                            <div className="col-md-4 col-xs-12 local slideUp">
                                <i className="fas fa-map-marker-alt hatch"></i>
                                <h3>São Paulo</h3>
                                <p>Alameda Joaquim Eugênio de Lima, 696 - Jardins</p>
                                <p>CEP 01403-000</p>
                            </div>
                            <div className="col-md-4 col-xs-12 phone slideUp">
                            <i className="fas fa-phone hatch"></i>
                                <h3>Telefone</h3>
                                <p>11 2532.7152</p>
                            </div>
                            <div className="col-md-4 col-xs-12 mail slideUp">
                            <i className="fas fa-mail-bulk hatch"></i>
                                <h3>Novos negócios</h3>
                                <p>Monalisa</p>
                                <p><a href="mailto:monalisa@dueebrasil.com.br">monalisa@dueebrasil.com.br</a></p>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-5 col-sm-12 row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0351629017696!2d-46.65470238447564!3d-23.56718056769357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7420ee309%3A0x31541a74223471bb!2sDUEE+BRASIL!5e0!3m2!1spt-BR!2sbr!4v1565909031974!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen title="mapa" className="pullDown mapa"></iframe>
                    </section>
            </div>
        </section>
    </Layout>
)

export default Contato