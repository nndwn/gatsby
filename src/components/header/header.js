import React from "react";
import { Slide } from "./slide";
import Miniheader from "./miniheader";


const Header = ({children, page}) =>(
        <header className="position-relative">
        {page == null ? <Slide/>:<Miniheader title={page}/>}
        {children}
        </header>
    )

export default Header