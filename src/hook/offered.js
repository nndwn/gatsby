import { graphql, useStaticQuery } from "gatsby";

const Offered = () => {
    const offered = useStaticQuery(graphql`
    query{
      allOfferedJson {
        nodes {
          id
          title
          img
          desc
        }
      }
    }
    `)
    return offered.allOfferedJson.nodes
  }

  export default Offered