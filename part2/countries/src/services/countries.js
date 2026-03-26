import axios from "axios"
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/"
const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?"
const api_key = import.meta.env.VITE_SOME_KEY
const getCountries = () => {
    const req = axios.get(`${baseUrl}/all`)
    return req.then(response => response.data)
}
const getCountry = (country) => {
    const req = axios.get(`${baseUrl}/name/${country}`)
    return req.then(response => response.data)
}
const getWeather = (lat, lon) => {
    const req = axios.get(`${weatherUrl}lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
    return req.then(response => response.data)
}   
export default {
    getCountries,
    getCountry,
    getWeather
}