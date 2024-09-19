import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  function displayWeather(response) {
    alert(
      `The temperature in ${props.city} is ${Math.round(
        response.data.main.temp
      )}`
    );
  }

  axios.get(apiUrl).then(displayWeather);

  return (
    <div>
      <h2>Hello</h2>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
