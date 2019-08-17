import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"


const Case = () => (
    <Layout>
        <SEO title="Contato" />
        <div class="is-preload">
            {/* <!-- First --> */}
            <section id="one" className="main style3">
                <div className="container">
                    <div className="row gtr-150">
                        <section>
                            <header>
                                <h2>Case</h2>
                                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                            </header>
                            <div class="masonry-with-columns" id="masonry-with-columns">
                                {/* <div style="order: 0;">
                                    1
  </div>
                                <div style="order: 1;">
                                    2
  </div>
                                <div style="order: 2;">
                                    3
  </div>
                                <div style="order: 0;">
                                    4
  </div>
                                <div style="order: 1;">
                                    5
  </div>
                                <div style="order: 2;">
                                    6
  </div>
                                <div style="order: 0;">
                                    7
  </div>
                                <div style="order: 1;">
                                    8
  </div>
                                <div style="order: 2;">
                                    9
  </div>
                                <div style="order: 0;">
                                    10
  </div>
                                <div style="order: 1;">
                                    11
  </div>
                                <div style="order: 2;">
                                    12
  </div>
                                <div style="order: 0;">
                                    13
  </div>
                                <div style="order: 1;">
                                    14
  </div>
                                <div style="order: 2;">
                                    15
  </div> */}
                            </div>

                        </section>
                    </div>
                </div>
            </section>


        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Case