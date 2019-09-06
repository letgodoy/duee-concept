import React from "react"
import ReactPageScroller from "react-page-scroller";
import { Link } from "gatsby"

import './home.scss'
import Layout from "../../components/layout/layout"
// import Navbar from '../../components/navbar/navbar'
import MouseIcon from '../../components/mouseIcon/mouseIcon'
import SlideCounter from '../../components/slideCounter/slideCounter'
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

// const Starbucks = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/HOME_STARBUCKS.mp4?alt=media&token=5e861bc4-1b1f-439d-a6cf-48160aa38691'
// const StarbucksLogo = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/starbucks_logo.svg?alt=media&token=49566697-4c4c-41b1-8d7c-62b766510950'
// const FaxeBg = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/HOME_FAXE.mp4?alt=media&token=96a0d3ab-4cf9-4f6e-b229-442142c4931b'
// const FaxeLogo = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/FAXE-LOGO.svg?alt=media&token=103e0665-dc78-4640-9842-6b83f16c6e40'
// const LollaBg = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/HOME_MADE.mp4?alt=media&token=88db5752-a9a5-4822-b6c0-c1b54e283473'
// const LollaLogo = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/MadeNoLolla.svg?alt=media&token=e6c0992e-96d3-4f9b-8702-6a633df76733'
// const LogoVideoPc = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/LETRAS_FINALIZADOS.mp4?alt=media&token=db8e960f-3a7a-478e-9f74-a1a422d0cc47'
// const LogoVideoMobile = 'https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/MOBILE_LETRAS.mp4?alt=media&token=85478d2c-ce14-4e6e-b862-5299e71c7a4a'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      width: 0
    };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
    // console.log("pagina mudou " + this.state.currentPage)
  }

  componentDidMount() {
    this.pageOnChange(1)
    this.setState({width: window.screen.width})
  }

  render() {

    //const pagesNumbers = this.getPagesNumbers();

    return <Layout>
      <SEO title="Home" />
      <script src="https://kit.fontawesome.com/67a84c91e8.js"></script>

      {/*<Navbar urlImg={Logo}/>*/}

      <MouseIcon />
      <SlideCounter page={this.state.currentPage} />

      <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
        <div id="home" className="page-content">
          <Link to="/leoes">
            {/* <img src={Logoanimado} alt="#somosleoes" /> */}
            { this.state.width > 768 ?
              <video src={LogoVideoPc}  autoplay="true" muted="true" loop id="videologo" /> :
              <video src={LogoVideoMobile} autoPlay="true" muted="true" loop id="videologo"/>}
          </Link>
        </div>

        <div id="portifolio1" className="page-content">
        <Link to="/starbucks">
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
          </Link>
        </div>

        <div id="portifolio2" className="page-content">
        <a href="https://portfolio.duee.com.br/project/faxe-dinner-in-the-sky/" target="_blank" rel="noopener noreferrer">
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
          </a>
        </div>

        <div id="portifolio2" className="page-content">
        <a href="https://portfolio.duee.com.br/project/made-no-lolla/" target="_blank" rel="noopener noreferrer">
          {/* <img src={LollaBg} alt="Lolla Background"/> */}
          <video src={LollaBg}  autoplay="true" muted="true" loop id="videoport">
            Your browser does not support the video tag.
</video>
          <div className="BgOpacity"></div>
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
          </a>
        </div>
      </ReactPageScroller>
    </Layout>
  }
}

      //export default HomePage
