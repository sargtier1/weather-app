import React from "react";

const Form = props => (
  <div id="form-container">
    <form onSubmit={props.getWeather}>
      <label>City</label>

      <input type="text" name="city" placeholder="Somewhere" />
      <br />
      <label>Country (Abbr.)</label>

      <input type="text" name="country" placeholder="US, UK, GR" />
      <br />
      <button>Get Weather</button>
    </form>
  </div>
);

export default Form;
