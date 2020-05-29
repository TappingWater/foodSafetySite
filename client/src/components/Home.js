import React, { Component } from 'react'
import './css/HomePage.css'

export default class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div id="imageCarousel">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + '/images/farmers-market-1329008.jpg'}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + '/images/fruit-stand-2722944.jpg'}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + '/images/apples-1841132_1920.jpg'}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div id="featuresList">
          <div className="columnFeature">
            <div className="featureImg">
              <img
                src="https://cdn.glitch.com/fbd3038c-10e3-4db8-a269-f3da37bd8492%2F5a461418d099a2ad03f9c999.png?v=1585199118676"
                alt = "FAQ Icon"
              />
            </div>
            <h4>Food Safety FAQ</h4>
            <p>
              Our site contains a "Frequently Asked Questions" section regarding
              the new Produce Safety Regulations, as well as Preventive Control
              Measures. General questions about what these regulations are, as
              well as how they affect users as farmers and/or farmers market vendors.
            </p>
          </div>
          <div className="columnFeature">
            <div className="featureImg">
              <img
                src="https://cdn.glitch.com/fbd3038c-10e3-4db8-a269-f3da37bd8492%2Fdownload.svg?v=1585234419390"
                alt = "Profile Icon"
              />
            </div>
            <h4>Custom Profiles</h4>
            <p>
              Our site features custom profiles for users to have a personalized
              experience. By completing a questionnaire, we are able to determine
              whether or not users fall under the new produce and safety regulations,
              based on various characteristics of their farm and produce.
            </p>
          </div>
          <div className="columnFeature">
            <div className="featureImg">
              <img
                src="https://cdn.glitch.com/fbd3038c-10e3-4db8-a269-f3da37bd8492%2Fyoutube-bell-png-transparent-background.png?v=1585235133244"
                alt = "Notification Icon"
              />
            </div>
            <h4>Real Time Notifications</h4>
            <p>
              We want to ensure that our users receive news and updates regarding
              produce and safety regulations. With real-time notifications, users
              are able to immediately read and understand new changes that may
              affect their farm and produce.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
