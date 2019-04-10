import React, { Component } from "react";
import { DataConsumer } from "../context";

export class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <DataConsumer>
          {value => {
            return (
              <section id="aligner">
                <div className="container">
                  <div className="contact-info">
                    <p className="info-p">
                      Želite li rezervisati svoj termin ili pak pitati me nešto?
                      Kontaktirajte me!
                    </p>
                    <ul className="contact-items">
                      {value.contact.map(item => {
                        if (item.link === "") {
                          return (
                            <li className="contact-item" key={item.id}>
                              <i className={item.icon}>
                                <span className="number">{item.name}</span>
                              </i>
                            </li>
                          );
                        } else {
                          return (
                            <li className="contact-item" key={item.id}>
                              <i className={item.icon}>
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {item.name}
                                </a>
                              </i>
                            </li>
                          );
                        }
                      })}
                    </ul>
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

export default Contact;
