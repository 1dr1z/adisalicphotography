import React, { Component } from "react";
import { DataConsumer } from "../context";

export class ParImages extends Component {
  render() {
    return (
      <React.Fragment>
        <DataConsumer>
          {value => {
            return (
              <div className="images" onWheel={e => value.wheel(e)}>
                {value.mapImages(value.adsImages)}
              </div>
            );
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default ParImages;
