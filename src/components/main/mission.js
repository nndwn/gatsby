import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";
import { colorbgabout, colorabout} from "../colors";

const Mission = () => {
    const query = useStaticQuery(graphql`
        query {
            allMissionJson {
                nodes {
                  id
                  name
                  list {
                    icon
                    id
                    text
                    title
                  }
                }
              }
        }
    `)
    const data = query.allMissionJson.nodes
    return (
        <div className="py-5 mission" css={css`
            background-color: ${colorbgabout};
            svg{
                fill: ${colorabout};
            }
        `}>
        {data.map(node => (
          <div className="container-lg" key={node.id}>
              <div className="text-center col-12">
                <h3 className="text-capitalize">{node.name}</h3>
              </div>
              <div className="row">
              {node.list.map(node =>(
                <div key={node.id} className="col-12 col-sm-4 d-flex flex-column text-center align-items-center">
                  <div className="mt-3" dangerouslySetInnerHTML={{__html:node.icon}}/>
                  <div className="mt-5">
                      <h5 className="fw-bold text-capitalize">{node.title}</h5>
                      <p className="lh-base">{node.text}</p>
                  </div>
                </div>
              ))}
              </div>
          </div>
        ))}
        </div>
    )
}

export default Mission