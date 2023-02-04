import React from "react";
import { graphql,StaticQuery } from "gatsby";


export const Footerutils = ({name})=> (
    <>
        <Services name={name}/>
        <Quicklink name={name}/>
        <Addinformation name={name}/>
    </>
) 
export const Services = ({name}) => (
    <div>{ name}</div>
)
export const Quicklink = ({name}) =>{
    return (
        <div>{name}</div>
    )
}
export const Addinformation =({name}) => {
    return (
        <div>{name}</div>
    )
}