import { createContext, useContext, useState, useEffect } from "react";
const CityContext = createContext();
const data = require("../data/cities.json");

const CityProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [forecast, setForecast] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const values = { city, setCity, forecast, isLoading };
  async function fetchForecast(uri) {
    setIsLoading(true);
    const response = await fetch(uri);
    const forecasts = await response.json();
    setIsLoading(false);
    return forecasts;
  }

  useEffect(() => {
    const filteredArr = data.filter(
      (d) => d.il_adi.toLocaleLowerCase("tr") === city.toLocaleLowerCase("tr")
    );
    const uri = `https://api.open-meteo.com/v1/forecast?latitude=${filteredArr[0].lat}&longitude=${filteredArr[0].lon}&&timezone=UTC&daily=temperature_2m_max,temperature_2m_min,weathercode`;

    fetchForecast(uri).then((res) => {
      setForecast({
        ...forecast,
        max: res.daily.temperature_2m_max,
        min: res.daily.temperature_2m_min,
        code: res.daily.weathercode,
        date: res.daily.time,
      });
    });
  }, [city]);

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

const useCity = () => useContext(CityContext);

export { CityProvider, useCity };
