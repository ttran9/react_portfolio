import React from "react";
import * as Constants from "../../Constants";
import { Link } from "react-router-dom";

const Home = () => {
  const projects_page = (
    <Link to={`${Constants.PROJECT_URL}`}>projects page</Link>
  );
  const about_page = <Link to={`${Constants.ABOUT_URL}`}>about page</Link>;
  return (
    <div className="light-overlay landing-inner text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-4">
              I built this website in React in order to get more familiar with
              deploying web applications to remote Linux Servers. I have
              deployed web applications using Linode, AWS, and Heroku. While
              Heroku makes the process very simple I felt too much of the
              configuration is done out of the box. Instead I wanted to get more
              doing the basic configurations myself so I have also used Linode
              and AWS.
            </p>
            <p>
              Visit my {projects_page} to view my latest projects or the{" "}
              {about_page} to view some of the technologies I have recently
              used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
