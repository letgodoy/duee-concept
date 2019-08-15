import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const SomosLeoes = () => (
  <Layout>
    <SEO title="Page two" />
    <div>
        header
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SomosLeoes