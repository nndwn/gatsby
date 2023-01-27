import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
//import '../../css/index.css'
//import Menu from '../hook/menu'
import { graphql } from 'gatsby'



const Pages = ({data , children}) => {
  //const menu =  Menu()
    return (
      <Layout>
        <p>My blog post contents will go here (eventually).</p>
        {`${data.menuJson.menu}`}
        {children}
        </Layout>
    )
  }
  export const query = graphql`
  query($id: String) {
    menuJson(id: {eq: $id}) {
      menu
    }
  }
`


  export const Head = () => (
    <Seo/>
  )


  export default Pages  