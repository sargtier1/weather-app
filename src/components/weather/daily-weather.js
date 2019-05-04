import React from "react";

const Weather = props => (
  <div>
    {props.city && props.country && (
      <h2>
        {props.city}, {props.country}
      </h2>
    )}
  </div>
);

export default Weather;
