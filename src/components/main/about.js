import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Button } from "../tools";
import { colorabout,colorbgabout,coloraboutmobile,colormarkmobile } from "../colors";
import { css } from "@emotion/react";
import './css/about.css'

const MainAbout = ({page}) => {
    const data = useStaticQuery (graphql`
    query{
            allMissionJson {
              nodes {
                id
                name
                list {
                  icon
                  id
                  text
                  title
                }
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
      <div css={css`
        .line-text::before {
          background-color: ${colorabout};
        }
        .mission, .about{
          background-color: ${colorbgabout};
        }
        & svg{
          fill: ${colorabout};
        }
        & .img-right, .img-left {
          background-color: ${colorabout};
        }
        @media (max-width: 768px){
          .about, .vision {color:${coloraboutmobile};
          }
          mark{
            background-color:${colormarkmobile}!important;
          }
          .line-text::before{
            background-color: ${coloraboutmobile};
          }
        }
      `}>
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
                    <h3 className="mb-4 fw-bold line-text text-capitalize">{node.name}</h3>
                    {node.id === data.allAboutJson.nodes[0].id ? "": <h4 className="text-capitalize"> {node.title}</h4>}
                    <p className="lh-base"><mark>{node.text}</mark></p>
                    {node.id === data.allAboutJson.nodes[0].id ?  null == page ? <div className="my-3">
                <Button style={`primary`} className="col-3 mb-2 p-3" to={node.title}>Read More</Button>
                </div>: "" :"" }
            </div>
            </div>
        </div>
      ))}
      <div className="py-5 mission">
      {dataMission.map(node => (
        <div className="container-lg" key={node.id}>
            <div className="text-center col-12">
              <h3 className="text-capitalize">{node.name}</h3>
            </div>
            <div className="row">
            {node.list.map(node =>(
              <div key={node.id} className="col-12 col-sm-4 d-flex flex-column text-center align-items-center">
                <div className="mt-3" dangerouslySetInnerHTML={{__html:node.icon}}/>
                <div className="mt-5">
                    <h5 className="fw-bold text-capitalize">{node.title}</h5>
                    <p className="lh-base">{node.text}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
      ))}
      </div>
        </div>
    )
}

export default MainAbout