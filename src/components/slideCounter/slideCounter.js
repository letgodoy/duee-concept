import React from "react"
// import { Link } from "gatsby"
import './slideCounter.scss'

// import MenuIcon from '../menuIcon/menuIcon'

export default class SlideCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      dropdownActive: false,
      widthBar: 0
    };
    this._pageScroller = null;
  }

  updateSlideCounte = (pages) => {
    console.log(pages)
    switch (pages) {
      case 1:
        this.state.widthBar = 0;
        break;
      case 2:
        this.state.widthBar = "33.33%";
        break;
      case 3:
        this.state.widthBar = "66.66%";
        break;
      case 4:
        this.state.widthBar = "100%";
        break;
      default:
        this.state.widthBar = 0;
    }
  }

  componentDidMount() {
    this.updateSlideCounte(this.props.page);
  }

  render() {
    this.updateSlideCounte(this.props.page);

    return <div id="ProgressBar">
      <div className="progressBarContainer">
        <div className="progressBar">
          <div id="progress" style={{width: this.state.widthBar}}></div>
        </div>
      </div>
      <div className="icon">
        <i className="fas fa-exchange-alt"></i>
        <p>scroll</p>
      </div>
    </div>
  }
}