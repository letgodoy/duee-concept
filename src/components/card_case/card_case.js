// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import './card_case.scss'

const CardCase = ({ title, img, id }) => (
  <div className="col-4 card_case">
    <Link to={'/jobs?id='+ id}>
    <img src={img} className="img" />
    <div className="overlay">
      <span>{title}</span>
    </div>
    </Link>
  </div>
)

export default CardCase
