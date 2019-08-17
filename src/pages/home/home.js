import React from "react"
import ReactPageScroller from "react-page-scroller";

import  './home.scss'
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 1};
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    this.setState({currentPage: number});
  };

  render() {

    //const pagesNumbers = this.getPagesNumbers();

    return <Layout>
      <SEO title="Home"/>
      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>

      <ReactPageScroller ref={c => this.reactPageScroller = c}>
        <div className="page-content home">
          <h1>Duee Brasil</h1>
        </div>
        <div className="page-content portifolio">
          <h1>Portifólio</h1>
        </div>
        <div className="page-content contato">
          <h1>Contato</h1>
        </div>
      </ReactPageScroller>
    </Layout>
  }
}

//export default HomePage
