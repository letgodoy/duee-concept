
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import './sass/main.scss'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
    <Helmet>
      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>
      <script src="/__/firebase/6.4.0/firebase-app.js"></script>
      <script src="/__/firebase/init.js"></script>
      <script src="/__/firebase/6.4.0/firebase-firestore.js"></script>
      </Helmet>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <main className="is-preload">{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
