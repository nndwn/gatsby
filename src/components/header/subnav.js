
import * as React from "react";
import { Email, Address, Telp} from "../icons";
import Sosial from "../../hook/sosial";
import Company from "../../hook/company";
import { Linked } from "../tools";
import "./subnav.css"



const Social = ({className}) => {
    const sosiallist = Sosial().map((sosial) => {
        return (
                <Linked key={sosial.id} title={sosial.name} to={`${sosial.link + sosial.username}`}>
                    <i dangerouslySetInnerHTML={{__html:sosial.icon}}/>
                </Linked>
            )
        }
    ) 
    return <div className={className} >{sosiallist}</div>   
}

const Subnav = () => {
    const {addreas, email, telp} = Company()
    return(
        <div className="subnav">
            <div className="container-fluid py-2" role="navigation">
                <div className="row">
                    <div className="col-7 d-flex justify-content-start">
                        <div className="col-md-8 col-1 truncate">
                            <Linked  >
                                <Address className="address"/>
                                <span className="d-none d-sm-inline">{addreas}</span>
                            </Linked>
                        </div>
                        <div className="col-4 truncate">
                            <Linked>
                                <Email className="email" />
                                <span className="d-none d-sm-inline">{email}</span>
                            </Linked>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <div className="col-10 d-flex justify-content-sm-end align-items-center"><Telp/><Linked name={telp}/></div>
                        <Social className="col-2 d-flex justify-content-end sosial align-items-center"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Subnav