import React from 'react'

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {

    const handleInputEvent = (event) => {
        event.preventDefault() // used to prevent the form from submitting and reloading the page before sending the data 
        setSearch(event.target.value);
    }

    const HandleSelectChange = (event) => {
        event.preventDefault()
        setFilter(event.target.value);
    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortCountry);
    }
    return (
        <section className='section-searchFilter container'>
            <div>

                <input
                    type="text"
                    placeholder='search'
                    value={search} // it will get the value from the input field to the variable search
                    onChange={handleInputEvent} />

            </div>
            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>
            </div>
            <div>
                <button onClick={() => sortCountries("desc")}>Dsc</button>
            </div>
            <div>
                <select className='select-section' value={filter} onChange={HandleSelectChange}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </section>
    )
}

export default SearchFilter