import React,{useState} from "react";
import Slidedata from "../../hook/sliderdata";
import Carousel from 'react-bootstrap/Carousel';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby";
import './slide.css'
import bg from '../../images/blackt-will.png'

export const Slide = () => {
    const interval = 8000
    const [aktiv] = useState(true)
    const nopause = false
    const nocontrol = false
    const indicator = false
    return (
        <>
        <Carousel 
        pause={nopause}
        controls={nocontrol}
        >
            {
                Slidedata().map(node => (
                    <Carousel.Item key={node.id} interval={interval} >
                        <GatsbyImage 
                            image={getImage(node.slide)}
                            alt = {node.alt}
                            className="vh-100 img-slide"
                        />
                        <div className="bg position-absolute" style={{ backgroundImage: `url(${bg})` }}></div>
                    </Carousel.Item>
                )
                )
            }
        </Carousel>
        <Carousel
        pause={nopause}
        controls={nocontrol}
        indicators = {indicator}
        className = "position-absolute text-fade"
        fade
        >
        {
                Slidedata().map(node => (
                    <Carousel.Item key={node.id} interval={interval} className="text-item" >
                        <div className="headline  position-relative container-lg">
                            <div className="d-flex flex-column align-items-center  vh-100">
                                <div className="d-flex flex-grow-1 flex-column align-items-center justify-content-center  mt-5">
                                    { null == node.textone && aktiv ? "" : <div className="h6 fw-bold text-center">{node.textone}</div>}
                                    { null == node.texttwo && aktiv ? "" : <div className="h2 fw-bold text-center">{node.texttwo}</div>}
                                    { null == node.textthree && aktiv ? "" : <div className="h2 fw-bold text-center">{node.textthree}</div>}
                                    { null == node.textfour && aktiv ? "" : <div className="fs-6 fw-light text-break text-center">{node.textfour}</div>}
                                </div>
                                { node.button[0].value + node.button[1].value > 0 && aktiv ? <div className="d-flex buttons mb-5">
                                    {node.button[0].value > 0 && aktiv ? <Link className="left " to={node.button[0].url}>{node.button[0].name}</Link>:""}
                                    {node.button[1].value > 0 && aktiv ? <Link className="right" to={node.button[1].url}>{node.button[1].name}</Link>:""}
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


