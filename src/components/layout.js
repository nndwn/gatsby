import * as React from 'react'
import { Link } from 'gatsby'
import { Subnav, Nav } from '../components/nav'

const Layout =({children})=>{
    return(
        <div>
            <Subnav/>
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout