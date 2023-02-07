import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import './css/about.css'

const MainAbout = ({page}) => {
    const data = useStaticQuery (graphql`
    query{
            allMissionJson {
              nodes {
                id
                name
                text
                title
                icon
              }
            }
            allAboutJson {
              nodes {
                title
                id
                text
                image {
                  childImageSharp {
                    gatsbyImageData(quality: 50, placeholder: BLURRED, formats: JPG)
                  }
                }
                name
              }
            }
          }
    `)
    const dataMission = data.allMissionJson.nodes
    return (
      <>
      
     { data.allAboutJson.nodes.map(node => (
        <div className={`${node.id === data.allAboutJson.nodes[0].id ? "about" : "vision" } position-relative py-5`} key={node.id}>
            <div className={ `${node.id === data.allAboutJson.nodes[0].id ? "img-right" : "img-left" } col-12 col-md-6 position-absolute`}>
               <GatsbyImage
                alt= {node.title}
                image ={ getImage(node.image)}
                className="img-about position-absolute"
               />
            </div>
            <div className="text-left container-lg ">
                <div className={`${node.id === data.allAboutJson.nodes[0].id ? "offset-md-6" : "" } col-12 col-md-6  row px-3`}>
                    <h3 className="text-capitalize fw-bold line-text mb-4"> {node.name} </h3>
                    {node.id === data.allAboutJson.nodes[0].id ? "": <h4 className="text-capitalize"> {node.title}</h4>}
                    <p className="lh-base"><mark>{node.text}</mark></p>
                    {node.id === data.allAboutJson.nodes[0].id ?  null == page ? <div className="my-3">
                <Link role="button" className="left col-3 mb-2 p-3" to={node.title}> Read More</Link>
                </div>: "" :"" }
            </div>
            </div>
        </div>
      ))}
      <div className="py-5 mission">
          <div className="container-lg">
            <div className="text-center col-12">
              <h3 className="text-capitalize">{dataMission[0].name}</h3>
            </div>
            <div className="row">
            {dataMission.map(node =>(
              <div className="col-12 col-sm-4 d-flex flex-column text-center align-items-center">
                <div className="mt-3" dangerouslySetInnerHTML={{__html:node.icon}}/>
                <div className="mt-5">
                    <h5 className="fw-bold text-capitalize">{node.title}</h5>
                    <p className="lh-base">{node.text}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
        </>
    )
}

export default MainAbout