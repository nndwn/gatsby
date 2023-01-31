import React from "react";
import { Slidetwo } from "./slidetwo";
import './header.css'

const Header = ({children}) => {
    return (
        <header>
            <Slidetwo/>
            {children}
        </header>
    )
}

export default Header