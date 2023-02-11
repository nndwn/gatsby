
import * as React from "react";
import {Sosial} from "../sosial";
import Company from "../../hook/company";
import { Icondesc } from "../tools";
import { css } from "@emotion/react";
import "./css/subnav.css"
import { colorsubnav,bgcolorsubnav } from "../colors";

const Subnav =  props => {
    const {addreas, email, telp} = Company()
    return(
        <nav {...props} className="subnav position-fixed" css={css`
            background-color: ${bgcolorsubnav};
            a {
            color:${colorsubnav};
            }
            svg {
                fill: ${colorsubnav};
            }
        `} role="navigation">
            <div className="container-fluid py-2" >
                <div className="row" css={css`
                    & .truncate {
                        -webkit-line-clamp: 1;
                    }
                `}>
                    <div className="col-7 d-flex justify-content-start right">
                        <Icondesc name={addreas} div="truncate" svg="address" span="d-none d-lg-inline" nameicon="address" />
                        <Icondesc name={email} div="truncate ms-2 align-self-center" svg="email"  span="d-none d-md-inline" nameicon="email" a="d-flex align-items-center"/>
                    </div>
                    <div className="col-5 d-flex justify-content-end left">
                        <Icondesc name={telp} span="d-none d-xs-inline" a="text-end" div="col-10 d-flex" nameicon="telp" />
                        <Sosial className="col-sm-2 d-flex ms-0 ms-xs-5 justify-content-end sosial align-items-center"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Subnav