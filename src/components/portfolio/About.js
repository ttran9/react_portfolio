import React, { Component } from "react";
import * as Constants from "../../Constants";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    const projects_page = (
      <Link to={`${Constants.PROJECT_URL}`}>projects page</Link>
    );

    return (
      <div className="light-overlay landing-inner text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-4">
                Although I have some of my projects listed on the{" "}
                {projects_page} I have used a variety of programming languages
                such as Java, C++, Python, C#, Ruby, and Objective-C. I believe
                my exposure to a variety of technologies and languages will
                allow me to learn new technologies and languages quickly and be
                able to get up to speed. I believe that joining a development
                team will allow me to ask questions whenever I am stuck on
                implementing a feature or learning a new language or technology.
                I look forward to working on a development team because as I
                become more proficient with a language or technology I will
                mentor or teach others as I believe this will not only help
                others but solidify my understanding and help the team be more
                productive.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
