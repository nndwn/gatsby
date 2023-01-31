import { graphql, useStaticQuery } from "gatsby";
const Slidedata = () => {
    const data = useStaticQuery( graphql`
        query {
            allSliderJson {
                nodes {
                    slide {
                        childImageSharp {
                            original {
                                src
                              }
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH, placeholder: BLURRED)
                        }
                    }
                    id
                    alt
                    textone
                    texttwo
                    textthree
                    textfour
                    button {
                        name
                        url
                        value
                    }
                }
            }
        } 

        `
    )
    return data.allSliderJson.nodes
}

export default Slidedata