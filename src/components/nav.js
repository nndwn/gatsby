import React from "react";
import { Email, Address, Telp, Twitter, Linkend, Facebook } from "./icons";
import Sosial from "../hook/sosial";
import Company from "../hook/company";
import Menu from "../hook/menu";
import { Link } from "gatsby";

const Sosiallist = ({name, link, username})=>{
    const e = link + username
    return(<a href={e} title={name}>{name}</a>)
}

export const Subnav = () => {
    const sosial = Sosial()
    const sosiallist = sosial.map((sosial) =>
        <Sosiallist  key={sosial.id} name={sosial.name} link={sosial.link} username={sosial.username}/>
    )  

    return(
        <div>{sosiallist}</div>
    )
}

export const Nav = () => {

    return(
        <ul>
            {
                Menu().map(node => (
                    <li key={node.id}>
                        <a href= {`${ node.menu === "/" ? '':'/'}${node.menu}`} title={node.menu} >{node.menu}</a>
                    </li>
                ))
            }
        </ul>
    )
}
