import React from "react";
import * as Constants from "../../Constants";

const Project = () => (
  <div className="light-overlay landing-inner text-dark">
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Computer Build Tracker Frontend</h5>
              <p className="card-text">
                <p>
                  A web application allowing a logged in user to create, modify,
                  and delete computer builds and the associated details.
                </p>
                <ul>
                  <li>
                    Used React and Redux to present web pages to the logged in
                    user.
                  </li>
                  <li>
                    Used Bootstrap and CSS to add styling to the web pages.
                  </li>
                  <li>Used JWT Tokens to access secure RESTful endpoints.</li>
                </ul>
              </p>
              <a
                href={`${Constants.CB_FRONT_END_REPO_URL}`}
                className="btn btn-primary"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Computer Build Tracker Backend</h5>
              <p className="card-text">
                <p>
                  A web application housing an API with endpoints storing
                  computer builds and its associated details as well as user
                  credentials.
                </p>
                <ul>
                  <li>
                    Used Spring Security and Hibernate to authenticate users
                    against a MySQL database and generate a JWT token.
                  </li>
                  <li>
                    Used Spring Boot to create RESTful controllers to process
                    requests from a React application to create, update, and
                    delete computer builds and the associated details.
                  </li>
                </ul>
              </p>
              <a
                href={`${Constants.CB_BACK_END_REPO_URL}`}
                className="btn btn-primary"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Django Weather Forecast</h5>
              <p className="card-text">
                <p>
                  A web application allowing users to get weather forecasts for
                  an entered address.
                </p>
                <ul>
                  <li>
                    Created a module to process API calls to RESTful JSON APIs
                    to return forecasts and location information.
                  </li>
                  <li>
                    Used Django&apos;s test module and Selenium to test for
                    expected functionality.
                  </li>
                  <li>
                    Deployed to a remote Linux server and configured website to
                    use HTTPS to process secure web requests.
                  </li>
                </ul>
              </p>
              <a
                href={`${Constants.DJ_WF_REPO_URL}`}
                className="btn btn-primary"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Rails Weather Forecast</h5>
              <p className="card-text">
                <p>
                  A web application allowing users to get weather forecasts for
                  an entered address.
                </p>
                <ul>
                  <li>
                    Processed results from RESTful JSON APIs to return forecast
                    and location information.
                  </li>
                  <li>Used RSpec to test searches in a variety of cases.</li>
                  <li>Deployed the application to Heroku.</li>
                </ul>
              </p>
              <a
                href={`${Constants.RAILS_WF_REPO_URL}`}
                className="btn btn-primary"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
