import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import headerStyles from "./header.module.css"
console.log(headerStyles)



class Header extends Component {

  static propTypes = {
    headerText: PropTypes.string
  };

  render() { 

    const { headerText } = this.props;
    return (
      <div className={headerStyles.container}>
        <nav>
            <Link className={headerStyles.link} to="/">Home</Link>
            <Link className={headerStyles.link} to="/about">About</Link>
            <Link className={headerStyles.link} to="/work">Work</Link>
            <Link className={headerStyles.link} to="/skills">Skills</Link>
            <Link className={headerStyles.link} to="/contact">Contact</Link>
        </nav>
        <h1>{headerText}</h1>
      </div>
    );
  }
}
 
export default Header;
