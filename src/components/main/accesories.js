import React,{Fragment} from "react";
import image from "../../images/parallax.jpg"
import { css } from "@emotion/react";
import { colordefault } from "../colors";
import { Spinner } from "react-bootstrap";

export const Parallax = () => {
    return(
    <div className="col-12 position-relative vh-40" css={css`
        background-image: url(${image});
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100%;
    `}>
        <div className="position-absolute absoluteimage opacity5" css={css`
        background-color: ${colordefault};
        `}></div>
    </div>)}

export const Loading = () => (
    <div className="d-flex justify-content-center align-items-center vh-40">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
)


export const wait = time => {
    return new Promise(resolve =>{
        setTimeout(resolve,time)
})
}

