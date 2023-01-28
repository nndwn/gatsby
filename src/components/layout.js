import * as React from 'react'
import Header from './header/header'
import { Global, css } from "@emotion/react"
import { colordefault, colorSecond } from './colors'
//import Testing from './testing'

const Layout =({children}) =>{

    return(
        <div>
         <Global styles={css`
          :root {
            --defaultcolor: ${colordefault};
            --secondcolor: ${colorSecond};
          }
        `}/>
            <Header/>
            <main>
            <Layout/>
       
                {children}
            </main>
        </div>
    )
}
export default Layout