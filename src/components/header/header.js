import React from "react";
import Nav from "./nav";
import Subnav from "./subnav";
import './header.css'

const Header = ({children}) => {
    return (
        <header>
            <Subnav/>
            <Nav/>
            {children}
        </header>
    )
}

export default Header