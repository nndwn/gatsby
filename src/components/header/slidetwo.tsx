import React,{ useState } from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';
import Slidedata from "../../hook/sliderdata";
import './slidetwo.css'



const Backgroundimage = () => {
    const data = useStaticQuery(graphql`
    query {
    imageSharp(id: {eq: "10f46737-3616-5106-8f56-6ca18b6f680d"}) {
        original {
          src
        }
      }
    }
    `)
    return data.imageSharp.original.src
}

export const Slidetwo = () => {
const [aktiv] = useState(true)

const bearSlideItemData: TBearSlideItemDataList  = Slidedata().map(node => {
    return {
        key: node.id,
        children: <BearSlideItem imageUrl={node.slide.childImageSharp.original.src}>
        <div className="bg position-absolute" style={{backgroundImage: `url(${Backgroundimage()})`}}></div>
            <div className="headline d-grid justify-content-center align-content-center vh-100 position-relative container">
                <div className="d-flex flex-column align-items-center container-lg">
                { null == node.textone && aktiv ? "" : <div className="h6 fw-bold">{node.textone}</div>}
                { null == node.texttwo && aktiv ? "" : <div className="h2 fw-bold">{node.texttwo}</div>}
                { null == node.textthree && aktiv ? "" : <div className="h2 fw-bold">{node.textthree}</div>}
                { null == node.textfour && aktiv ? "" : <div className="fs-6 fw-light text-break">{node.textfour}</div>}
                { node.button[0].value + node.button[1].value > 0 && aktiv ? <div className="d-flex">
                    {node.button[0].value > 0 && aktiv ? <Link className="left " to={node.button[0].url}>{node.button[0].name}</Link>:""}
                    {node.button[1].value > 0 && aktiv ? <Link className="right" to={node.button[1].url}>{node.button[1].name}</Link>:""}
                </div>:null}
                </div>
            </div>
            </BearSlideItem>
    }
}
)
return <BearCarousel 
data={bearSlideItemData} 
//aspectRatio={{widthRatio: 16, heightRatio: 9}} 
staticHeight = "100vh"
isEnableLoop
isEnableAutoPlay
isEnableMouseMove = {false}
isEnablePagination
autoPlayTime={5000}
moveTime={900}
/>
}


