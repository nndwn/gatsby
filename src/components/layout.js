import * as React from 'react'
import Header from './header/header'
import { Global, css } from "@emotion/react"
import { colordefault, colorSecond } from './colors'
import Testing from './testing'
import Nav from './navbar/nav'
import Subnav from './navbar/subnav'

const Layout =({children}) =>{

    return(
        <>
         <Global styles={css`
          :root {
            --defaultcolor: ${colordefault};
            --secondcolor: ${colorSecond};
          }
        `}/>
            <Subnav/>
            <Nav/>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}
export default Layout