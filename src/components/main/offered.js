import React,{Fragment} from "react";
import { Dataservice } from "./services";
import { css } from "@emotion/react";
import { servicetext } from "../colors";
import { Cardlist } from "../tools";

const Offered =() => (
    Dataservice().map(node => (
        <div className="services container-lg " >
        <div className="row justify-content-center" key={node.id}>
            {node.type.map(items => (
                <Fragment key={items.id}>
                    <div id={items.title} className="col-12" style={{height:70}}></div>
                    <div className="text-center mb-3 mt-2" >
                    <h3  className="fw-bold text-capitalize line-text" css={css`
                    &::before{
                        background-color: ${servicetext}
                    }
                    `} >{items.title}</h3>
                    </div>
                    <div className="row ">
                        {items.expand.map(list =>(
                            <Fragment key={list.id}>
                                <Cardlist image={list.img} title={list.title} desc={list.desc} to={list.url}/>
                            </Fragment>
                        ))}
                    </div>
                </Fragment>
            ))}
        </div>
        </div>
    ))
)

export default Offered
