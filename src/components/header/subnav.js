
import * as React from "react";
import { Email, Address, Telp} from "../icons";
import Sosial from "../../hook/sosial";
import Company from "../../hook/company";
import { Linked } from "../tools";
import "./subnav.css"

const Social = ({c1}) => {
    const sosiallist = Sosial().map((sosial) => {
        return (
                <Linked key={sosial.id} title={sosial.name} to={`${sosial.link + sosial.username}`}>
                    <span dangerouslySetInnerHTML={{__html:sosial.icon}}/>
                </Linked>
            )
        }
    ) 
    return <ul className={c1}><li>{sosiallist}</li></ul>     
}

const Subnav = () => {
    const {addreas, email, telp} = Company()
    return(
        <div className="grid bg-blueTheme subnav content-center">
            <ul role= 'list' className="flex container text-white">
                <li><Address/><Linked  name={addreas}/></li>
                <li><Email/><Linked name={email}/></li>
                <li><Telp/><Linked name={telp}/></li>
                <li><Social/></li>
            </ul>
            
        </div>
    )
}
export default Subnav