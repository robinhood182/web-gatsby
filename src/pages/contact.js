import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import { Helmet } from 'react-helmet'


export default () => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
    </Helmet>
    <Header headerText="Contact" />
    <h2>Connect with me:</h2>
    <h3>rnavarro182 at gmail</h3>
    <section>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/robinhood182"><i className="fab fa-github-square"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robynanavarro/"><i className="fab fa-linkedin"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Robinhood182"><i className="fab fa-twitter-square"></i></a>
    </section>
  </div>
)