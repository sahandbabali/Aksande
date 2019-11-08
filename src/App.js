import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header";
import Searchbox from "./components/searchbox/searchbox";
import Natayejbox from "./components/reslist/reslist";
import axios from "axios";
import Footer from "./components/footer/footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchterm: "kitty",
      results: []
    };
  }

  changeterm = event => {
    this.setState({
      searchterm: event.target.value
    });
  };

  getdata = () => {
    console.log("getdata fired");
    var config = {
      headers: {
        Authorization:
          "563492ad6f917000010000010295795a8c084f6da2ef7158100d8e5b"
      }
    };

    axios
      .get(
        `https://api.pexels.com/v1/search?query=${this.state.searchterm}&per_page=12&page=1`,
        config
      )
      .then(res => this.setState({ results: res.data.photos }));
  };

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Searchbox changeterm={this.changeterm} getdata={this.getdata} />
        <Natayejbox results={this.state.results} />
        <Footer />
      </div>
    );
  }
}

export default App;
