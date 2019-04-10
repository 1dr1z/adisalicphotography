import React, { Component } from "react";
import { DataConsumer } from "../context";

export class WImages extends Component {
  render() {
    return (
      <React.Fragment>
        <DataConsumer>
          {value => {
            {
              return (
                <div className="images" onWheel={e => value.wheel(e)}>
                  {value.mapImages(value.wImages)}
                </div>
              );
            }
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default WImages;
