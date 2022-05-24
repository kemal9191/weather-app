import React, { useEffect } from "react";
import { useCity } from "../context/CityContext";
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Wheather() {
  const { city, setCity, forecast, isLoading } = useCity();
  return (
    <div>
      <ul>
        {!isLoading &&
          forecast["max"].map((m, index) => {
            var d = new Date(forecast.date[index]);
            var dayName = days[d.getDay()];
            console.log(dayName);
            return (
              <li key={m}>
                <div className={index === 0 ? "active" : "passive"}>
                  <span>{dayName}</span>
                  {(forecast.code[index] === 61 ||
                    forecast.code[index] === 63 ||
                    forecast.code[index] === 65 ||
                    forecast.code[index] === 80 ||
                    forecast.code[index] === 81 ||
                    forecast.code[index] === 82) && (
                    <img src={require("../images/rainy.png")} />
                  )}
                  {(forecast.code[index] === 71 ||
                    forecast.code[index] === 73 ||
                    forecast.code[index] === 75 ||
                    forecast.code[index] === 77) && (
                    <img src={require("../images/snowy.png")} />
                  )}
                  {(forecast.code[index] === 3 ||
                    forecast.code[index] === 2 ||
                    forecast.code[index] === 1 ||
                    forecast.code[index] === 0) && (
                    <img src={require("../images/sunny.png")} />
                  )}
                  {(forecast.code[index] === 45 ||
                    forecast.code[index] === 48) && (
                    <img src={require("../images/cloudy.png")} />
                  )}
                  <span>{m}°</span>{" "}
                  <span className="muted">{forecast.min[index]}°</span>
                </div>
              </li>
            );
          })}
      </ul>

      <p></p>
    </div>
  );
}

export default Wheather;
