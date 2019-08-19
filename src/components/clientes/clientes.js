// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './clientes.scss'

const Clientes = ({ img, title }) => (
  <div className="col-1 cliente">
    <img src={img} alt={title} />
  </div>
)

export default Clientes
