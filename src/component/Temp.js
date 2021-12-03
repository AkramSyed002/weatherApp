import React, { useEffect, useState } from "react";
import Weathercard from '../component/Weathercard'
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Lahore");
const [tempInfo,setTempInfo]=useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={your key here}`;

      const res = await fetch(url);
      const data = await res.json();
       const { temp, humidity, pressure } = data.main;
      const { main: weathermode } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermode,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo)
      console.log("temp imfo",tempInfo)
    } catch (error) {
      console.log("error while getting info", error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder='search'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className='searchButton'
            type='button'
            onClick={getWeatherInfo}
          >
            Search{" "}
          </button>
        </div>
      </div>
      {/* Card Here */}
    <Weathercard {...tempInfo}/>
    </>
  );
};

export default Temp;

