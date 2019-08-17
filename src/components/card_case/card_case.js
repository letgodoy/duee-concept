// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './card_case.scss'

const Header = ({title, img}) => (
  <div className="col-4 card_case">
    <img src={img} />
      <span>{title}</span>
  </div>
)

export default Header
