import { graphql, useStaticQuery } from "gatsby";
const Company = () => {
    const company = useStaticQuery(graphql`
        query {
          allCompanyJson {
            nodes {
              about
              title
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


