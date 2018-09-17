import Header from "../components/header"
import React from "react"
import { Helmet } from 'react-helmet'
import homeStyles from "./index.module.css"


export default () => (
<div className={homeStyles.container}>
  <Helmet>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
  </Helmet>
  <Header headerText="Robyn Navarro"/>
  <section className={homeStyles.sub}>
  <h3 className={homeStyles.position}>Full-Stack Developer</h3>
    <section className={homeStyles.linkContainer}>
      <a className={homeStyles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/robinhood182"><i className="fab fa-github-square fa-2x"></i></a>
      <a className={homeStyles.link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robynanavarro/"><i className="fab fa-linkedin fa-2x"></i></a>
      <a className={homeStyles.link} target="_blank" rel="noopener noreferrer" href="https://twitter.com/Robinhood182"><i className="fab fa-twitter-square fa-2x"></i></a>
    </section>
  </section>
</div>
)