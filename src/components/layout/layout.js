
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from "gatsby"

import Logo from '../../images/logo_white.svg'
import Navbar from '../../components/navbar/navbar'
// import MouseIcon from '../../components/mouseIcon/mouseIcon'

// import Header from "./header"
import './sass/main.scss'

export default class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cases: []
    }
    this.cases = []
  }

    render() {
      return (
        <>
          <Helmet>
            <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" ></link>
            
            {/* <script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js"></script> */}
            {/* <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.0.2/dist/simpleParallax.min.js"></script> */}
          </Helmet>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <Navbar urlImg={Logo}/>

          <div>
            <main>{this.props.children}</main>
            {/*<footer>*/}
            {/*  © {new Date().getFullYear()}, Built with*/}
            {/*  {` `}*/}
            {/*  <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
            {/*</footer>*/}
          </div>
        </>
      )
    }
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
