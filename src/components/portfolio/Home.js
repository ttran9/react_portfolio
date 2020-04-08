import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="light-overlay landing-inner text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-4">
                I built this website in React in order to get more familiar with
                deploying web applications to remote Linux Servers. Previously I
                did this using GitHub pages and while that is sufficient and
                allows me to serve static web pages I wanted to go with a
                different approach to get more familiar with deploying to remote
                Linux server(s). I have also deployed projects to other services
                such as Linode and Heroku and both are sufficient as well.
                Currently, I am just using AWS because it is heavily used but I
                am open to using Linode or Heroku once I have become familiar
                enough with AWS or if I come across an application that requires
                it.
              </p>
              <p className="mb-4">
                Building this website allowed me to navigate basic configuration
                files for Apache and generate a certificate to ensure this
                website is able to run with HTTPs instead of just processing
                insecure requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
