import Countries from '../services/countries'
import { useState, useEffect } from 'react'
const CountryInfo = ({countryInfo}) => {
    const [weather, setWeather] = useState([])
    
    useEffect(() => {
        
        Countries.getWeather(countryInfo.latlng[0], countryInfo.latlng[1])
        .then(weatherdata =>{
            setWeather(weatherdata)
            console.log(weatherdata)
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
        {weather.current &&
        <>
        <p>Temperature {(weather.current.temp)}</p>
        <img src={`https://openweathermap.org/payload/api/media/file/${weather.current.weather.icon}@2x.png.png.`} 
        alt={weather.current.weather.description}/>
        <p>Wind {weather.current.wind_speed} m/s</p>
        </>
        }
        </>
        
    )
}
export default CountryInfo