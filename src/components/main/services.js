import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Truncate } from "../tools";

const MainServices = () => {
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
                  }
                }
              }
            }
    `)
    const dataServices = query.allServicesJson.nodes
    return (
        <>
        {dataServices.map(node => (
            <div className="services container-lg py-5" key={node.id}>
                <div className="row">
                    <div className="text-center">
                        <h3 className="fw-bold text-capitalize">{node.name}</h3>
                    </div>
                    <div className="row">
                        {
                            node.type.map(items =>(
                                <div key={items.id} className="col-md-4 py-2">
                                    <div className="border">
                                    <div>
                                        <GatsbyImage
                                            alt={items.title}
                                            image={getImage(items.img)}
                                        />
                                    </div>
                                    <div>
                                        <h5>{items.title}</h5>
                                        <p>{items.desc}</p>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ))}
        </>
    ) 
}

export default MainServices