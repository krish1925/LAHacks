import React, { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyArq3VutVvfi5-ECgS0iRogWZVJZXjSTM4';
const PLACES_API_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&types=(cities)`;

const CityDropdown = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`${PLACES_API_URL}&input=`);
      const data = await response.json();
      setCities(data.predictions);
    };
    fetchCities();
  }, []);

  const handleSelect = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <label htmlFor="city-select">Select a city:</label>
      <select id="city-select" value={selectedCity} onChange={handleSelect}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.place_id} value={city.description}>
            {city.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;




/*import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Events from './eventbrite/event';
import EventDetail from './eventbrite/event_detail';

const routes = {
  events: Events,
  eventDetail: EventDetail,
};

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Route
          initialRoute={{ name: 'events' }}
          render={({ location }) => {
            const { name, title, description, url, img } = location.state || {};
            const Component = routes[name];

            return <Component title={title} description={description} url={url} img={img} />;
          }}
        />
      </Router>
    );
  }
}
*/


// import React, { useState } from 'react';

// function EventbriteSearch() {
//   const [inputValue, setInputValue] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(`https://www.eventbriteapi.com/v3/users/me/?token=XPTMMVE5IJ4HTLN3COPI&query=${inputValue}`);
//     const data = await response.json();

//     console.log('data', data);

//     if (Array.isArray(data)) {
//       setSearchResults(data);
//     } else if (data.hasOwnProperty('results') && Array.isArray(data.results)) {
//       setSearchResults(data.results);
//     } else {
//       console.log('Invalid response data');
//     }

//     setInputValue('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       {searchResults.map((result) => (
//         <div key={result.id}>
//           <h2>{result.name}</h2>
//           <p>{result.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default EventbriteSearch;
