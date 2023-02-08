import React from "react";
import { Link } from "gatsby";
import { Email, Address, Telp} from "./icons";
import { colorButtonDefault, textButtoncolorDefault,colorButtonalt,textButtoncoloralt} from "./colors";



export const Linked = ({to , name , cls , title, icon, children}) =>(<a href={`${ to == null  ? '#' : to}`} title={title} className={cls}>{children}{icon}{name}</a>)
export const Capitalize = str => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
export const Truncate = (str,limit,cutfront,cutback) => ( str.length > limit ? str.substring(cutfront, cutback) : str)
export const Listurl = ({list, className, to, activeClassName}) => (<li ><Link className={className} activeClassName={activeClassName} to={to}>{list}</Link></li>)
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