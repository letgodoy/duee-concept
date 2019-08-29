import React from "react"
import { Link } from "gatsby"
import './slideCounter.scss'

// import MenuIcon from '../menuIcon/menuIcon'

export default class SlideCounter extends React.Component {
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

  render() {
    return <div>

    </div>
  }
}