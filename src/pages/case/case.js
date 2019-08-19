import React from "react"
import { Link } from "gatsby"
import Masonry from 'react-masonry-component';

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { GraphQLClient } from 'graphql-request'

export default class Case extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            case: []
        }
    }

    componentWillMount() {

        const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjwqu32en1d4501347fk27y1w')

        const id = window.location.search.split('=')[(window.location.search.split('=').length) - 1]

        client.request(`
        {
            allCaseses(filter: {
              id: "${id}"
            }) {
              capa
              categoria
              cliente
              data
              description
              fotos
              title
              id
            }
          }
`).then(
            res => {
                this.setState({ case: res.allCaseses[0] })
            })
    }

    render() {

        const job = this.state.case
        return (
            <Layout>
                <SEO title="Contato" />
                {/* <!-- First --> */}
                <section id="one" className="main style1">
                    <div className="container">
                        <div className="row">
                            <section className="col-12">
                                <header>
                                    <h2>{job.title}</h2>
                                    <p>{job.description}</p>
                                    <p><strong>Cliente: </strong>{job.cliente}</p>
                                    <p><strong>Data: </strong>{job.data}</p>
                                    <p>{job.categoria? job.categoria.map((cat, i) => (<small key={i}>{cat} </small>)) : null}</p>
                                </header>
                                <Masonry>
                                    {job.fotos? job.fotos.map((src, i) => (
                                        <img src={src} key={i} style={{ width: "30%", margin: "1%" }} />
                                    )) :null}
                                </Masonry>
                            </section>
                        </div>
                    </div>
                </section>
                <Link to="/">Go back to the homepage</Link>
            </Layout>
        )
    }
}