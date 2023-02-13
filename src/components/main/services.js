import React,{Suspense, Fragment} from "react";
import { graphql, useStaticQuery} from "gatsby";
import { Cardlist,ContainerCardlist, TitleCardlist} from "../tools";
import { Loading} from "./accesories";

const OfferedComponent = React.lazy(() =>  import('./offered'))


const MainServices = ({page}) => {
    return (
        <>
        {page == null ? Dataservice().map(node => (
                <ContainerCardlist key={node.id}>
                    <TitleCardlist name={node.name}/>
                    <div className="row">
                        {
                            node.type.map(items =>(
                                <Fragment key={items.id}>
                                    <Cardlist image={items.img} title={items.title} desc={items.desc} to={`/${node.menu}/#${items.title}`}></Cardlist>
                                </Fragment>
                            ))
                        }
                    </div>
            </ContainerCardlist>
        )):
        <Suspense fallback = {<Loading/>}>
            <OfferedComponent/>
        </Suspense>
        }
        
        </>
    ) 
}

export const Dataservice = () => {
    const query = useStaticQuery(graphql`
        query {
            allServicesJson {
                nodes {
                id
                name
                menu
                type {
                    id
                    desc
                    title
                    img {
                    childImageSharp {
                        gatsbyImageData(formats: JPG, placeholder: BLURRED,height: 250,aspectRatio: 1.5)
                    }
                    }
                    expand {
                        desc
                        id
                        title
                        img {
                          childImageSharp {
                            gatsbyImageData(formats: JPG, placeholder: BLURRED,height: 250,aspectRatio: 1.5)
                          }
                        }
                      }
                }
                }
            }

            }
        `)
        return query.allServicesJson.nodes
}

export default MainServices