import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Cardlist,ContainerCardlist,TitleCardlist } from "../tools";

const MainExperience = () => {
    const query = useStaticQuery(graphql`
        query {
            allExperienceJson {
                nodes {
                  id
                  name
                  list {
                    id
                    title   
                    desc
                    img {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
        } 
    `)
    const data = query.allExperienceJson.nodes
    return (
      <>
        {data.map(node => (
          <ContainerCardlist key={node.id}>
            <TitleCardlist name={node.name}/>
            <div className="row">
              {
                node.list.map(items => (
                  <Fragment key={items.id}>
                      <Cardlist image={items.img} title={items.title} desc={items.desc} to="#"/>
                  </Fragment>
                ))
              }
            </div>
          </ContainerCardlist>

      
        ))}
      </>
    )
}

export default MainExperience