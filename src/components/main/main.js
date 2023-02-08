import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import MainAbout from "./about";
import MainServices from "./services";
import MainExperience from "./experi";
import "./css/main.css"

const Main = ({children, page}) => {
    const query =  useStaticQuery (graphql`
    query {
      allMenuJson {
        nodes {
          menu
          id
        }
      }
    }
  `)
  const data =  query.allMenuJson.nodes
    return (
        <main>
            {null == page || page === data[0].menu ? <MainAbout page={page}/>:""}
            {null == page || page === data[1].menu ? <MainServices/>:""}
            {null == page || page === data[2].menu ?  <MainExperience/>:""}
            {children}
        </main>
    )
}

export default Main 