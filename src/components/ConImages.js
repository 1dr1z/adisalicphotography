import React, { Component } from "react";
import { DataConsumer } from "../context";

class ConImages extends Component {
  render() {
    return (
      <React.Fragment>
        <DataConsumer>
          {value => {
            {
              return (
                <div className="images" onWheel={e => value.wheel(e)}>
                  {value.mapImages(value.conImages)}
                </div>
              );
            }
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default ConImages;
