import React, { Fragment } from "react";
import { graphql, useStaticQuery,Link } from "gatsby";
import { getImage, GatsbyImage} from "gatsby-plugin-image";
import { Truncate } from "../tools";
import './css/services.css'
import { servicetext } from "../colors";
import { css } from "@emotion/react";

const MainServices = ({page}) => {
    return (
        <div className="services container-lg py-5" >
        {page == null ? Dataservice().map(node => (
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
                                <div key={items.id} className="col-md-4 py-2">
                                <Link className="card d-grid" to={`/services/#${items.title}`} css={css`
                                    height: 100% !important;
                                    grid-template-rows: 65% auto;
                                `}>
                                    <div>
                                        <GatsbyImage
                                            alt={items.title}
                                            image={getImage(items.img)}
                                            className="card-img-top"
                                        />
                                    </div>
                                    <div className="card-body text-center" style={{color:`${servicetext}`}}>
                                        <h5 className="text-capitalize fw-bold truncate">{items.title}</h5>
                                        <p className="card-text truncate">{items.desc}</p>
                                    </div>
                                  </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
           
        )):
        Dataservice().map(node => (
            <div className="row justify-content-center" key={node.id}>
                {node.type.map(items => (
                    <Fragment key={items.id}>
                        <div className="text-center mb-3 mt-4">
                        <h3 id={items.title} className="fw-bold text-capitalize line-text" css={css`
                        &::before{
                            background-color: ${servicetext}
                        }
                        `} >{items.title}</h3>
                        </div>
                        <div className="row ">
                            {items.expand.map(list =>(
                                <div key={list.id} className="col-md-4 py-2">
                                <Link className="card d-grid" to={list.url} css={css`
                                    height: 100% !important;
                                    grid-template-rows: 60% auto;
                                `}>
                                    <div className="item-image">
                                        <GatsbyImage
                                            alt={list.title}
                                            image={getImage(list.img)}
                                            className="card-img-top img"
                                        />
                                    </div>
                                    <div className="card-body text-center" style={{color:`${servicetext}`}}>
                                        <h5 className="text-capitalize fw-bold truncate">{list.title}</h5>
                                        <p className="card-text truncate">{list.desc}</p>
                                    </div>
                                  </Link>
                                </div>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>
        ))
        }
        </div>
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