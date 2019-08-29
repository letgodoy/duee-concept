import React from "react"
import ReactPageScroller from "react-page-scroller";
import { Link } from "gatsby"

import './home.scss'
import Layout from "../../components/layout/layout"
// import Navbar from '../../components/navbar/navbar'
import MouseIcon from '../../components/mouseIcon/mouseIcon'
import SEO from "../../components/seo"

// import Logo from '../../images/duee.svg'
import Starbucks from '../../images/home/HOME_STARBUCKS.mp4'
import StarbucksLogo from '../../images/home/starbucks_logo.svg'
import FaxeBg from '../../images/home/HOME_FAXE.mp4'
import FaxeLogo from '../../images/home/FAXE-LOGO.svg'
import LollaBg from '../../images/home/HOME_MADE.mp4'
import LollaLogo from '../../images/home/MadeNoLolla.svg'
import LogoVideoPc from '../../images/home/LETRAS_FINALIZADOS.mp4'
import LogoVideoMobile from '../../images/home/MOBILE_LETRAS.mp4'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
    console.log("pagina mudou " + this.state.currentPage)
  }
  componentDidMount() {
    this.pageOnChange(1)
  }

  render() {

    //const pagesNumbers = this.getPagesNumbers();

    return <Layout>
      <SEO title="Home" />
      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>

      {/*<Navbar urlImg={Logo}/>*/}

      <MouseIcon />

      <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
        <div id="home" className="page-content">
          <Link to="/leoes">
            {/* <img src={Logoanimado} alt="#somosleoes" /> */}
            { window.screen.width > 768 ?
              <video src={LogoVideoPc}  autoplay="true" muted="true" loop id="videologo" /> :
              <video src={LogoVideoMobile} autoPlay="true" muted="true" loop id="videologo"/>}
          </Link>
        </div>

        <div id="portifolio1" className="page-content">
        <video src={Starbucks}  autoplay="true" muted="true" loop id="videoport">
            Your browser does not support the video tag.
</video>
          {/* <img src= alt=" BackgroStarbucksund" /> */}
          <div className="BgOpacity"></div>
          <div className="LogoContainer">
            <img className="starbucks" src={StarbucksLogo} style={{ maxWidth: "300px" }} alt="Starbucks Logo" />
          </div>
          {/*<div className="content">*/}
          {/*  <div className="title col-12 col-md-4">*/}
          {/*    <h1>Portifólio</h1>*/}
          {/*    <a>Saiba mais sobre o projeto</a>*/}
          {/*  </div>*/}
          {/*  <div className="col-md-4"></div>*/}
          {/*  <div className="col-md-4"></div>*/}
          {/*</div>*/}
        </div>

        <div id="portifolio2" className="page-content">
          {/* <img src={FaxeBg} alt="Faxe Background" /> */}
          <video src={FaxeBg} autoplay="true" muted="true" loop id="videoport"/>
          <div className="BgOpacity"></div>
          <div className="LogoContainer">
            <img src={FaxeLogo} alt="Faxe Logo" />
          </div>
          {/*<div className="content">*/}
          {/*  <div className="title col-12 col-md-4">*/}
          {/*    <h1>Portifólio</h1>*/}
          {/*    <a>Saiba mais sobre o projeto</a>*/}
          {/*  </div>*/}
          {/*  <div className="col-md-4"></div>*/}
          {/*  <div className="col-md-4"></div>*/}
          {/*</div>*/}
        </div>

        <div id="portifolio2" className="page-content">
          {/* <img src={LollaBg} alt="Lolla Background"/> */}
          <video src={LollaBg}  autoplay="true" muted="true" loop id="videoport">
            Your browser does not support the video tag.
</video>
          <div className="BgOpacity" style={{ opacity: "0" }}></div>
          <div className="LogoContainer">
            <img src={LollaLogo} alt="Lolla Logo" />
          </div>
          {/*<div className="content">*/}
          {/*  <div className="title col-12 col-md-4">*/}
          {/*    <h1>Portifólio</h1>*/}
          {/*    <a>Saiba mais sobre o projeto</a>*/}
          {/*  </div>*/}
          {/*  <div className="col-md-4"></div>*/}
          {/*  <div className="col-md-4"></div>*/}
          {/*</div>*/}
        </div>
        {/*<div id="contato" className="page-content">*/}
        {/*  <h1>Contato</h1>*/}
        {/*</div>*/}
      </ReactPageScroller>
    </Layout>
  }
}

      //export default HomePage
