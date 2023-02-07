import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const MainAbout = () => {
    const data = useStaticQuery (graphql`
    query {
            allAboutpagesJson {
              nodes {
                id
                name
              }
            }
            aboutJson {
              id
              title
              text
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            allMissionJson {
              nodes {
                id
                name
                text
                title
                icon
              }
            }
          }
    `)
    return (
        <div className="about row">
            <div className="img-right col-12 col-md-6">
                {}
            </div>
            <div className="text-left container-lg">
                <div className="col-12 col-md-6 offset-md-6">

                </div>
            </div>
            <h1>About</h1>
        </div>
    )
}

export default MainAbout