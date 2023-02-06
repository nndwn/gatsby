import React,{ useState } from "react";
import Company from "../../hook/company";
import { graphql, useStaticQuery, Link } from "gatsby";
import BodyClassName from "react-body-classname";
import { Listurl } from "../tools";
import './nav.css'

//import { css } from "@emotion/react"

const Nav = props => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle);
      };
    return(
        <nav  {...props} role= "navigation" className="navigation position-fixed">
            <div className="d-flex py-2 justify-content-between container-lg">
                <div className="logo col-lg-7 col-10 left">
                    <Link to="/">
                        <i dangerouslySetInnerHTML={{__html:Company().icon}}/>
                        <span className=" d-none d-sm-inline h4-lg h5 fw-bold ms-2 text-wrap">{Company().title}</span>
                    </Link>
                </div>
                <ul className="d-lg-flex d-none col-5 m-0 align-items-center right justify-content-end">
                    {Menu().map(node => (
                            <Listurl key={node.id} activeClassName="link--active" className="link--metis" to={`/${node.menu}`} list= {node.menu}/>
                        ))}
                </ul>
          
                <div className="nav-toggle col-2 d-lg-none align-self-center ">
               
                {toggle && (
                    <div role={'button'} tabIndex={0} onClick={handleClick} onKeyDown={handleClick} className="bg-nav"></div>
                )}
                <BodyClassName className={toggle ? 'suppress-scroll' : '' }></BodyClassName>
                <div className="nav-aside position-fixed" aria-hidden={true} style={{ visibility: toggle ? 'visible' : 'hidden' }}>
                    <ul >
                        <li ><Link className="link--metis" to="/">home</Link></li>
                     
                        {Menu().map(node => (
                                    <Listurl key={node.id} className="link--metis" to={`/${node.menu}`} list={node.menu}/>
                            ))}
                    </ul>
                </div>
                <div className="nav-toggle-bar"></div>
                <div className="nav-trigger" role={'button'} tabIndex={0} onClick={handleClick} onKeyDown={handleClick}></div>
                </div>
               
            </div>
        </nav>
    )
}
const Menu = () => {
    const menu = useStaticQuery(graphql`
    query{
        allMenuJson {
            nodes {
              id
              menu
            }
          }
    }
    `)
    return menu.allMenuJson.nodes
}


export default Nav