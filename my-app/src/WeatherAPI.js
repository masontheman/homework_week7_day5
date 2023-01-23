import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function WeatherAPI(){
    const [notapi,api] = useState(null)
    const [weather,setWeather] = useState("")
    function handleClick(e){
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=`)
        .then(res=>{console.log(res.data);
        api(res.data)})
        }
    function handleTempK(K){
        return ((K-273.15)*1.8)+32;

    }
    return (<div>
        <form onSubmit={handleClick}>
            <input type="text" value={weather} onChange={(e)=>setWeather(e.target.value)}></input>
            <input type="submit" ></input>
        </form>
        {notapi && <><p>Description: {(notapi.weather[0].description).toUpperCase()}</p>
        <p>Feels Like: {handleTempK(notapi.main.feels_like).toFixed(0)}&#176;</p>
        <p>Humidity: {notapi.main.humidity}%</p>
        <p>Pressure: {notapi.main.pressure}&Atilde;&curren;</p>
        <p>Temp: {handleTempK(notapi.main.temp).toFixed(0)}&#176;</p>
        <p>Max: {handleTempK(notapi.main.temp_max).toFixed(0)}&#176;</p>
        <p>Min: {handleTempK(notapi.main.temp_min).toFixed(0)}&#176;</p>
        </>}
        </div>);
    }