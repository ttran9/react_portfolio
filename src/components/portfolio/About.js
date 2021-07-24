import React from "react";

const About = () => (
  <div className="light-overlay landing-inner text-dark">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="mb-4">
            <h2>Skills</h2>
          </p>
          <p className="mb-4">
            <span>
              These are some technologies I have used on my most recent
              projects.
            </span>
          </p>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Backend Technologies/Languages</h5>
                  <p className="card-text">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>Java</li>
                          <li>Spring</li>
                          <li>Tomcat</li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <ul>
                          <li>Python</li>
                          <li>Django</li>
                          <li>Apache</li>
                        </ul>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Frontend Technologies/Languages
                  </h5>
                  <p className="card-text">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <ul>
                          <li>Bootstrap</li>
                          <li>React</li>
                          <li>Redux</li>
                        </ul>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-4">
              The above skills are not an exhaustive list. These are just the
              most recent technologies I have been using. I believe that I can
              learn these technologies in greater detail or new technologies to
              complete a variety of tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
