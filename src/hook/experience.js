import { graphql, useStaticQuery } from "gatsby";

const Experience = () => {
    const experience = useStaticQuery(graphql`
    query{
        allExperienceJson {
            nodes {
              id
              title
              img
              desc
            }
          }
    }`)
    return experience.allExperienceJson.nodes
  }

export default Experience