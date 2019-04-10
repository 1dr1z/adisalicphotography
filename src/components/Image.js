import React, { Component } from "react";
import { DataConsumer } from "../context";

export class Image extends Component {
  render() {
    const { path, alt, id } = this.props.item;
    return (
      <React.Fragment>
        <DataConsumer>
          {value => {
            return (
              <img
                className="image"
                id={id}
                src={path}
                alt={alt}
                onMouseDown={e => {
                  if (e.button === 0) {
                    value.zoomIn(this.props.item);
                  } else {
                    value.copyrightsPrevent(e);
                  }
                }}
                onTouchStart={() => {
                  value.copyrightsTouchPrevent();
                }}
              />
            );
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default Image;
