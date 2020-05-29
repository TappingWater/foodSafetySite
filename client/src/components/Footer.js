import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
        <div id ="footerContainer">
            <div id="footerLeft" className="column">
              <div id="socialMediaBlock">
                <div id="blockDesign"></div>
                <div id="socialMediaRow">
                  <i className="fa fa-facebook-square"></i>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-snapchat-ghost"></i>
                  <i className="fa fa-twitter"></i>
                </div>
              </div>
            </div>
            <div id="linkCol1" className="column">
              <NavLink to="/">Home</NavLink>
              <a href="#">About</a>
            </div>
            <div id="linkCol2" className="column">
              <a href="#">Privacy</a>
              <a href="#">Community</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
