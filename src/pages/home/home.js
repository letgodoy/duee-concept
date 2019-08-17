import React from "react"
import { Link } from "gatsby"
// import ReactFullpage from '@fullpage/react-fullpage-umd';

import Layout from "../../components/layout/layout"
// import Image from "../../components/image"
import SEO from "../../components/seo"


const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <script src="https://kit.fontawesome.com/67a84c91e8.js"></script> */}
    {/* <ReactFullpage>
      scrollingSpeed = {1000}
      render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section active">Some section</div>
          <div className="section">Some section</div>
          <div className="section">Some section</div>
          <div className="section">Some section</div>
        </ReactFullpage.Wrapper>
    )}}
    </ReactFullpage> */}
    <Link to="/leoes">Go to page 2</Link>
  </Layout>
)

export default HomePage
