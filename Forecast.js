import React, { useState } from 'react'; 
 //import React, { Fragment, useState, useEffect } from 'react';
// import axios from 'axios';

// function Forecast(){

// const [responseObj, setResponseObj] = useState({});

// const [query, setQuery] = useState('redux');
// const [request, setRequest] = useState();
// useEffect(() =>{
//     const fetchresponseObj = async() =>{
//         const result = await axios(`https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?lang=en&units=auto", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "afefd5a342msh128bd830ccf12d1p185f07jsn09580f3dce99",
//                 "x-rapidapi-host": "dark-sky.p.rapidapi.com=${query}`);
//         setQuery(result.data);
//     }
//     fetchresponseObj();
// }, [request]);

 const Forecast = () => {   
    
     let [responseObj, setResponseObj] = useState({});
    
    function getForecast()

    {
        
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "afefd5a342msh128bd830ccf12d1p185f07jsn09580f3dce99",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
    }
      
	

   return (
      // <Fragment>
    
      <div>
          <h2>Find Current Weather Conditions</h2>
          <div>
              {JSON.stringify(responseObj)}
          </div>
          <button onClick={getForecast}>Get Forecast</button>
      </div>

       //</Fragment>
   )

   }

 
export default Forecast;