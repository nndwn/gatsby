import React,{ useState } from "react";
import Company from "../../hook/company";
import Menu from "../../hook/menu";
import { Link } from "gatsby";
import BodyClassName from "react-body-classname";
import './nav.css'

//import { css } from "@emotion/react"


const Nav = () => {
    const [toggle, setToggle] = useState(false)

    return(
        <nav role= "navigation" className="container-lg navigation">
            <div className="d-flex py-2 justify-content-between">
                <div className="logo col-lg-7 col-10 left">
                    <Link to="/">
                        <i dangerouslySetInnerHTML={{__html:Company().icon}}/>
                        <span className=" d-none d-sm-inline h4-lg h5 fw-bold ms-2 text-wrap">{Company().title}</span>
                    </Link>
                </div>
                <ul className="d-lg-flex d-none col-5 m-0 align-items-center right justify-content-end">
                    {Menu().map(node => (
                            <li key={node.id}>
                                <Link className="link--metis" to= {`/${node.menu}`} >{node.menu}</Link>
                            </li>
                        ))}
                </ul>
          
                <div className="nav-toggle col-2 d-lg-none align-self-center ">
               
                {toggle && (
                    <div className="bg-nav"></div>
                )}
                <BodyClassName className={toggle ? 'suppress-scroll' : '' }></BodyClassName>
                <div className="nav-aside position-fixed" style={{ visibility: toggle ? 'visible' : 'hidden' }}>
                    <ul >
                        <li ><Link className="link--metis" to="/">home</Link></li>
                     
                        {Menu().map(node => (
                                <li key={node.id}>
                                    <Link className="link--metis" to= {`/${node.menu}`} >{node.menu}</Link>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="nav-toggle-bar"></div>
                <div className="nav-trigger" onClick={() => setToggle(!toggle)} ></div>
                </div>
               
            </div>
        </nav>
    )
}



export default Nav