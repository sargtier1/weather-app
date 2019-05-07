import React from "react";
import { Card } from "semantic-ui-react";

import moment from "moment"

const Cards = ({ date, icon, temp, desc }) => {

  let newDate = new Date ()
  const weekday = date * 1000
  newDate.setTime(weekday)

  const pic = `owf owf-${icon} owf-5x`

  return (
    <Card
      className="cardStyles"
      style={{
        textAlign: "center",
        width: "127px",
        padding: ".25rem"
      }}
    >
      <Card.Content
        style={{
          justifyContent: "center"
        }}
      >
        <h5>{moment(newDate).format("dddd")}</h5>
        <Card.Meta>{moment(newDate).format("MMMM Do")}</Card.Meta>
        <br />
        <Card.Description>
        <i className={pic}></i>
        <br />
        <h5 className="temp"> {Math.round(temp)} ˚F </h5>
        <Card.Meta>{desc}</Card.Meta>

        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Cards;
