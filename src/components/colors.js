

import alpha from 'color-alpha'

const Colors = (red, green, blue, alpha) => `rgb(${red},${green},${blue},${alpha})`


export const colordefault = Colors(0,39,99,1)
export const colorSecond = Colors(71,196,220,1) //rgb(71 196 220);
export const white = Colors(255,255,255,1)
export const black = Colors(0,0,0,1)
export const transparent = Colors(0,0,0,0)

// sub navigation
export const colorsubnav = white
export const bgcolorsubnav =  colordefault

// main navigation
export const colornav = white
export const bgcolornav = colordefault
export const bgcolornavsecondary = transparent
export const hovercolornav = colorSecond

// main navigation mobile
export const colortogle = white
export const bgcolornavmobile = colordefault
export const bgcolormodal = alpha(black , .8)

// slide at header
export const colorHeader = white
export const bgcolorHeader = colordefault

//footer 

//button
export const colorButtonDefault = colorSecond
export const textButtoncolorDefault = white
export const colorButtonalt = white
export const textButtoncoloralt = colorSecond


