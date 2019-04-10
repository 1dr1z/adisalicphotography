import React, { Component } from "react";
import { DataConsumer } from "../context";

export class Biography extends Component {
  render() {
    return (
      <React.Fragment>
        <DataConsumer>
          {value => {
            const { about, path, alt } = value.biography;
            return (
              <section id="aligner">
                <div className="container">
                  <div className="user-image">
                    <img src={path} alt={alt} />
                  </div>
                  <div className="user-bio">
                    <p>{about}</p>
                  </div>
                </div>
              </section>
            );
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default Biography;
