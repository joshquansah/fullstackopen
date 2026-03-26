import Countries from '../services/countries'
import { useState, useEffect } from 'react'
const CountryInfo = ({countryInfo}) => {
    const [weather, setWeather] = useState([])
    
    useEffect(() => {
        Countries.getCoordinates(countryInfo.capital[0])
        .then(capital => {
            console.log(capital)
            Countries.getWeather(capital[0].lat, capital[0].lon)
        .then(weatherdata =>{
            setWeather(weatherdata)
            console.log(weatherdata)
        })

        })
        
    }, [])
    return(
        <>
        <h1>{countryInfo.name.common}</h1> 
        <p>Capital {countryInfo.capital[0]}</p>
        <p>Area {countryInfo.area}</p>
        <h2>Languages</h2>
        <ul>
            {Object.entries(countryInfo.languages).map(([k, v]) => 
                <li key={k}>{v}</li>
            )}
        </ul>
        <img src={`${countryInfo.flags.png}`} alt={countryInfo.flags.alt} />
        <h2>Weather in {countryInfo.capital[0]}</h2>
        {weather.main &&
        <>
        <p>Temperature {weather.main.temp} Celsius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
        alt={weather.weather[0].description}/>
        <p>Wind {weather.wind.speed} m/s</p>
        </>
        }
        </>
        
    )
}
export default CountryInfo