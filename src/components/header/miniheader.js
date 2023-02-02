import * as React from 'react'
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {Slidedata } from './slide';
import './miniheader.css'
import bg from '../../images/blackt-will.png'


const Miniheader = ({title}) => {
    const img = getImage(Slidedata()[0].slide)
     return(
            <div className='miniheader position-relative d-flex align-items-center '>
                <GatsbyImage 
                    image={img}
                    alt={Slidedata()[0].alt}
                    className="miniheader__image position-absolute"
                />
                 <div className="bg position-absolute" style={{ backgroundImage: `url(${bg})` }}></div>
                <div className='text container-lg text-center text-md-start'>
                    <h1 className='fw-bold text-capitalize pt-5 line-text'>{title} </h1>
                </div>
            </div>

     ) 


}


export default Miniheader