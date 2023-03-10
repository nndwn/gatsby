import React from "react"
import Company from "../hook/company";
import { Script } from "gatsby";
import { colordefault } from "./colors";
import { Truncate } from "./tools";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title, desc, pathname, children}) =>{
    const{ title: titledefault, description: descdefault, logo, domain, telp, type} = Company()
    const twitter = useStaticQuery(graphql`
    query MyQuery {
      sosialJson(name: {eq: "twitter"}) {
        username
      }
    }
    `)

    const seo ={
        title: title || titledefault,
        desc: desc || descdefault,
        image: `${domain}${logo.publicURL}`,
        url : `${domain}${pathname || ''}`,
    }
    const short = Truncate(seo.desc,120,0,200);
    const e = '{`\n'+
    '              {\n'+
    '                "@context": "https://schema.org",\n'+
    '                "@type": "'+ type +'",\n'+
    '                "url": "'+domain+'"\n'+
    '                "name": "' + seo.title +'",\n'+
    '                "logo": "'+ seo.image+'",\n'+
    '                "contactPoint": {\n'+
    '                    "@type": "ContactPoint",\n'+
    '                    "telephone": "'+telp+'",\n'+
    '                    "contactType": "Customer Support"\n'+
    '                },\n'+
    '                "potentialAction":[\n'+
    '                     {"@type": "SeachAction", \n'+
    '                     "target":{\n'+
    '                         "@type":"EntryPoint",\n'+
    '                         "urlTemplate:"https://query.example.com/search?q={search_term_string}"},\n'+
    '                      "query-input":"required name=search_term_string"},\n'+
    '                     {"@type": "SeachAction",\n'+
    '                     "target":{\n'+
    '                         "@type":"EntryPoint",\n'+
    '                         "urlTemplate:"https://query.example.com/search?q={search_term_string}"},\n'+
    '                      "query-input":"required name=search_term_string"}],\n'+
    '            }\n'+
    '`}\n';
    return (
        <>
          <title>{seo.title}</title>
          <Script type="application/ld+json" strategy="off-main-thread">{e}</Script>
          <meta name="description" content={short} />
          <meta name="image" content={seo.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:url" content={seo.url} />
          <meta name="twitter:description" content={short} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:creator" content={twitter.sosialJson.username} /> 
          <meta name="msapplication-TileColor" content={colordefault}/>
          <meta content={colordefault} name="theme-color"/>
          <meta content={colordefault} name="msapplication-navbutton-color"/>
          {children}
        </>
      )
}

export default Seo