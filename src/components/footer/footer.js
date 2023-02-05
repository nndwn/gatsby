import React from "react";
import Company from "../../hook/company";
import './footer.css'
import { useStaticQuery,graphql } from "gatsby";
import { Listurl, Icondesc } from "../tools";
import { Sosial } from "../sosial";
import styled from "@emotion/styled";
import stylelist from "../../images/icon_list_1.svg"

const Ul = styled.ul`
    list-style-image: url('${stylelist}');
`

const Footer = () => {
    const {title,logowhite,addreas,email,telp} =  Company()
    const data = useStaticQuery(graphql`
    query {
        allFooterJson {
            nodes {
                id
                name
            }
        }
        allServicesJson {
            nodes {
                id
                title
                url
            }
        }
        allQuicklinkJson {
            nodes {
                id
                url
                list
            }
        }
    }
    `)
    return(
    <footer className="footer ">
        <div className="container-lg footer-top pt-5 pb-4 ">
        <div className="row flex-row justify-content-center">
            <div className="logo col-8 col-md-2 d-flex flex-row mb-5">
                <div dangerouslySetInnerHTML={{__html: logowhite}}/>
                <h4 className="h5">{title}</h4>
            </div>
            <div className="col-12 col-md-10 d-flex justify-content-end flex-wrap">
        {data.allFooterJson.nodes.map(item => {
            return(
                <MenuList key={item.id} name={item.name} className={item.name.replace(/\W/g, "")}>
                {item.name[1] <= item.name ? data.allServicesJson.nodes.map(node=> (
                    <Listurl key={node.id} list={node.title} to={node.url}/>))
                    :item.name[2] <= item.name ? data.allQuicklinkJson.nodes.map(node => (
                        <Listurl key={node.id} list={node.list} to={node.url}/>))
                        :item.name[0] <= item.name ? 
                        <>
                            <li><Icondesc a="c" name={addreas} span="truncate" nameicon="address"/></li>
                            <li><Icondesc a="c" name={telp} span="truncate" nameicon="telp"/></li>
                            <li><Icondesc a="c" svg="email" span = "truncate" name={email} nameicon="email"/></li>
                            <li><Sosial className="sosial text-center"/></li>
                        </>
                        : "" }
                </MenuList>
                    )})}
                    </div>
        </div>
        </div>
        <Subfooter title={title}/>
    </footer>
    )
}

const Subfooter =({title}) =>(
    <footer className="footer-bottom py-3 text-center ">
        <span className="fs-6 fw-light">{new Date().getFullYear()} Ⓒ {title}.  All Right Reserved.</span>
    </footer>
)

const MenuList = ({name,children,className}) => (
    <div className={className}>
        <h4>{name}</h4>
        <Ul>
            {children}
        </Ul>
    </div>
)

export default Footer


