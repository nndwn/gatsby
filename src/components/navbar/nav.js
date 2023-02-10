import React,{ useState } from "react";
import Company from "../../hook/company";
import { graphql, useStaticQuery, Link } from "gatsby";
import BodyClassName from "react-body-classname";
import { css } from "@emotion/react";
import { colornav,colortogle,bgcolornavmobile, hovercolornav, bgcolormodal } from "../colors";
import './css/nav.css'


const Nav = props => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle);
      };
    return(
        <nav  {...props} role= "navigation" className="navigation position-fixed" css={css`
            a{ 
                color: ${colornav};
                &.link--metis:hover{
                    color: ${hovercolornav}  
                }
                &.link--metis::before{
                    background-color: ${hovercolornav}
                }
                &.link--metis.link--active{
                    color: ${hovercolornav}  
                }
            }`}>
            <div className="d-flex py-2 justify-content-between container-lg">
                <div className="logo col-lg-7 col-10 left">
                    <Link to="/">
                        <i dangerouslySetInnerHTML={{__html:Company().icon}}/>
                        <span className=" d-none d-sm-inline h4-lg h5 fw-bold ms-2 text-wrap line-text" css={css`
                         &::before{background-color: ${colortogle};}
                        `}>{Company().title}</span>
                    </Link>
                </div>
                <ul className="d-lg-flex d-none col-5 m-0 align-items-center right justify-content-end">
                    {Navdata().map(node => (
                            <li key={node.id} > <Link activeClassName="link--active" className="link--metis" to={`/${node.menu}`}>{node.menu}</Link></li>
                        ))}
                </ul>
          
                <div className="nav-toggle col-2 d-lg-none align-self-center ">
               
                {toggle && (
                    <div role={'button'} tabIndex={0} onClick={handleClick} onKeyDown={handleClick} className="bg-nav" css={css`
                        background-color: ${bgcolormodal}
                    `}></div>
                )}
                <BodyClassName className={toggle ? 'suppress-scroll' : '' }></BodyClassName>
                <div className="nav-aside position-fixed" aria-hidden= {toggle ? '':true} style={{ visibility: toggle ? 'visible' : 'hidden' }} css={css`
                    background-color:${bgcolornavmobile}
                `}>
                    <ul >
                        <li ><Link className="link--metis" to="/">home</Link></li>
                     
                        {Navdata().map(node => (
                                    <li key={node.id}> <Link className="link--metis" to={`/${node.menu}`}>{node.menu}</Link></li>
                            ))}
                    </ul>
                </div>
                <div className="nav-toggle-bar" css={css`
                    background-color: ${colortogle};
                    &::after {
                        background-color: ${colortogle};
                    }
                    &::before{
                        background-color: ${colortogle};
                    }
                `}></div>
                <div className="nav-trigger" role={'button'} tabIndex={0} onClick={handleClick} onKeyDown={handleClick}></div>
                </div>
               
            </div>
        </nav>
    )
}
export const Navdata = () => {
    const query = useStaticQuery (graphql`
    query {
            allMenuJson {
                nodes {
                  id
                  menu
                }
              }
    } 
    `)
    return query.allMenuJson.nodes
}

export default Nav