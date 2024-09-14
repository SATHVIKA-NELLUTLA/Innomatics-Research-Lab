import React, { useState } from 'react';

function SearchBar({ countries }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);

    // Filter countries based on query
    const filtered = countries.filter(countryObj =>
      countryObj.country.toLowerCase().includes(input) ||
      countryObj.capital.toLowerCase().includes(input)
    );

    setResults(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by country or capital"
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {results.length > 0 ? (
          results.map((countryObj, index) => (
            <li key={index}>
              <strong>Country:</strong> {countryObj.country} <br />
              <strong>Capital:</strong> {countryObj.capital} <br />
              <strong>Population:</strong> {countryObj.population} <br />
              <strong>Official Language(s):</strong> {Array.isArray(countryObj.official_language) ? countryObj.official_language.join(', ') : countryObj.official_language} <br />
              <strong>Currency:</strong> {countryObj.currency} <br />
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
