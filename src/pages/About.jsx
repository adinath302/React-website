import React from 'react'
import countryFacts from "../API/countryData"

const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className='gradient-cards'>

        {
          countryFacts.map((country) => {
            // const  {id, countryName, capital, population, InterestingFact} = country  // destructuring the object form the array of objects
            return (
              <div key={country.id} className='card'>
                <div className='container-card bg-blue-box'>
                  <p className='card-title'>{country.countryName}</p>
                  <p>
                    <span className="card-description">Capital:{country.capital} </span>
                    Delhi
                  </p>
                  <p>
                    <span className="card-description">Population: {country.population} </span>
                    450
                  </p>
                  <p>
                    <span className="card-description">Intresting Facts: {country.InterestingFact} </span>
                    we love india
                  </p>

                </div>
              </div>

            )
          })
        }


      </div>
    </section>
  )
}

export default About