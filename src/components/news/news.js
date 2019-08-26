import React from "react"
import './news.scss'

const News = ({ img, title, link }) => (
  <a href={link} className="news col-sm-3 col-xs-4 col-md-2" target="_blank" rel="noopener noreferrer">
    <img src={img} />
    <h5>{title}</h5>
  </a>
)

export default News