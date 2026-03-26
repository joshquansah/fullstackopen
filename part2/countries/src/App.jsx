import { useState } from 'react'
import { useEffect } from 'react'
import Countries from './services/countries'
import Form from './components/Form'
import Display from './components/Display'


function App() {
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState('')
  const [countryInfo, setCountryInfo] = useState(null)
  let countriesToShow = []
  useEffect(() => {
  Countries.getCountries()
  .then(countries => {
  setCountries(countries)
  console.log(countries)
})
  }
,[])
useEffect(() => {
    if (countriesToShow.length === 1) {
        setCountryInfo(countriesToShow[0])
    }
}, [countriesToShow])
const handleNewCountry = (e) => {
  e.preventDefault()
  setCountry(e.target.value)
  setCountryInfo(null)
  
}
const handleNewCountryInfo = (e) => {
        e.preventDefault()
        setCountryInfo(countries.find(c => c.name.common.toLowerCase() === e.target.value.toLowerCase()))
        
    }

if(!countries){
  return null
}
countriesToShow = countries.filter(c => c && c.name.common.toLowerCase().includes(country.toLowerCase()))
  
return (
    <>
    <Form name={"find countries"} value={country} handleChange={handleNewCountry} />
    <Display countries={countriesToShow} countryInfo={countryInfo} handleNewCountryInfo={handleNewCountryInfo} />
    </>
  )
}

export default App
