import { graphql, useStaticQuery } from "gatsby";
const Company = () => {
    const company = useStaticQuery(graphql`
        query {
          companyJson {
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
    `)
    return company.companyJson
}
export default Company


