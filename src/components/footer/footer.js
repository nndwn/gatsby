import React from "react";
import Company from "../../hook/company";
import { useStaticQuery,graphql, Link } from "gatsby";
import {Icondesc} from "../tools";
import { Sosial } from "../sosial";
import styled from "@emotion/styled";
import stylelist from "../../images/icon_list_1.svg"
import { Dataservice } from "../main/services";
import { footer, subfooter, textfooter } from "../colors";
import { css } from "@emotion/react";

const Ul = styled.ul`
    list-style-image: url('${stylelist}');
`
const Footer = () => {
    const {title,logowhite,addreas,email,telp} =  Company()
    const data = useStaticQuery(graphql`
        query{
            allQuicklinkJson {
                nodes {
                  id
                  name
                  list {
                    url
                    item
                    id
                  }
                }
              }
        }
    `)
    return(
    <footer className="footer pt-5" css={css`
        color:${textfooter};
        font-size: 0.8rem;
        background-color: ${footer};
        svg {
            fill:${textfooter};
        }
        a {
            color:${textfooter};
        }
    `}>
        <div className="container-lg footer-top pb-4 ">
            <div className="row justify-content-center">
                <div className="logo col-9 col-sm-6 col-md-2 d-flex flex-row mb-5 align-items-center" css={css`
                    gap: 2rem;
                    svg {
                        height: 5rem;
                    }
                `}>
                    <div dangerouslySetInnerHTML={{__html: logowhite}}/>
                    <h4 className="h5 text-capitalize fw-bold m-0">{title}</h4>
                </div>
                <div className="col-12 col-md-10 d-flex justify-content-md-end flex-wrap justify-content-around">
                    {Dataservice().map(node => (
                        <Footerlist key={node.id} name={node.name}>
                            {node.type.map(item => (
                                <li className="text-capitalize fw-normal ml-3" key={item.id}><Link  to={`/${node.menu}/#${item.title}`} >{item.title}</Link></li>
                                ))}
                        </Footerlist>
                    ))}
                    {data.allQuicklinkJson.nodes.map(node => (
                        <Footerlist key={node.id} name={node.name}>
                                {node.list.map(item =>(
                                    <li className="text-capitalize fw-normal ml-3" key={item.id}><Link to={item.url}>{item.item}</Link></li>
                                ))}
                        </Footerlist>
                    ))}
                    <div className="col-md-3 col-10">
                        <h4 className="text-capitalize fw-bold m-0">Contact & Address</h4>
                        <div css={css`
                            svg {
                                height:1rem;
                            }
                            .email {
                                height: 0.8rem;
                            }
                            a{
                                column-gap: 1rem;
                                grid-template-columns: 1.2rem auto;
                            }
                        `}>
                            <Icondesc a="d-grid align-items-center" name={addreas} span="text-wrap" nameicon="address"/>
                            <Icondesc a="d-grid align-items-center" name={telp} span="truncate" nameicon="telp"/>
                            <Icondesc a="d-grid align-items-center" svg="email" span = "truncate" name={email} nameicon="email"/>
                            <Sosial className="sosial text-center my-3" a="px-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subfooter title={title}/>
    </footer>
    )
}
const Footerlist = ({name, children}) => (
    <div className="col-md-3 mb-3">
        <h4 className="text-capitalize fw-bold m-0">{name}</h4>
        <Ul>
            {children}
        </Ul>
    </div>
)

const Subfooter =({title}) =>(
    <footer className="footer-bottom py-3 text-center" style={{backgroundColor:`${subfooter}`}}>
        <span className=" fw-light">{new Date().getFullYear()} Ⓒ {title}.  All Right Reserved.</span>
    </footer>
)

export default Footer


