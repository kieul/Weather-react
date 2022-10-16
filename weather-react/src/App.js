import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <div className="card-main">
          <div className="container">
            <form className="searchBar" id="search-form">
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-4">
                  <input type="submit" value="Search" className="submit-btn" />
                  <button
                    type="submit"
                    id="current-location"
                    className="current-location-btn"
                    value="Current Location"
                  >
                    📍
                  </button>
                </div>
              </div>
            </form>
          </div>
          <br />
          <div className="middle">
            <div className="row">
              <div className="col-6">
                <div className="float-left">
                  <span className="degreelarge" id="temperature">
                    24
                  </span>
                  <span className="units">
                    <a href="#" id="celsius-link">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <h2 className="city" id="displayed-city"></h2>
                <h4 id="current-time"></h4>
                <h3 id="description">Mostly sunny</h3>
                <span id="maxTemperature"></span>
                <span id="maxTemperature">°C</span> |
                <span id="minTemperature"></span>
                <span id="maxTemperature">°C</span>
              </div>
            </div>
          </div>
          <br />
          <div className="maincard" id="forecast"></div>
          <br />
          <small id="creator">
            <a href="https://github.com/kieul/weather-app">Open-source code</a>
            <span> and design by </span>
            <a
              href="https://www.linkedin.com/in/linh-kieu/"
              target="_blank"
              rel="noreferrer"
            >
              Linh Kieu
            </a>
          </small>
        </div>
      </body>
      <script src="src/javascript.js"></script>
    </div>
  );
}

export default App;
