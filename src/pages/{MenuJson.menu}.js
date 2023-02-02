import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Capitalize } from '../components/tools'


const Pages = ({data , children}) => {
  //const menu =  Menu()
    return (
      <Layout page={data.menuJson.menu}>
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

  export const Head = ({data}) => (
    
    <Seo title={Capitalize(data.menuJson.menu)}/>
  )


  export default Pages  