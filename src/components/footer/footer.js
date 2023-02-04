import React from "react";
import Company from "../../hook/company";
import './footer.css'
import { StaticQuery,graphql } from "gatsby";
import { Listurl } from "../tools";
//import {Footerutils ,Services, Quicklink, Addinformation} from "./footerutils";


const Footer = () => {
    const {title,logowhite} =  Company()
    return(
    <footer className="footer">
        <div className="container-lg">
        <div>
            <div dangerouslySetInnerHTML={{__html: logowhite}}/>
            <h1>
                {title}
            </h1>
        </div>
        <StaticQuery
            query={graphql`
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
            `}
            render = {data => (
                <>
                    {data.allFooterJson.nodes.map(item => {
                        console.log(Object.values(item))
                        return(
                        <MenuList key={item.id} name={item.name}>
                            {item.name[1] <= item.name ?
                                data.allServicesJson.nodes.map(node=> (
                                <Listurl key={node.id} list={node.title} to={node.url}/>))
                                :item.name[2] <= item.name ? data.allQuicklinkJson.nodes.map(node => (
                                    <Listurl key={node.id} list={node.list} to={node.url}/>))
                                    :""
                                }
                        </MenuList>
                    )})}
                    <MenuList name={data.allFooterJson.nodes[0].name}>
                        {data.allServicesJson.nodes.map(node=> (
                            <Listurl key={node.id} list={node.title} to={node.url}/>
                        ))}
                    </MenuList>
                    <MenuList name={data.allFooterJson.nodes[1].name}>

                    </MenuList>
                </>
            )}
        />
       
        </div>
        <Subfooter title={title}/>
    </footer>
    )
}

export const Subfooter =({title}) =>(
    <footer className="subfooter">
        <p>{new Date().getFullYear()} Ⓒ {title}.  All Right Reserved.</p>
    </footer>
)

const MenuList = ({name,children,className}) => (
    <div className={className}>
        <h3>{name}</h3>
        <ul>
            {children}
        </ul>
    </div>
)




const Quicklink = ({name}) =>{
    return (
        <div>{name}</div>
    )
}
const Addinformation =({name}) => {
    return (
        <div>{name}</div>
    )
}

export default Footer


