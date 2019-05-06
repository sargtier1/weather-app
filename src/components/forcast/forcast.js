import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const icon = "10d";

const Forcast = props => {
  return (
    <div>
      {props.city && props.country && (
        <Card.Group
          style={{
            margin: "auto"
          }}
        >
          {props.forcast.map(day => (
            <Card
              key={day.dt}
              className="cardStyles"
              style={{
                textAlign: "center",
                width: "125px",
                padding: ".25rem"
              }}
            >
              <Card.Content
                style={{
                  justifyContent: "center"
                }}
              >
                <h5>{day.dt_txt}</h5>
                <br />
                <Card.Description>
                  <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt="icon"
                  />
                  {console.log(day)}
                </Card.Description>
                <br />
                <span className="hi-temp">
                  {" "}
                  {Math.round(day.main.temp_max)}˚F{" "}
                </span>
                <span> | </span>
                <span className="low-temp">
                  {" "}
                  {Math.round(day.main.temp_min)}˚F{" "}
                </span>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </div>
  );
};

export default Forcast;
