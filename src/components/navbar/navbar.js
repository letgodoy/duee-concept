import React from "react"
import { Link } from "gatsby"
import './navbar.scss'

import HamburgerMenu from 'react-hamburger-menu';
// import MenuIcon from '../menuIcon/menuIcon'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      dropdownActive: false
    };
    this._pageScroller = null;
  }

  componentWillMount() {
    this.setState({dropdownActive : false});
  }

  activeDropdown = () => {
    if(!this.state.dropdownActive) {
      this.setState({dropdownActive : true});
    }

    if(this.state.dropdownActive) {
      this.setState({dropdownActive : false});
    }
  };

  render() {
    return <nav id="navbar">
      {/*{this.state.dropdownActive ? null : <i className="fas fa-bars icon-menu" onClick={this.activeDropdown}></i>}*/}
      <div id="topbar">
        <div className="logo">
          <img src={this.props.urlImg} alt="Duee"/>
        </div>
        <div className="menuButton">
          {/*<HamburgerMenu*/}
          {/*  isOpen={this.state.dropdownActive}*/}
          {/*  menuClicked={this.handleClick.bind(this)}*/}
          {/*  width={18}*/}
          {/*  height={15}*/}
          {/*  strokeWidth={1}*/}
          {/*  rotate={0}*/}
          {/*  color='white'*/}
          {/*  borderRadius={0}*/}
          {/*  animationDuration={0.5}*/}
          {/*/>*/}
          {this.state.dropdownActive ?
          <i className="fas fa-times" onClick={this.activeDropdown}></i> :
          <i className="fas fa-bars " onClick={this.activeDropdown}></i>}
        </div>
      </div>
      {this.state.dropdownActive ?
      <div id="dropdown">
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leoes">Somos Leões</Link>
            </li>
            <li>
              <Link to="/fazemos">Nosso Trabalho</Link>
            </li>
            <li>
              <a href="https://dueebrasil.com.br/portfolio" target="_blank" rel="noopener noreferrer">Portfólio</a>
            </li>
            <li>
              <a href="https://dueetando.com.br" target="_blank" rel="noopener noreferrer">Dueetando</a>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div> : null}
    </nav>
  }
}