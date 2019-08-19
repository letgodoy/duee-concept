import React from "react"
import ReactPageScroller from "react-page-scroller";

import  './home.scss'
import Layout from "../../components/layout/layout"
import Navbar from '../../components/navbar/navbar'
import SEO from "../../components/seo"

import Logo from '../../images/gatsby-icon.png'
import Lion from '../../images/home/Leao_DUEE2.jpg'
import Starbucks from '../../images/home/1920x1080-Starbucks.png'
import Faxe from '../../images/home/1920x1080-Faxe.png'
import Lolla from '../../images/home/1920x1080-Lolla.png'
import Logoanimado from '../../images/home/VIDEO-DUEE-5-SEGUNDOS.gif'

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

      <Navbar urlImg={Logo}/>

      <ReactPageScroller ref={c => this.reactPageScroller = c}>
        <div id="home" className="page-content">
          <img src={Logoanimado} alt=""/>
          <div className="content">
            <div className="title col-12 col-md-4">
              <h1>Duee</h1>
              <h1>Brasil</h1>
              <a>Saiba mais sobre nós</a>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <div id="portifolio1" className="page-content">
          <img src={Starbucks} alt=""/>
          <div className="content">
            <div className="title col-12 col-md-4">
              <h1>Portifólio</h1>
              <a>Saiba mais sobre o projeto</a>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <div id="portifolio2" className="page-content">
          <img src={Faxe} alt=""/>
          <div className="content">
            <div className="title col-12 col-md-4">
              <h1>Portifólio</h1>
              <a>Saiba mais sobre o projeto</a>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <div id="portifolio2" className="page-content">
          <img src={Lolla} alt=""/>
          <div className="content">
            <div className="title col-12 col-md-4">
              <h1>Portifólio</h1>
              <a>Saiba mais sobre o projeto</a>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div id="contato" className="page-content">
          <h1>Contato</h1>
        </div>
      </ReactPageScroller>
    </Layout>
  }
}

//export default HomePage
