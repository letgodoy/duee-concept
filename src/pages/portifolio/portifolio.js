import React from "react"


import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Case from '../../components/card_case/card_case'
import Cliente from '../../components/clientes/clientes'
import Lazyload from 'react-lazyload'
// import {db} from "../../components/layout/init-firebase";
import { GraphQLClient } from 'graphql-request'

// import "firebase/firestore"


import './portifolio.scss'

export default class Portifolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cases: []
        }
        this.cases = []
    }



    componentWillMount() {

        const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjwqu32en1d4501347fk27y1w')

        client.request(`
        {
            allCaseses {
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

                // console.log(res.allCaseses)
                this.setState({ cases: res.allCaseses })

            })
        // let array = []
        // db.collection("portifolio").get()
        // .then(function(querySnapshot) {
        //   querySnapshot.forEach(function(doc) {
        // //     // doc.data() is never undefined for query doc snapshots
        // //     console.log(doc.data());
        //     array.push(doc.data())

        //   })
        // })
        // .catch(function(error) {
        //   console.log("Error getting documents: ", error);
        // })
        // this.setState({ cases: array})
    }

    render() {
        return (
            <Layout>
                <SEO title="Portifolio" />
                {/* <!-- First --> */}
                <section id="one" className="main style1">
                    <div className="container">
                        <div className="row gtr-150">
                            <section>
                                <header>
                                    <h2>Clientes</h2>
                                </header>
                                <div className="col-12 row">
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FAbril.png?alt=media&token=53378285-d8f2-4240-ad6a-05caa31bc977'
                                            title="Editora Abril" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FBauducco.png?alt=media&token=a5c085d2-b085-4884-8480-4e4358b2daaf'
                                            title="Bauducco" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FBBC.png?alt=media&token=029adf7d-ec6b-4920-853c-74ea881d8e12'
                                            title="BBC" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FBlueMoon.png?alt=media&token=4aef079e-5611-4296-8831-6ab2c84b26bb'
                                            title="BlueMoon" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FBombardier.png?alt=media&token=7cde36fd-6443-4424-8d18-e8de1c4c900d'
                                            title="Bombardier" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FCasalGarcia.png?alt=media&token=7e49f55e-8679-448f-83bb-5316f2be7aab'
                                            title="Casal Garcia" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FCascola.png?alt=media&token=e49fff06-45a2-498d-9714-05a743048854'
                                            title="Cascola" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FChandon.png?alt=media&token=9a4e7811-6fa1-49ac-93ff-0f7c2becdc64'
                                            title="Chandon" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FCodorniu.png?alt=media&token=04d8ec45-37ba-46d4-98c3-ef5986caf479'
                                            title="Codorniu" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FCointreau.png?alt=media&token=81d48a04-2493-4281-97f6-e7fc69fa391b'
                                            title="Cointreau" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FEletropaulo.png?alt=media&token=38874904-111a-4fbe-8257-b58f5e01f446'
                                            title="Eletropaulo" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FExto.png?alt=media&token=274f4d3f-5150-4997-8c10-86bdbfd5d0e6'
                                            title="Exto" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FFaxe.png?alt=media&token=a12830fa-46db-4e1e-b42a-48e33131d5f3'
                                            title="Faxe" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FFiatChryslerAutomobiles.png?alt=media&token=0d61233b-b550-40a9-80a0-362d370f8980'
                                            title="Fiat Chrysler Automobiles" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FFox.png?alt=media&token=0a953d0e-b165-4652-b85e-9fc1c2556b9d'
                                            title="Fox" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FHasbro.png?alt=media&token=c5e8fd0f-47c1-46e0-b851-f84e3a0c3cf6'
                                            title="Hasbro" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FHersheys.png?alt=media&token=91fe2e53-086e-410f-91a1-dee1893719c3'
                                            title="Hersheys" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FHypermarcas.png?alt=media&token=c186a8eb-994b-42c7-87b1-6285e3b66398'
                                            title="Hypermarcas" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FIntel.png?alt=media&token=d71e9207-1388-4777-862a-b7fb2f22e8ac'
                                            title="Intel" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FInterfood.png?alt=media&token=441662bf-dd7c-4c51-b7e9-9595ed20a7cb'
                                            title="Interfood" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FKimberlyClark.png?alt=media&token=2e73a5ea-4856-4f43-a10f-064f083a4ffb'
                                            title="KimberlyClark" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FMadeInBrazilPreto.png?alt=media&token=3b2308c0-dd47-4909-a932-b3f66c4081e4'
                                            title="Made In Brazil" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FMondelez.png?alt=media&token=baf90b7d-90b7-4ab2-8837-6d58d30bf86f'
                                            title="Mondelez" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2Fnickelodeon-logo.png?alt=media&token=41a24aca-d934-4b67-9608-1a539a96d7e2'
                                            title="Nickelodeon" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FNorpal.png?alt=media&token=7b2e1d03-04f5-469c-975e-e042bad9c414'
                                            title="Norpal" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FOito.png?alt=media&token=ff86f98b-960e-4809-b8a7-23996e33d9d2'
                                            title="Oito" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FPetz.png?alt=media&token=2a5b8efb-b7d5-4184-b9cd-e4307a5fbb3b'
                                            title="Petz" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FPil%C3%A3o.png?alt=media&token=175c87aa-c748-467c-8c59-30104aa350da'
                                            title="Pilão" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FPires%26Gon%C3%A7alves.png?alt=media&token=b3f806c8-1c78-4d57-ba00-90ae94c4101c'
                                            title="Pires e Gonçalves" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FRede_Globo_logo.svg.png?alt=media&token=0ee73de5-649d-4e39-875a-5424bb418eed'
                                            title="Rede Globo" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FSchwarzkopf.png?alt=media&token=de5a6d8e-92c1-44ad-8f12-a8d3909e0877'
                                            title="Schwarzkopf" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FSerasa%20Experian.png?alt=media&token=09db3d2c-a3b9-4bd4-92ad-bebd8db376a7'
                                            title="Serasa Experian" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FStarbucksPreto.png?alt=media&token=b4ca2cda-3557-4992-a47a-d01b343f41ce'
                                            title="Starbucks" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FSuite49Preto.png?alt=media&token=a9303920-a949-4f26-98a6-f446981b283b'
                                            title="Suite49" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FTNT.png?alt=media&token=a892add1-6af6-49bf-829f-69a226685b54'
                                            title="TNT" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FTrova.png?alt=media&token=bfe4d335-2f57-4331-a800-da1321f011bc'
                                            title="Trova" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FUbus.png?alt=media&token=995fda5f-86d3-42a6-9be2-fbe4a9fc606f'
                                            title="Ubus" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FVedett.png?alt=media&token=7a7b2571-7c2c-47db-b9bb-e35850a18b14'
                                            title="Vedett" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FViacomBrasil.png?alt=media&token=110f7f61-e2e0-461d-a15e-abbda2a4986e'
                                            title="Viacom Brasil" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FViaDeAcessoRuyLeal.png?alt=media&token=24290128-89cb-4a00-8863-ff9ced389d8a'
                                            title="Via de Acesso" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FWalmart.png?alt=media&token=27d0c7d2-ab34-4651-8f24-4e6bd20a8f0c'
                                            title="Walmart" />
                                    </Lazyload>
                                    <Lazyload>
                                        <Cliente img='https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fclientes%2FWhirpool.png?alt=media&token=481f3899-ac20-4c35-84a6-53925891ce05'
                                            title="Whirpool" />
                                    </Lazyload>
                                </div>
                            </section>

                            <section>
                                <header>
                                    <h2>Portifolio</h2>
                                </header>
                                <div className="col-12 row">
                                    {
                                        this.state.cases.map((data, i) =>
                                            <Lazyload key={i}>
                                                <Case title={data.title} img={data.capa} id={data.id} />
                                            </Lazyload>
                                        )
                                    }
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </Layout >
        )
    }
}