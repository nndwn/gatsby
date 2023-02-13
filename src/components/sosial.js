import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Linked } from "./tools";
import { a } from "@react-spring/web";

export const Sosial = ({className, a}) => {
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
            <Linked cls={a} key={sosial.id} title={sosial.name} to={`${sosial.link + sosial.username}`}>
                    <i dangerouslySetInnerHTML={{__html:sosial.icon}}/>
            </Linked>
          ))
        }
      </div>
      )
  }
