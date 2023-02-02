import React from "react";
import { Slide } from "./slide";
import Miniheader from "./miniheader";
import './header.css'


const Header = ({children, page}) =>(
        <header>
        {page == null ? <Slide/>:<Miniheader title={page}/>}
        {children}
        </header>
    )

export default Header