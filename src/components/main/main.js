import React from "react";
import MainAbout from "./about";
import MainServices from "./services";
import MainExperience from "./experi";
import { Navdata } from "../navbar/nav";
import { css } from "@emotion/react";
import { colortextcontent } from "../colors";

const Main = ({children, page}) => {
const data = Navdata()
    return (
        <main css={css`
          color: ${colortextcontent}
        `}>
            {null == page || page === data[0].menu ? <MainAbout page={page}/>:""}
            {null == page || page === data[1].menu ? <MainServices page={page}/>:""}
            {null == page || page === data[2].menu ?  <MainExperience/>:""}
            {children}
        </main>
    )
}

export default Main 