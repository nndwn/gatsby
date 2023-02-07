import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import MainAbout from "./about";
import MainServices from "./services";
import MainExperience from "./experi";
import MainContact from "./contact";

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
            {null == page || page === data[0].menu ? <MainAbout/>:""}
            {null == page || page === data[1].menu ? <MainServices/>:""}
            {null == page || page === data[2].menu ?  <MainExperience/>:""}
            {null == page || page === data[3].menu ? <MainContact/>: ""}
            {children}
        </main>
    )
}

export default Main 