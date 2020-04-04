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
                Linux server(s).
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
