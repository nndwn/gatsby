import * as React from 'react'
import Header from './header/header'
import { Global, css } from "@emotion/react"
import { colordefault, colorSecond } from './colors'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'
import Main from './main/main'


const Layout =({children, page}) =>{
    return(
        <>
         <Global styles={css`
          :root {
            --defaultcolor: ${colordefault};
            --secondcolor: ${colorSecond};
          }
        `}/>
            <Navbar/>
            <Header page={page}/>
            <Main page={page}>
             {children}
            </Main>
          <Footer/>
        </>
    )
}
export default Layout