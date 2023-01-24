import { graphql, useStaticQuery } from "gatsby";


const Company = () => {
    const company = useStaticQuery(graphql`
        query {
          allCompanyJson {
            nodes {
              about
              title
              sosial {
                facebook
                twitter
                linkedin
              }
              logo
              domain
              telp
              type
              addreas
              email
              icon
              vision
            }
          }
        }
    `)
    return company.allCompanyJson.nodes
}

export default Company