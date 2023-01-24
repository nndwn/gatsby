import React from "react"
//import { Meta } from "../hook/meta"
import Company from "../hook/company";
import { Script } from "gatsby";
import tailwindConfig from "../../tailwind.config";

const defaultcolor =  tailwindConfig.theme.extend.colors.blueTheme
function Truncate(str) {
  return str.length > 120 ? str.substring(37, 200) : str;
}

const Seo = ({ title, desc, pathname, children}) =>{
    const{ title: titledefault, about: descdefault, logo, domain, sosial, telp, type} = Company()[0]
    const twitter = Object.values(sosial[0])
    const seo ={
        title: title || titledefault,
        desc: desc || descdefault,
        image: `${domain}${logo}`,
        url : `${domain}${pathname || ''}`,
    }
    const short = Truncate(seo.desc);
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
          <Script type="application/ld+json" strategy="off-main-thread">
            {e}
          </Script>
          <meta name="description" content={short} />
          <meta name="image" content={seo.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:url" content={seo.url} />
          <meta name="twitter:description" content={short} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:creator" content={twitter} />
          <meta name="msapplication-TileColor" content={defaultcolor}/>
          <meta content={defaultcolor} name="theme-color"/>
          <meta content={defaultcolor} name="msapplication-navbutton-color"/>
          {children}
        </>
      )
}

export default Seo