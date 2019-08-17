// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './card_case.scss'

const CardCase = ({ title, img }) => (
  <div className="col-4 card_case">
    <img src={img} />
    <div class="overlay">
      <span>{title}</span>
    </div>
  </div>
)

export default CardCase
