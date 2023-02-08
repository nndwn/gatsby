import React from "react";
import Nav from "./nav";
import Subnav from "./subnav";
import { useScroll, animated, useSpring } from '@react-spring/web'
import { colordefault,transparent } from "../colors";

const Animatednav = animated(Nav)
const AnimatedSubnav = animated(Subnav)


const Navbar = () => {
    const [hidden, textApi] = useSpring(() => ({
        y: '0',
      }))
    const [changecolor, colorApi] = useSpring(() => ({
        background: transparent,
        top:'40px'
    }))
    
   useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            //console.log(scrollYProgress)
            if (scrollYProgress > 0.05) {
              textApi.start({ y: '-100%' })
                colorApi.start({ background: colordefault, top:'0'})
            } else {
              textApi.start({ y: '0' })
              colorApi.start({ background: transparent,top:'40px'})
         
            }
          },
    })
 
    return (
        <>
            <AnimatedSubnav style={hidden}/>
            <Animatednav style={changecolor}/>
        </>
    )
}

export default Navbar