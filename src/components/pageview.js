import React from "react";
import { useInView, animated, useSpring} from '@react-spring/web'

export const buildInteractionObserverThreshold = (count = 100) => {
    const threshold = []
  
    const parts = 1 / count
  
    for (let i = 0; i <= count; i++) {
      threshold.push(parseFloat((parts * i).toFixed(2)))
    }
  
    return threshold
  }

export const SlideFadeinTop = ({children}) => {
    const styles=  useSpring(
        {
            from: {
              opacity: 0,
              y: 150,
            },
            to: {
              opacity: 1,
              y: 0,
            },
            config: {
                tension: 100
              },
          })
        return (
        <animated.div style={styles}>
            {children}
        </animated.div>
        )
}
export const RightfadeIn = ({children}) => {
    const [refright, right] = useInView (
        () => ({
            from: {
                opacity: 0,
                x: -80,
            },
            to: {
                opacity: 1,
                y: 0,
            },
            config: {
                tension:100
            }
        }),
        {
            rootMargin: '-45% 0px -45% 0px',
            amount: buildInteractionObserverThreshold(),
        }
    )
    return (
        <animated.div ref={refright} style={right}>
            {children}
        </animated.div>
    )
}

export const LeftfadeIn = ({children}) => {
    const [refleft, left] = useInView (
        () => ({
            from: {
                opacity: 0,
                x: 80,
            },
            to: {
                opacity: 1,
                y: 0,
            },
            config: {
                tension:100
            }
        }),
        {
            rootMargin: '-45% 0px -45% 0px',
            amount: buildInteractionObserverThreshold(),
        }
    )
    return (
        <animated.div ref={refleft} style={left}>
            {children}
        </animated.div>
    )
}
