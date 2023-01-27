import * as React from "react";
import Company from "../../hook/company";
import Menu from "../../hook/menu";
import { Link } from "gatsby";
import { Linked } from "../tools";
//import { css } from "@emotion/react"

const Nav = () => {

    return(
        <ul>
            {
                Menu().map(node => (
                    <li key={node.id}>
                        <Link to= {`/${node.menu}`} >{node.menu}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Nav