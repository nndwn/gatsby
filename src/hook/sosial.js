import { graphql, useStaticQuery } from "gatsby";

const Sosial = () => {
    const sosial = useStaticQuery(graphql`
    query{
      allSosialJson {
        nodes {
          id
          name
          link
          username
        }
      }
    }
    `)
    return sosial.allSosialJson.nodes
  }

export default Sosial