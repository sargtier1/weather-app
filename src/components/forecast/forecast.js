import React from "react";

import Cards from "../card/card"

import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Forecast = props => {

  return (
    <div>
      {props.city && props.country && (
        <Card.Group id="card-container"
          style={{
            margin: "auto"
          }}
        >
          {props.forecast.map(day => (
          <Cards
            key = {day.dt}
            date = {day.dt}
            icon = {day.weather[0].id}
            temp = {day.main.temp}
            desc = {day.weather[0].description}
          />
          ))}
        </Card.Group>
      )}
    </div>
  );
};

export default Forecast;
