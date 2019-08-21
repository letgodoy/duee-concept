
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import ScrollOut from "scroll-out";
// import { useStaticQuery, graphql } from "gatsby"

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

  componentWillMount() {
    ScrollOut({
      onShown: function(el) {
        // use the web animation API
        el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
      },
      onHidden: function(el) {
        // hide the element initially
        el.style.opacity = 0;
      }
    })
    }

    render() {
      return (
        <>
          <Helmet>
            <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" ></link>
            <script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js"></script>
          </Helmet>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <div>

            <main data-scroll>{this.props.children}</main>
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
