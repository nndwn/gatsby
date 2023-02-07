import { graphql, useStaticQuery } from "gatsby";
const Company = () => {
    const company = useStaticQuery(graphql`
        query {
          companyJson {
            description
            title
            domain
            telp
            type
            addreas
            email
            icon
            logo {
              publicURL
            }
            logowhite
          }
        }
    `)
    return company.companyJson
}
export default Company


