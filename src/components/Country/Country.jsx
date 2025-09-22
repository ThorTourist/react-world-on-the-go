import React, { useState } from 'react';

import './Country.css' 

const Country = ({ country }) => {
    // console.log(country.name.common)

    const [visited, setVisited] = useState(false); 
    


    const handleVisited = () => {
// basic system
        // if (visited) {
        //     setVisited(true)
        // }
        // else {
        //     setVisited(false)
        // }
// second system
        // setVisited(visited?false:true);
        
        // third system 

        setVisited(!visited)
    }
    return (
       
        // div className={`Country ${visited? 'Country-visited':'Country-not-visited'}`}
        <div className={`Country ${visited && 'Country-visited'}`}>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.png.alt} />
            <h4>Name : { country.name.common}</h4>
            <h4>Capital : { country.capital.capital}</h4>
            <h4>Continent : { country.continents.continents}</h4>
            <h4>Total Population : { country.population.population}</h4>
            <p>Area: : {country.area.area} {country.area.area>300000? "Type: Big Country" : "Type: Small Country"}</p>
            <button onClick={handleVisited}> {visited ? "visited" : "not visited"}</button>
        </div>
    );
};

export default Country;