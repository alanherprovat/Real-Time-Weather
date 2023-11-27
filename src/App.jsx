import { useState } from "react";
import "./index.css";
import axios from "axios";
import { FaLocationCrosshairs } from "react-icons/fa6";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [sobj, setSobj] = useState([]);
  var url = `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
  }&q=${location}`;

  // Enter Keypress Event
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLocation(event.target.value);

      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          alert("City Not Found!!!");
          console.log(error);
        });
      setLocation("");
      setSobj([]);
    }
  };

  // From suggestion Click
  const clickFromSugg = (city, con) => {
    var tem = city + "," + con;
    setLocation(tem);
    let upUrl = url.replace(`${location}`, tem);
    fetch(upUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        alert("City Not Found!!!");
        console.error("Error fetching suggestions:", error);
      });
    setLocation("");
    setSobj([]);
  };

  //Fetching automatch cityname
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setLocation(inputValue);
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${inputValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        const cityData = Object.keys(data).map((key) => {
          const item = data[key];
          return {
            name: item.name,
            latitude: item.lat,
            longitude: item.lon,
            con: item.country,
          };
        });
        setSobj(cityData);
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
      });
  };

  // From device geolocation buttom
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetch(
            `https://api.weatherapi.com/v1/current.json?key=${
              import.meta.env.VITE_API_KEY
            }&q=${position.coords.latitude},${position.coords.longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              setData(data);
            })
            .catch((error) => {
              console.error("Error fetching suggestions:", error);
            });
        },
        (error) => {
          console.log("Error occurred. Error code: " + error.code);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <div className="navi">
          <input
            value={location}
            onChange={handleInputChange}
            onKeyDown={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
          <button className="icon-butt" onClick={getLocation}>
            <FaLocationCrosshairs className="loc-icons" />
          </button>
        </div>

        {/* suggestion  section */}
        {sobj.length > 0 && (
          <ul>
            {sobj.map((suggestion, index) => (
              <li
                key={index}
                onClick={() =>
                  clickFromSugg(
                    suggestion.name,
                    suggestion.con,
                    suggestion.latitude,
                    suggestion.longitude
                  )
                }
              >
                {suggestion.name}
                {suggestion.name && ","}
                {suggestion.con}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>
              {data.location ? data.location.name : null}
              {data.location ? ", " : null}
              {data.location ? data.location.country : null}
            </p>
          </div>
          <div className="temp">
            {data.current ? <h1>{data.current.temp_c.toFixed()}°C</h1> : null}
          </div>
        </div>

        {data.location !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.current ? (
                <p className="bold">{data.current.feelslike_c.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.current ? (
                <p className="bold">{data.current.humidity}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.current ? (
                <p className="bold">{data.current.wind_mph.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
            <div className="w-icon">
              {data.current ? (
                <img id="wicon" src={data.current.condition.icon} alt="" />
              ) : null}
              {data.current ? (
                <p id="wiconP">{data.current.condition.text}</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
