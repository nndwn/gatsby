import React from "react";
import { Slide } from "./slide";
import './header.css'

const Header = ({children}) => {
    return (
        <header>
            <Slide/>
            {children}
        </header>
    )
}

export default Header