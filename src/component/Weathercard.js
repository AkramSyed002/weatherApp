import React from 'react'
import './style.css'

const Weathercard = ({ temp,
       humidity,
      pressure,
      weathermode,
      name,
      speed,
      country,
      sunset}) => {
 const [weatherState, setWeatheState] = React.useState("");

  React.useEffect(() => {
    if (weathermode) {
      switch (weathermode) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermode]);
console.log("wetahrekjr sljtkl",weatherState);
  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi ${weatherState}`}></i>
          <i className={`wi ${weatherState}`}></i>
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>{weathermode}</div>
            <div className='place'>{name},{country} </div>
          </div>
        </div>

        <div className='date'>{new Date().toLocaleString()}</div>

        {/* Col section */}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className='extra-info-leftside'>
                {timeStr} PM <br />
                Sunset
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className='extra-info-leftside'>
              {humidity}<br />
                humidity
              </p>
            </div>
          </div>
          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className='extra-info-leftside'>
               {pressure}  <br />
                Pressure
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className='extra-info-leftside'>
                {speed}  <br />
                Speed
              </p>
            </div>
          </div>
        </div>
        <code style={{margin:'auto'}}>@Akram syed</code>
      </article>
    )
}

export default Weathercard




