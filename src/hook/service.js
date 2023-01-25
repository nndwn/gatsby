import { graphql, useStaticQuery } from "gatsby";

const Services = () =>{
    const services = useStaticQuery(graphql`
    query{
      allServicesJson {
        nodes {
          id
          title
          img
          desc
        }
      }
    }
    `)
    return services.allServicesJson.nodes
  }
  
  export default Services