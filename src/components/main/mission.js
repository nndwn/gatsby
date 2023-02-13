import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/react";
import { colorbgabout, colorabout} from "../colors";
import { buildInteractionObserverThreshold } from "../pageview";
import {
    useInView,
    useTransition,
    useSpring,
    useChain,
    animated,
    useSpringRef,
  } from '@react-spring/web'

const Mission = () => {
    const query = useStaticQuery(graphql`
        query {
            allMissionJson {
                nodes {
                  id
                  name
                  list {
                    icon
                    id
                    text
                    title
                  }
                }
              }
        }
    `)
    const data = query.allMissionJson.nodes
    const [refs, isInViews] = useInView({
        rootMargin: '-45% 0px -45% 0px',
        amount: buildInteractionObserverThreshold(),
        once: true
    })

    const springRef = useSpringRef()
    const opacity = useSpring({
      ref: springRef,
      from: { opacity: '0', height: '0vh' },
      to: { opacity: isInViews ? '1' : '0', height:isInViews ? '70vh': '0vh'},
    })

    const transRef = useSpringRef()
    const transitions = useTransition(isInViews ? data:[], {
           ref: transRef,
           from: { opacity: 0, scale: 0 },
           enter: { opacity: 1, scale: 1 },
           leave: { opacity: 0, scale: 0 },
          })
    useChain( [springRef,transRef])
    return (
        <div className="py-5 mission " ref={refs} css={css`
            background-color: ${colorbgabout};
            svg{
                fill: ${colorabout};
            }
        `}>
        {transitions((style, node ) => (
          <animated.div className="container-lg" style={{height: opacity.height}} key={node.id} >
              <div className="text-center col-12">
                <animated.h3 className="text-capitalize" style={{ opacity: opacity}}>{node.name}</animated.h3>
              </div>
              <div className="row">
                {node.list.map(items=> (
                  <animated.div style={{...style}} key={items.id} className="col-12 col-sm-4 d-flex flex-column text-center align-items-center">
                  <div className="mt-3" dangerouslySetInnerHTML={{__html:items.icon}}/>
                  <div className="mt-5">
                      <h5 className="fw-bold text-capitalize">{items.title}</h5>
                      <p className="lh-base">{items.text}</p>
                    </div>
                  </animated.div>
              ))}
              </div>
          </animated.div>
        ))}

        </div>
    )
}

export default Mission