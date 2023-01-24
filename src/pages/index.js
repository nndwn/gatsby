import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import  '../css/index.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome Zes Enginering</p>
      
    </Layout>
  )
}

export const Head = () => (
    <Seo/>
  )

export default IndexPage