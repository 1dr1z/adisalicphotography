import React, { Component } from "react";
import { DataConsumer } from "../context";

class SImages extends Component {
  render() {
    return (
      <React.Fragment>
        <DataConsumer>
          {value => {
            {
              return (
                <div className="images" onWheel={e => value.wheel(e)}>
                  {value.mapImages(value.sImages)}
                </div>
              );
            }
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default SImages;
