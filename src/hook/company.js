import { graphql, useStaticQuery } from "gatsby";
const Company = () => {
    const company = useStaticQuery(graphql`
        query {
          companyJson {
            about
            title
            domain
            telp
            type
            addreas
            email
            icon
            vision
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


