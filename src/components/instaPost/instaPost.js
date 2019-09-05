import React from "react"
import './instaPost.scss'

import Sereia from '../../images/starbucks/instagram.png'

const instaPost = ({ foto, legenda }) => (
    <div className="post">
        <div className="headpost">
            <img src={Sereia} alt="Starbucks" /><span> Starbucks</span>
        </div>
        <div className="imgpost">
            <img src={foto} alt="Post Starbucks" />
        </div>
        <div className="legendpost">
            <p><i class="far fa-heart"></i><i class="far fa-comment"></i><i class="far fa-bookmark"></i></p>
            <p><span>Strabucks</span> {legenda}</p>
        </div>
    </div>
)

export default instaPost