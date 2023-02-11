import React,{Suspense} from "react";
import MainAbout from "./about";
import { Navdata } from "../navbar/nav";
import { css } from "@emotion/react";
import { colortextcontent } from "../colors";

const ServiceComponent = React.lazy(() => import('./services'))
const ExpComponent = React.lazy(()=> import('./experi'))

const Main = ({children, page}) => {
const data = Navdata()
    return (
        <main css={css`
          color: ${colortextcontent}
        `}>
            {null == page || page === data[0].menu ? <MainAbout page={page}/>:""}
            <Suspense fallback = { <div>loading...</div> }>
                {null == page || page === data[1].menu ? <ServiceComponent page={page}/>:""} 
                {null == page || page === data[2].menu ?  <ExpComponent/>:""} 
            </Suspense>
            {/* {null == page || page === data[1].menu ? <MainServices page={page}/>:""} */}
            {/* {null == page || page === data[2].menu ?  <MainExperience/>:""} */}
            {children}
        </main>
    )
}

export default Main 