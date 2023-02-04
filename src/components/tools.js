import * as React from "react";
import { Link } from "gatsby";


export const Linked = ({to , name , cls , title, icon, children}) =>(<a href={`${ to == null  ? '#' : to}`} title={title} className={cls}>{children}{icon}{name}</a>)
export const Capitalize = str => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
export const Truncate = (str,limit,cutfront,cutback) => ( str.length > limit ? str.substring(cutfront, cutback) : str)
export const Listurl = ({list, className, to, activeClassName}) => (<li className={className}><Link activeClassName={activeClassName} to={to}>{list}</Link></li>)
