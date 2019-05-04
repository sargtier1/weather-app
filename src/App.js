import React, { Component } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Forcast from "./components/forcast/forcast";
import Weather from "./components/weather/daily-weather";

import "./App.css";

const APIKEY = "372d7ffe73f751c7f500fe4fb4480a7a";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    forcast: []
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIKEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      city: data.city.name,
      country: data.city.country,
      forcast: data.list
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div id="content">
          <Form getWeather={this.getWeather} getForcast={this.getForcast} />
          <Weather city={this.state.city} country={this.state.country} />
          <Forcast forcast={this.state.forcast} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
