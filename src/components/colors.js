
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
export const footer = alpha(black , .9)
export const subfooter = black
export const textfooter = white
//button
export const colorButtonDefault = colorSecond
export const textButtoncolorDefault = white
export const colorButtonalt = white
export const textButtoncoloralt = colorSecond

//content color
export const colortextcontent = colordefault
//about
export const colorbgabout = alpha(colordefault, .2)
export const colorabout = colordefault


//about mobile
export const coloraboutmobile = white
export const colormarkmobile = alpha(white, 0.2)

//service pages
export const servicetext = colordefault