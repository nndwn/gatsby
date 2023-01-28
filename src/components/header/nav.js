import * as React from "react";
import Company from "../../hook/company";
import Menu from "../../hook/menu";
import { Link } from "gatsby";
import { Linked } from "../tools";
import './nav.css'
//import { css } from "@emotion/react"

const Nav = () => {
 
    return(
        <nav role= "navigation" className="container-lg navigation">
            <div className="d-flex py-2 justify-content-between">
                <div className="logo col-lg-7 col-10 left">
                    <Link to="/">
                        <i dangerouslySetInnerHTML={{__html:Company().icon}}/>
                        <span className=" d-none d-sm-inline h4-lg h5 fw-bold ms-2 text-wrap">{Company().title}</span>
                    </Link>
                </div>
                <ul className="d-lg-flex d-none col-5 m-0 align-items-center right justify-content-end">
                    {Menu().map(node => (
                            <li key={node.id}>
                                <Link className= "link--metis" to= {`/${node.menu}`} >{node.menu}</Link>
                            </li>
                        ))}
                </ul>
                <div className="nav-toggle col-2 d-lg-none align-self-center expand">
                    <div className="nav-toggle-bar"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav