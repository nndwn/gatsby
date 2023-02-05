import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Linked } from "./tools";

export const Sosial = ({className}) => {
    const sosial = useStaticQuery(graphql`
    query{
      allSosialJson {
        nodes {
          id
          name
          link
          username
          icon
        }
      }
    }
    `)
    return (
      <div className={className}>
        {
          sosial.allSosialJson.nodes.map(sosial => (
            <Linked key={sosial.id} title={sosial.name} to={`${sosial.link + sosial.username}`}>
                    <i dangerouslySetInnerHTML={{__html:sosial.icon}}/>
            </Linked>
          ))
        }
      </div>
      )
  }
