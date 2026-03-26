import {useState} from 'react'
import CountryInfo from './CountryInfo'
const Display = ({countries, handleNewCountryInfo, countryInfo}) => {
    
    
    if(countries.length > 10){
        return(
            <p>Too many matches, specify another filter</p>
        )
    }
    
        
   
    
    
    return(
        <>
        {countryInfo
        ? <CountryInfo countryInfo={countryInfo} />
        : countries.map(c => {
            return (<>
        <p key={c.name.common}>{c.name.common}</p> <button key={c.name.official} type = "submit" value={c.name.common} onClick={handleNewCountryInfo}>show</button>
        </>
        )}
        )
        }
        </>
    )
}
export default Display