import React,{Suspense} from "react";
import MainAbout from "./about";
import { Navdata } from "../navbar/nav";
import { css } from "@emotion/react";
import { colortextcontent } from "../colors";
import { Parallax } from "./accesories";
import { Loading } from "./accesories";
import MainContact from "./contact";
const ServiceComponent = React.lazy(() => import('./services'))
const ExpComponent = React.lazy(()=> import('./experi'))

const Main = ({children, page}) => {
const data = Navdata()
    return (
        <main css={css`
          color: ${colortextcontent}
        `}>
            {null == page || page === data[0].menu ? <MainAbout page={page}/>:""}
            <Suspense fallback = { <Loading/> }>
                {null == page || page === data[1].menu ? <ServiceComponent page={page}/>:""} 
                {null == page ? <Parallax/> :""}
                {null == page || page === data[2].menu ?  <ExpComponent/>:""} 
            </Suspense>
            {/* {null == page || page === data[1].menu ? <MainServices page={page}/>:""} */}
            {null == page || page === data[3].menu ?  <MainContact/>:""}
            {children}
        </main>
    )
}

export default Main 