import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import './made.scss'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/scss/swiper.scss'
import Modal from '../../components/Modal/modal'

import LogoMade from '../../images/made/MADE-IN-BRAZIL-logo_-branco.svg'

export default class Faxe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPost: false,
            showMkt: false,
            showCamp: false,
            showPdv: false,
            showBanners: false,
            showStories: false,
            showPlaylists: false,
            showYT: false,
        }

        this.showPost = e => this.setState({ showPost: !this.state.showPost })
        this.showMkt = e => this.setState({ showMkt: !this.state.showMkt })
        this.showCamp = e => this.setState({ showCamp: !this.state.showCamp })
        this.showPdv = e => this.setState({ showPdv: !this.state.showPdv })
        this.showBanners = e => this.setState({ showBanners: !this.state.showBanners })
        this.showStories = e => this.setState({ showStories: !this.state.showStories })
        this.showPlaylists = e => this.setState({ showPlaylists: !this.state.showPlaylists })
        this.showYT = e => this.setState({ showYT: !this.state.showYT })

    }

    render() {
        const params = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            lazy: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination'
            }
        }
        const params2 = {
            lazy: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }

        const paramsList = {
            slidesPerView: 3,
            spaceBetween: 200,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }
        return (
            <Layout>
                <SEO title="Made In Brazil" />
                <div className="row middle-xs" id="madepage">
                    <header>
                        <img src={LogoMade} alt="Logo Made in Brazil" />
                    </header>
                    <Swiper {...params}>
                        <div className="covers posts" onClick={this.showPost} />
                        <div className="covers emkt" onClick={this.showMkt} />
                        <div className="covers campanhas" onClick={this.showCamp} />
                        <div className="covers pdv" onClick={this.showPdv} />
                        <div className="covers banners" onClick={this.showBanners} />
                        <div className="covers stories" onClick={this.showStories} />
                        <div className="covers playlists" onClick={this.showPlaylists} />
                        <div className="covers youtube" onClick={this.showYT} />
                    </Swiper>

                    <Modal show={this.state.showPost} onClose={this.showPost} title='Posts Instagram'>
                        <Swiper {...params2} className="slidesimg">
                            {/* <div><img src={} alt="" /></div>
                        <div><img src={} alt="" /></div>
                        <div><img src={} alt="" /></div>
                        <div><img src={} alt="" /></div>
                        <div><img src={} alt="" /></div>
                        <div><img src={} alt="" /></div>
                        <div><img src={} alt="" /></div> */}
                        </Swiper>
                    </Modal>

                    <Modal show={this.state.showMkt} onClose={this.showMkt} title='Email Marketing'>
                    Email Marketing
                    </Modal>

                    <Modal show={this.state.showCamp} onClose={this.showCamp} title='Campanhas'>
                    Campanhas
                    </Modal>

                    <Modal show={this.state.showPdv} onClose={this.showPdv} title='PDV'>
                    PDV
                    </Modal>

                    <Modal show={this.state.showBanners} onClose={this.showBanners} title='Banners'>
                    Banners
                    </Modal>

                    <Modal show={this.state.showStories} onClose={this.showStories} title='Stories Instagram'>
                    Stories Instagram
                    </Modal>

                    <Modal show={this.state.showPlaylists} onClose={this.showPlaylists} title='Playlists'>
                        <Swiper {...paramsList} id="PlaylistsModal">
                            {/* <div><iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:e4andqtcxjiik8wlcyns8sbue&size=detail&theme=dark" width="300" height="56" frameborder="0" style="border:none;" allowtransparency="true"></iframe></div> */}
                            <div><iframe src="https://open.spotify.com/embed/playlist/68LglzhL6afHlY0D877XXw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist1"></iframe></div>
                            <div><iframe src="https://open.spotify.com/embed/playlist/6euNX0DQ8V0iyJxMuqQZn5" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist2"></iframe></div>
                            <div><iframe src="https://open.spotify.com/embed/playlist/3AXlUoMZPdQBHcBQG8J9ut" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist3"></iframe></div>
                            <div><iframe src="https://open.spotify.com/embed/playlist/4OjqDsSaQRQQyqozzD7Csw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist4"></iframe></div>
                            <div><iframe src="https://open.spotify.com/embed/playlist/3AD3DKHsILTPXpbkDGtVmp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" title="playlist5"></iframe></div>
                        </Swiper>
                    </Modal>

                    <Modal show={this.state.showYT} onClose={this.showYT} title='YouTube'>
                    YouTube
                    </Modal>
                </div>
            </Layout >
        )
    }
}