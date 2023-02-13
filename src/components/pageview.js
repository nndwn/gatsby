import React from "react";
//import { useInView, animated, useSpring} from '@react-spring/web'
import {
    useInView,
    useTransition,
    useSpring,
    useChain,
    animated,
    useSpringRef,
  } from '@react-spring/web'

export const buildInteractionObserverThreshold = (count = 100) => {
    const threshold = []
    const parts = 1 / count
    for (let i = 0; i <= count; i++) {
      threshold.push(parseFloat((parts * i).toFixed(2)))
    }
    return threshold
  }
//for slide
export const SlideFadeinTop = ({children}) => {
    const styles=  useSpring(
        {
            from: {
              opacity: 0, y: 100,
            },
            to: {
              opacity: 1, y: 0,
            },
            config: { 
              tension: 120
            },
          })
        return (
        <animated.div style={styles}>
            {children}
        </animated.div>
        )
}

// all setting
const settinguseInView = {
  rootMargin: '-45% 0px -45% 0px',
  amount: buildInteractionObserverThreshold(),
  once: true,
}

//fadeintop
export const FadeIntop = ({children, className}) => {
  const [ref, style] = useInView (
    () => ({
      from: {opacity: 0, y: -20,},
      to: {opacity: 1, y: 0,},
      config: {tension:100}
  }),settinguseInView
  ) 
  return (
    <animated.div style={style} ref={ref} className={className}>
        {children}
    </animated.div>
 )
}


const data = ['hi', 'there!']
  
 export const Test = () => {
    const [refs, isInViews] = useInView({
        rootMargin: '-45% 0px -45% 0px',
        amount: buildInteractionObserverThreshold(),
        once: false
    })

    const springRef = useSpringRef()
    const springs = useSpring({
      ref: springRef,
      from: { size: '20%' },
      to: { size: isInViews ? '50%' : `30%` },
    })
  
    const transRef = useSpringRef()
    const transitions = useTransition(isInViews ? data :[], {
      ref: transRef,
      trail: 400 / data.length,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
    })
  
      useChain( isInViews ? [springRef,transRef]:[transRef,springRef],
        [0, isInViews ? 0.1 : 0.6,])
  
    return (
      <animated.div ref={refs}
        style={{
          height: springs.size,
          width: springs.size,
          background: 'blue',
        }}>
        {transitions((style, item) => (
          <animated.div 
            style={{
              width: '120px',
              height: '120px',
              background: 'green',
              ...style,
            }}>
            {item}
          </animated.div>
        ))}
      </animated.div>
    )
  }