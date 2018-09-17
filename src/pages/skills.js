import React from "react"
import Header from '../components/header'
import { Helmet } from 'react-helmet'

export default () => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
    </Helmet>
    <Header headerText="Skills"/>
    <section className="skills-container">
    <ul>
      <li>React</li>
      <li>Redux</li>
      <li>Vue</li>
      <li>Node</li>
      <li>Express</li>
      <li>PostgreSQL</li>
      <li>MongoDB</li>
      <li>Mongoose</li>
    </ul>

    </section>
  </div>
)