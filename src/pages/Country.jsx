import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../API/postApi';
import Loader from "../components/UI/Loader.jsx";
import CountryCard from '../components/Layout/CountryCard.jsx';
import SearchFilter from '../components/UI/SearchFilter.jsx';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // getCountryData();
      setCountries(res.data)
    })
  }, [])

  if (isPending) { return <h1><Loader /></h1> }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase()); // filtering the countries based on the search query from the user
    }
    return country;
  }

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter; // filtering the countries based on the region from the user
  }

  // here is the main logic
  const filteredCountries = countries.filter((country) => searchCountry(country) && filterRegion(country)) // filtering the countries based on the search query from the user

  return (
    <section className='country-section'>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className='grid grid-four-cols'>
        {
          filteredCountries.map((curCountry, index) => {
            return (
              <CountryCard country={curCountry} key={index} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default Country