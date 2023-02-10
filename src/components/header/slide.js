import React,{useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from "gatsby";
import './css/slide.css'
import bg from '../../images/blackt-will.png'
import { colorHeader, bgcolorHeader } from "../colors";
import { Button } from "../tools";

export const Slide = () => {
    const interval = 8000
    const [aktiv] = useState(true)
    return (
        <>
        <Carousel 
        pause={false}
        controls={false}
        touch = {true}
        wrap = {true}
        >
            {
                Slidedata().map(node => (
                    <Carousel.Item key={node.id} interval={interval} >
                        <GatsbyImage 
                            image={getImage(node.slide)}
                            alt = {node.alt}
                            className="vh-100 img-slide"
                        />
                        <Bgheader/>
                        <div className="position-absolute headline row justify-content-center" style={{color:`${colorHeader}`}}>
                            <div className="align-self-center col-lg-6">
                                <div className="d-grid">
                                    { null == node.textone && aktiv ? "" : <div className="h6 fw-bold text-center">{node.textone}</div>}
                                    { null == node.texttwo && aktiv ? "" : <div className="h2 fw-bold text-center m-0">{node.texttwo}</div>}
                                    { null == node.textthree && aktiv ? "" : <div className="h2 fw-bold text-center">{node.textthree}</div>}
                                    { null == node.textfour && aktiv ? "" : <div className="fs-6 fw-light text-break text-center">{node.textfour}</div>}
                                </div>
                                { node.button[0].value + node.button[1].value > 0 && aktiv ? <div className="mt-5 d-flex buttons justify-content-center">
                                    {node.button[0].value > 0 && aktiv ? <Button style={`primary`} className="left mx-2 col-4 mb-2 p-3" to={node.button[0].url}>{node.button[0].name}</Button>:""}
                                    {node.button[1].value > 0 && aktiv ? <Button style={`secondary`}  className="right mx-2 col-4 mb-2 p-3" to={node.button[1].url}>{node.button[1].name}</Button>:""}
                                </div>:null}
                            </div>
                        </div>
                    </Carousel.Item>
                )
                )
            }
        </Carousel>
        </>
    )

}
export const Bgheader = () => (
    <div className="colorheader position-absolute" style={{ backgroundImage: `url(${bg})`, backgroundColor:`${bgcolorHeader}` }}></div>
) 

export const Slidedata = () => {
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

