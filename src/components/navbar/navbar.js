import React from "react"
import './navbar.scss'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      navbarOpen: false
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
      <div id="topbar">
        <div className="logo">
          <img src={this.props.urlImg} alt=""/>
        </div>
        <div className="menuButton">
          {this.state.dropdownActive ?
          <i className="fas fa-times" onClick={this.activeDropdown}></i> :
          <i className="fas fa-bars" onClick={this.activeDropdown}></i>}
        </div>
      </div>
      {this.state.dropdownActive ?
      <div id="dropdown">
        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Somos Leões</a>
            </li>
            <li>
              <a href="">Nosso Trabalho</a>
            </li>
            <li>
              <a href="">Portifólio</a>
            </li>
            <li>
              <a href="">Dueetando</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </div>
      </div> : null}
    </nav>
  }
}