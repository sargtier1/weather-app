import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const icon = "10d";

const Forcast = props => {
  return (
    <div>
      {props.city &&  props.country && (
        <Card.Group
          style={{
            margin: "auto"
          }}
        >
          <Card
            className="cardStyles"
            style={{
              textAlign: "center",
              width: "115px",
              padding: "1rem"
            }}
          >
            <Card.Content
              style={{
                justifyContent: "center"
              }}
            >
              <h5>Day</h5>
              <br />
              <Card.Description>
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt="icon"
                />
              </Card.Description>
              <br />
              <span className="hi-temp"> hi </span>
              <span> | </span>
              <span className="low-temp"> low </span>
            </Card.Content>
          </Card>
        </Card.Group>
      )}
    </div>
  );
};

export default Forcast;
