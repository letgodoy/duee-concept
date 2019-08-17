// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './clientes.scss'

const Clientes = ({ img }) => (
  <div className="col-2 cliente">
    <img src={img} />
  </div>
)

export default Clientes
