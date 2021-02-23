import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (      
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="logo-img" src="../images/logo.png"></img>
          <span className="logo-title">Youtube</span>
        </div>
        <form className="search-form">
          <input type="text" className="search-input" placeholder="Search.."></input>
          <button className="search-btn"><img src="../images/search.png"></img></button>
        </form>
      </nav>      
    );
  }
}

export default Navbar;