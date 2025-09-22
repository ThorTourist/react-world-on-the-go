import React, { use } from 'react';
import Country from '../Country/Country';

import './Countries.css'

const Countries = ({countriesPromise}) => {
    
    const countriesData = use(countriesPromise);
    const countriesName = countriesData.countries;
    // console.log(countriesName)
    return (
        <div>
            <h1>Countries in the world !!!</h1>
            <h2> Total Coutries are : {countriesName.length} </h2>
            
            <div className='Countries'>
                {
                countriesName.map(country => <Country country={country}
                key={country.cca3.cca3}
                ></Country>) 
            }
            </div>

            

        </div>
    );
};

export default Countries;