import React from "react";
import { Slide } from "./slide";
import './header.css'
import SSRProvider from 'react-bootstrap/SSRProvider';

const Header = ({children}) => {
    return (
        
        <header>
        <SSRProvider>
         <Slide/>
        </SSRProvider>
          
            {children}
        </header>
    )
}

export default Header