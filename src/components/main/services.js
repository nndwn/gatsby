import React,{Suspense, Fragment} from "react";
import { graphql, useStaticQuery} from "gatsby";
import { servicetext } from "../colors";
import { css } from "@emotion/react";
import { Cardlist } from "../tools";

const OfferedComponent = React.lazy(() => import('./offered'))


const MainServices = ({page}) => {
    return (
        <>
        {page == null ? Dataservice().map(node => (
            <div className="services container-lg py-5" >
                <div className="row justify-content-center" key={node.id}>
                    <div className="text-center mb-3">
                        <h3 className="fw-bold text-capitalize line-text" css={css`
                        &::before{
                            background-color: ${servicetext}
                        }
                        `} >{node.name}</h3>
                    </div>
                    <div className="row">
                        {
                            node.type.map(items =>(
                                <Fragment key={items.id}>
                                    <Cardlist image={items.img} title={items.title} desc={items.desc} to={`/services/#${items.title}`}></Cardlist>
                                </Fragment>
                            ))
                        }
                    </div>
                </div>
                </div>
        )):
        <Suspense fallback = {<div>loading ...</div>}>
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
                type {
                    id
                    desc
                    url
                    title
                    img {
                    childImageSharp {
                        gatsbyImageData(formats: JPG, placeholder: BLURRED,height: 250,aspectRatio: 1.5)
                    }
                    }
                    expand {
                        desc
                        id
                        url
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