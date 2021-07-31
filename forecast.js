import React, { useState } from 'react';
const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
   function getForecast() {
    fetch("https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?lang=en&units=auto", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "afefd5a342msh128bd830ccf12d1p185f07jsn09580f3dce99",
            "x-rapidapi-host": "dark-sky.p.rapidapi.com"
        }
    })
       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
      
	

   return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
   )

   }
}
export default Forecast;