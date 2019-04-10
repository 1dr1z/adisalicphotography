import React, { Component } from "react";
import {
  logo,
  pImages,
  wImages,
  conImages,
  sImages,
  adsImages,
  aImages,
  contact,
  biography,
  defaultPic
} from "./data";
import Image from "./components/Image";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    logo,
    pImages,
    sImages,
    wImages,
    conImages,
    adsImages,
    aImages,
    contact,
    modal: false,
    item: defaultPic,
    biography
  };

  getItem = id => {
    const image = this.state.pImages.find(item => item.id === id);
    return image;
  };

  copyrightsPrevent = e => {
    const image = document.querySelectorAll(".image");
    image.forEach(img => {
      img.addEventListener("contextmenu", e => e.preventDefault());
    });
  };

  modalCopyPrevent = e => {
    if (e.button === 2) {
      const modalImage = document.querySelector("#modal");
      modalImage.addEventListener("contextmenu", e => e.preventDefault());
    }
  };

  copyrightsTouchPrevent = () => {
    window.oncontextmenu = function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };
  };

  zoomIn = item => {
    this.setState({ modal: true, item });
  };

  zoomOut = () => {
    this.setState({ modal: false });
  };

  mapImages = arr => {
    return arr.map(item => {
      return <Image key={item.id} item={item} />;
    });
  };

  handleMenu = e => {
    const element = document.querySelector(".fas");
    element.classList.toggle("fa-times");
    if (element.classList.length === 3) {
      document.querySelector(".menu-list").style.display = "inherit";
    } else {
      document.querySelector(".menu-list").style.display = "none";
    }
  };

  wheel = e => {
    document.querySelector(".images").scrollBy(e.deltaY, 0);
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          wheel: this.wheel,
          zoomIn: this.zoomIn,
          zoomOut: this.zoomOut,
          handleMenu: this.handleMenu,
          mapImages: this.mapImages,
          closeMenu: this.closeMenu,
          copyrightsPrevent: this.copyrightsPrevent,
          modalCopyPrevent: this.modalCopyPrevent,
          copyrightsTouchPrevent: this.copyrightsTouchPrevent
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
