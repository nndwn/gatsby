import * as React from "react";


export const Linked = ({to , name , cls , title, icon, children}) =>{
    return <a href={`${ to == null  ? '#' : to}`} title={title} className={cls}>{children}{icon}{name}</a>   
}