import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import  '../css/main.css'
import '../css/animate.css'

const IndexPage = () => {

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}




export const Head = () => (
    <Seo/>
  )

export default IndexPage