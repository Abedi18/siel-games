import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleButtonClick = () => {
    fetch('http://localhost:8000/games')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.matches.filter(match =>
          match.homeTeam.toLowerCase().includes(inputValue.toLowerCase())
          || match.awayTeam.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSearchTerm(filteredData);
      })
      .catch(error => console.log(error));
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a team..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={handleButtonClick}>Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;