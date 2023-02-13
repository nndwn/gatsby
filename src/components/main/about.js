import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Button } from "../tools";
import { colorabout,
        colorbgabout,
        coloraboutmobile,
        colormarkmobile, 
        transparent } from "../colors";
import { css } from "@emotion/react";
import Mission from "./mission";
import { FadeIntop } from "../pageview";

const MainAbout = ({page}) => {
    const data = useStaticQuery (graphql`
    query{
            allAboutJson {
              nodes {
                title
                id
                text
                image {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: JPG)
                  }
                }
                name
              }
            }
          }
    `)
    return (
      <>
      <div css={css`
        .about {
          .img-right {
            left:0;
          }
        }
        .about .img-right, .vision .img-left, .img-about{
          top:0;
          bottom:0;
        }
        .vision {
          .img-left {
              right: 0;
              }
        }
        .vision, .about{
          mark {
            background-color: ${transparent};
            color: inherit;
            }
        }
        .img-about{
          height: -webkit-fill-available;
          opacity: 0.5;
        }
        .about{
          background-color: ${colorbgabout};
        }
        & .img-right, .img-left,.line-text::before {
          background-color: ${colorabout};
        }
        @media (max-width: 768px){
          .about, .vision {
            color:${coloraboutmobile};
              .text-left , .text-right {
                z-index: 2;
                position: relative;
                }
              }
          mark{
            background-color:${colormarkmobile}!important;
            padding: 0;
          }
          .line-text::before{
            background-color: ${coloraboutmobile};
          }
        }
      `}>
     { 
      
      data.allAboutJson.nodes.map(node => 
     { const condition = node.id === data.allAboutJson.nodes[0].id
     return(
        <div className={condition ? "about" : "vision"} key={node.id}>
          <FadeIntop className="position-relative py-5">
            <div className={ `${condition ? "img-right" : "img-left" } col-12 col-md-6 position-absolute`}>
               <GatsbyImage
                alt= {node.title}
                image ={ getImage(node.image)}
                className="img-about position-absolute"
               />
            </div>
            <div className="text-left container-lg ">
              <div className={`${condition ? "offset-md-6" : "" } col-12 col-md-6  row px-3`}>
                    <h3 className="mb-4 fw-bold line-text text-capitalize">{node.name}</h3>
                    {condition ? "": <h4 className="text-capitalize"> {node.title}</h4>}
                    <p className="lh-base"><mark>{node.text}</mark></p>
                    {condition ?  null == page ? <div className="my-3">
                <Button style={`primary`} className="col-3 mb-2 p-3" to={node.title}>Read More</Button>
                </div>: "" :"" }
              </div>
            </div>
          </FadeIntop>
        </div>
      )})}
      </div>
      <Mission/>
      </>
    )
}

export default MainAbout