import React, { Component } from "react";
import * as Constants from "../../Constants";

class Project extends Component {
  render() {
    return (
      <div className="light-overlay landing-inner text-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Computer Build Tracker Frontend
                  </h5>
                  <p className="card-text">
                    The front-end portion of a full-stack web application built
                    using ReactJS and Redux. This application displays the web
                    pages for a user such as a login page, a registration page,
                    a web page to view a list of computer builds that a user has
                    created. A logged in user can also view details of the
                    computer build. JWT authentication is used in order for a
                    user to make secure API calls to a Spring Boot back-end. One
                    thing to note is that for simplicity I made it so users can
                    only view their own builds, however, I plan to change this
                    feature in the near future.
                  </p>
                  <a
                    href={`${Constants.CB_FRONT_END_REPO_URL}`}
                    class="btn btn-primary"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Computer Build Tracker Backend</h5>
                  <p className="card-text">
                    The back-end portfion of a full-stack web application built
                    using Java, MySQL, and Spring Boot. Some API endpoints
                    included consist of allowing a logged in (authenticated)
                    user be able to create, delete, and update computer builds.
                    A user can also user update computer build details, such as
                    the computer parts, and also some notes about the computer
                    build itself such as build notes (possibly some issues a
                    user ran into or just some suggestions). These endpoints are
                    stored inside of a MySQL database which is hosted on Heroku
                    and accessed by using Hibernate 5. There are also JUnit
                    tests to verify expected functionality for the operations on
                    ComputerBuilds and ComputerParts.
                  </p>
                  <a
                    href={`${Constants.CB_BACK_END_REPO_URL}`}
                    class="btn btn-primary"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Django Weather Forecast</h5>
                  <p class="card-text">
                    A full stack web application built using Python 3, Django 3,
                    Docker, AWS Lightsail. This application is currently hosted
                    on an AWS Lightsail Ubuntu virtual machine. I wanted to
                    build this application so I could get more familiar with
                    deploying a Django web application to a remote Linux Server
                    with its own database using Docker. I also generated an SSL
                    certificate using Certbot in order to support HTTPS so that
                    the user browsing it would be making secure web requests.
                  </p>
                  <p class="card-text">
                    This web application uses the Google Geocoding API in order
                    to get a latitude and longitude pair from an entered
                    address. I also used the Darksky API to return weather
                    forecasts for the corresponding latitude and longitude. I
                    used Django's test module to create tests in order to test
                    that I could make the API calls properly. I also used
                    Selenium to test at the browser level and I tested scenarios
                    that the user would go through such as logging in and
                    logging out. I also tested the user entering in the address
                    and being able to view the forecasts as well as view
                    previously forecasts (assuming the user was logged in).
                  </p>
                  <a
                    href={`${Constants.DJ_WF_REPO_URL}`}
                    class="btn btn-primary"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3"></div>
          </div>
          <div className="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Rails Weather Forecast</h5>
                  <p class="card-text">
                    A full-stack web application with a back-end built using
                    Ruby and Ruby on Rails 5. There were basic tests written
                    using RSpec. The front-end is build using HTML (Embedded
                    Ruby Files), CSS (Bootstrap), and JavaScript.
                  </p>
                  <p class="card-text">
                    This web application uses the Google Geocoding API in order
                    to get a latitude and longitude pair from an entered
                    address. I used the Darksky API to return weather forecasts
                    for the corresponding latitude and longitude. I also used
                    RSpec in order to test for expected functionality such as
                    being able to view the user's previous searches while logged
                    in and not logged in. I also tested for cases where the user
                    would enter something invalid for the address such as a
                    blank address versus a valid entry.
                  </p>
                  <a
                    href={`${Constants.RAILS_WF_REPO_URL}`}
                    class="btn btn-primary"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
