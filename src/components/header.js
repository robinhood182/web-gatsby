import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'


class Header extends Component {

  static propTypes = {
    headerText: PropTypes.string
  };

  render() { 

    const { headerText } = this.props;
    return (
      <div>
        <nav>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/about">About</Link></h4>
            <h4><Link to="/work">Work</Link></h4>
            <h4><Link to="/skills">Skills</Link></h4>
            <h4><Link to="/contact">Contact</Link></h4>
        </nav>
        <h1>{headerText}</h1>
      </div>
    );
  }
}
 
export default Header;
