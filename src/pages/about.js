import React from "react"
import Header from '../components/header'
import { graphql } from "gatsby"



export default ({ data }) => (
  <div>
  <Header headerText="About me"/>
    <h2>{data.site.siteMetadata.myName}</h2>
    <p>{data.allContentfulBio.edges[0].node.summary.summary}</p>
    <p>{data.allContentfulBio.edges[0].node.paragraph2.paragraph2}</p>
    <p>{data.allContentfulBio.edges[0].node.paragraph3.paragraph3}</p>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        myName
      }
    }
    allContentfulBio {
      edges {
        node {
          summary {
            summary
          }
          paragraph2 {
            paragraph2 
          }
          paragraph3 {
            paragraph3 
          }
        }
      }
    }
  }
`