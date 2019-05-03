import React, { Component } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Weather from "./components/weather/daily-weather";

import "./App.css";

const APIKEY = "372d7ffe73f751c7f500fe4fb4480a7a";

class App extends Component {
  state = {
    temperature: undefined,
    tempMax: undefined,
    tempMin: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        temperature: undefined,
        tempMax: undefined,
        tempMin: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please check your input and try again"
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div id="content">
          <Form getWeather={this.getWeather} r />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
