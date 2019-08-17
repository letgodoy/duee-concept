import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"


const Contato = () => (
    <Layout>
        <SEO title="Contato" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0351629017696!2d-46.65470238447564!3d-23.56718056769357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7420ee309%3A0x31541a74223471bb!2sDUEE+BRASIL!5e0!3m2!1spt-BR!2sbr!4v1565909031974!5m2!1spt-BR!2sbr" height="200" frameborder="0" style={{ border: "0", width: "100%" }} allowfullscreen title="mapa"></iframe>
            {/* <!-- First --> */}
            <section id="one" className="main style3">
                <div className="container">
                    <div className="row gtr-150">
                        <section>
                            <header>
                                <h2>VAMOS CONVERSAR?</h2>
                            </header>
                            <h3>São Paulo</h3>
                            <p>Alameda Joaquim Eugênio de Lima, 696 - Jardins</p>
                            <p>CEP 01403-000</p>
                            <hr />

                            <h3>Telefone</h3>
                            <p>11 2532.7152</p>
                            <hr />

                            <h3>Novos negócios</h3>
                            <p>Monalisa</p>
                            <p><a href="mailto:monalisa@dueebrasil.com.br">monalisa@dueebrasil.com.br</a></p>
                        </section>
                    </div>
                </div>
            </section>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Contato