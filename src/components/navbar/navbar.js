import React from "react"
import './navbar.scss'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 1};
    this._pageScroller = null;
  }

  render() {

    return <nav id="navbar">
      <div className="logo">
        <img src={this.props.urlImg} alt=""/>
      </div>
      <div className="menuButton">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  }
}