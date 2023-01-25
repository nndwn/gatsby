import { graphql, useStaticQuery } from "gatsby";

const Menu = () => {
    const menu = useStaticQuery(graphql`
    query{
        allMenuJson {
            nodes {
              id
              menu
            }
          }
    }
    `)
    return menu.allMenuJson.nodes
}

export default Menu