import React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage} from "gatsby-plugin-image";
import { Email, Address, Telp} from "./icons";
import { colorButtonDefault, 
        textButtoncolorDefault,
        colorButtonalt,
        textButtoncoloralt,
        servicetext} from "./colors";
import { css } from "@emotion/react";


export const Linked = ({to , name , cls , title, icon, children}) =>(<a href={`${ to == null  ? '#' : to}`} title={title} className={cls}>{children}{icon}{name}</a>)
export const Capitalize = str => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
export const Truncate = (str,limit,cutfront,cutback) => ( str.length > limit ? str.substring(cutfront, cutback) : str)
export const Icondesc =({name,div,a,span,nameicon,svg,url}) => {
    return(
    <div className={div}>
        <Linked cls={a} to={url}>
            {nameicon === "telp"? <Telp className={svg}/>
            :nameicon === "email" ? <Email className={svg}/>
            :nameicon === "address" ? <Address className={svg}/>
            : ""
            }
            <span className={span}>{name}</span>
        </Linked>
    </div>
)}
export const Button = ({ children, className, to, style}) => {
    const primary = {
        backgroundColor: `${colorButtonDefault}`,
        color: `${textButtoncolorDefault}`
    }
    const secondary = {
        backgroundColor: `${colorButtonalt}`,
        color: `${textButtoncoloralt}`
    }
    return(
    <Link role="button" className={className} to={to} style={style === "primary" ? primary :
    style === "secondary" ? secondary : ""}>
        {children}
    </Link>
)}

export const Cardlist = ({image, title, desc, to}) => (
    <div className="col-md-4 py-2">
        <Link className="card " to={to} css={css`
            height: 100% !important;
        `}>
            <div css={css`
                position: relative;
                height: 14rem;
            `}>
                <GatsbyImage
                    alt={title}
                    image={getImage(image)}
                    className="card-img-top position-absolute"
                    css={css`
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                    `}
                />
            </div>
            <div className="card-body text-center" style={{color:`${servicetext}`}}>
                <h5 className="text-capitalize fw-bold truncate">{title}</h5>
                <p className="card-text truncate">{desc}</p>
            </div>
        </Link>
    </div>
)