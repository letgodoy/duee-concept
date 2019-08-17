import React from "react"
import './card_case.scss'
import Layout from "../layout/layout"
import SEO from "../seo"
import ReactPageScroller from "react-page-scroller"

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

    </Layout>
  }
}