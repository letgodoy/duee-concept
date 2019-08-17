import React from "react"
import { Link } from "gatsby"
import Masonry from 'react-masonry-component';

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const Case = () => (
    <Layout>
        <SEO title="Contato" />
        {/* <!-- First --> */}
        <section id="one" className="main style1">
            <div className="container">
                <div className="row">
                    <section className="col-12">
                        <header>
                            <h2>Case</h2>
                            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                        </header>
                        <Masonry>
                            <img src="https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg" style={{ width: "40%" }} />
                            <img src="https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg" style={{ width: "22%" }} />
                            <img src="https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg" style={{ width: "20%" }} />
                            <img src="https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg" style={{ width: "40%" }} />
                            <img src="https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg" style={{ width: "40%" }} />
                            <img src="https://letgodoy.com/wp-content/uploads/2018/03/photo-1515285768613-9efbec9fe26b-1.jpg" style={{ width: "20%" }} />
                        </Masonry>
                    </section>
                </div>
            </div>
        </section>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Case