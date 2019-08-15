import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const Contato = () => (
    <Layout>
        <SEO title="Contato" />
        <div class="is-preload">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0351629017696!2d-46.65470238447564!3d-23.56718056769357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7420ee309%3A0x31541a74223471bb!2sDUEE+BRASIL!5e0!3m2!1spt-BR!2sbr!4v1565909031974!5m2!1spt-BR!2sbr" height="200" frameborder="0" style={{border: "0", width: "100%"}} allowfullscreen title="mapa"></iframe>
            {/* <!-- First --> */}
            <section id="one" className="main style3">
                <div className="container">
                    <div className="row gtr-150">
                        <section>
                        <header>
							<h2>Contato</h2>
							<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
						</header>
						<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                           
                        </section>
                    </div>
                </div>
            </section>

            
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Contato