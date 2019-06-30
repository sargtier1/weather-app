import React from "react";

import Cards from "../card/card"

import "semantic-ui-css/semantic.min.css";

const Forecast = props => {

  return (
    <>
      {props.city && props.country && (
        <div id="card-container">
          {props.forecast.map(day => (
          <Cards
            key = {day.dt}
            date = {day.dt}
            picId = {day.weather[0].id}
            temp = {day.main.temp}
            desc = {day.weather[0].description}
          />
          ))}
        </div>     
      )}
      {props.error && (
            <div
              style={{
                color: "#E74C3C",
                backgroundColor: "#FADBD8",
                padding: "1rem",
                borderRadius: ".28571429rem"
              }}
            >
            <h5>Error</h5>
            <br/>
            <hr
              style={{
                backgroundColor:"#E74C3C"
              }}
            />
            <p>{props.error}</p>
            </div>
      )}
    </>
  );
};

export default Forecast;
