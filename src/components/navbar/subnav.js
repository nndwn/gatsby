
import * as React from "react";
import { Email, Address, Telp} from "../icons";
import {Sosial} from "../sosial";
import Company from "../../hook/company";
import { Linked } from "../tools";
import "./subnav.css"

const Subnav = () => {
    const {addreas, email, telp} = Company()
    return(
        <nav className="subnav position-fixed" role="navigation">
            <div className="container-fluid py-2" >
                <div className="row">
                    <div className="col-7 d-flex justify-content-start right">
                        <div className="truncate">
                            <Linked>
                                <Address className="address"/>
                                <span className="d-none d-lg-inline">{addreas}</span>
                            </Linked>
                        </div>
                        <div className="truncate ms-2">
                            <Linked>
                                <Email className="email" />
                                <span className="d-none d-md-inline">{email}</span>
                            </Linked>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-end left">
                        <div className="col-10 d-flex justify-content-xs-end align-items-center">
                            <Linked cls="text-end">
                                <Telp/>
                                <span className="d-none d-xs-inline">{telp}</span>
                            </Linked>
                        </div>
                        <Sosial kelas="col-sm-2 d-flex ms-0 ms-xs-5 justify-content-end sosial align-items-center"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Subnav