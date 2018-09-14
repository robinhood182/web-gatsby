import React from "react"
import Header from '../components/header'
import { graphql } from "gatsby"



export default ({ data }) => (
  <div>
  <Header headerText="Work"/>
    <section>
      <h2>{data.allContentfulProjects.edges[2].node.title}</h2>
      <p>{data.allContentfulProjects.edges[2].node.description}<a target="_blank" rel="noopener noreferrer" href="https://pure-river-67642.herokuapp.com/#/"> Try it!</a></p>
      <a target="_blank" rel="noopener noreferrer" href={data.allContentfulProjects.edges[2].node.githubLink}>Visit the repo</a>
    </section>
    <section>
      <h2>{data.allContentfulProjects.edges[0].node.title}</h2>
      <p>{data.allContentfulProjects.edges[0].node.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={data.allContentfulProjects.edges[0].node.githubLink}>Visit the repo</a>
    </section>
    <section>
      <h2>{data.allContentfulProjects.edges[1].node.title}</h2>
      <p>{data.allContentfulProjects.edges[1].node.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={data.allContentfulProjects.edges[1].node.githubLink}>Visit the repo</a>
    </section>
    <section>
      <h2>{data.allContentfulProjects.edges[3].node.title}</h2>
      <p>{data.allContentfulProjects.edges[3].node.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={data.allContentfulProjects.edges[3].node.githubLink}>Visit the repo</a>
    </section>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        myName
      }
    }
    allContentfulProjects {
      edges {
        node {
          title
          description
          githubLink
        }
      }
    }
  }
`