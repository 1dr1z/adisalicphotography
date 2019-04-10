import React, { Component } from "react";
import styled from "styled-components";
import { DataConsumer } from "../context";

class Modal extends Component {
  render() {
    return (
      <DataConsumer>
        {value => {
          const { modal } = value;
          const { path, alt, id } = value.item;
          if (!modal) {
            return null;
          } else
            return (
              <ModalContainer
                onClick={() => {
                  value.zoomOut();
                }}
                onMouseDown={e => {
                  value.modalCopyPrevent(e);
                }}
              >
                <div id="modal">
                  <img className="image" id={id} src={path} alt={alt} />
                </div>
              </ModalContainer>
            );
        }}
      </DataConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 98vh;
    max-width: 40%;
    margin: 0;
    z-index: 9999;
  }

  #modal {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

export default Modal;
