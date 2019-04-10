import React, { Component } from "react";
import "./App.css";
import "./query.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PImages from "./components/PImages";
import WImages from "./components/WImages";
import AImages from "./components/AImages";
import ConImages from "./components/ConImages";
import ParImages from "./components/ParImages";
import SImages from "./components/SImages";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  componentDidMount = () => {
    window.addEventListener("keyup", e => {
      if (e.keyCode === 44) {
        const text = "Ⓒ Copyright Adis Alic. All rights reserved";
        navigator.clipboard.writeText(text);
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={PImages} />
          <Route path="/weddings" component={WImages} />
          <Route path="/concerts" component={ConImages} />
          <Route path="/sport" component={SImages} />
          <Route path="/ads" component={ParImages} />
          <Route path="/awards" component={AImages} />
          <Route path="/biography" component={Biography} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
