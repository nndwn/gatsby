import React,{Fragment} from "react";
import { Dataservice } from "./services";
import { Cardlist,ContainerCardlist,TitleCardlist } from "../tools";

const Offered =() => (
    Dataservice().map(node => (
        <ContainerCardlist key={node.id}>
            {node.type.map(items => (
                <Fragment key={items.id}>
                    <div id={items.title} className="col-12" style={{height:70}}></div>
                    <TitleCardlist name={items.title}/>
                    <div className="row ">
                        {items.expand.map(list =>(
                            <Fragment key={list.id}>
                                <Cardlist image={list.img} title={list.title} desc={list.desc} to={"#"}/>
                            </Fragment>
                        ))}
                    </div>
                </Fragment>
            ))}
        </ContainerCardlist>
    ))
)

export default Offered
