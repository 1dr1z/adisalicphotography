import React, { Component } from "react";

export class Default extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <React.Fragment>
        <div className="default-page">
          <div className="default">
            <h1>
              Error <span>404</span>
            </h1>

            <h1>
              Requested page <span>{path} </span> not found
            </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Default;
