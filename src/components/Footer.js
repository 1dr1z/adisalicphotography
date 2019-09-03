import React, { Component } from "react";
import { DataConsumer } from "../context";
import FooterItem from "./FooterItem";

export class Footer extends Component {
  render() {
    const developer = process.env.REACT_APP_DEVELOPER_ID;
    const link = process.env.REACT_APP_DEVELOPER_LINK;
    return (
      <footer>
        <div className="wrapper-footer">
          <div className="icon-wrapper">
            <ul className="icon-items">
              <DataConsumer>
                {value => {
                  return value.contact.map(item => {
                    if (item.id < 4) {
                      return (
                        <li className="icon-item" key={item.id}>
                          <FooterItem item={item} />
                        </li>
                      );
                    }
                    return null;
                  });
                }}
              </DataConsumer>
            </ul>
          </div>
          <p className="designer">
            Website Designed by{" "}
            <a
              className="contact-mail"
              href={"mailto:" + link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {developer}
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
