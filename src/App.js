import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Match from './components/Match';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';
import EditGame from './components/EditGame';
import DeleteGame from './components/DeleteGame';
import './App.css';

function App() {
  const [matches, setMatches] = useState([]); // Fixed variable name from "filteredMatches" to "matches"
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch matches data from local JSON file using fetch
  useEffect(() => {
    fetch('http://localhost:8000/games')
      .then(response => response.json())
      .then(data => setMatches(data.matches));
  }, []);

  // Filter matches based on search term
  const filteredMatches = matches.filter(match =>
    match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase())
    || match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase())
    || match.conference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort matches based on selected option
  const sortedMatches = [...filteredMatches].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'conference') {
      return a.conference.localeCompare(b.conference);
    } else {
      return 0;
    }
  });

  // Render AddGame, EditGame, and DeleteGame components
  return (
   
    <div className="container">
      <header className="header">
        <h1>Basketball League</h1>
        
      </header>
      <SearchBar setSearchTerm={setSearchTerm} />
      <SortBar setSortBy={setSortBy} />
      <div className="matches">
        {sortedMatches.map(match => (
          <Match
            key={match.id}
            match={match}
            setMatches={setMatches}
            EditGame={EditGame}
            DeleteGame={DeleteGame}
          />
        ))}
        
      </div>
    </div>
   
  );
}

export default App;

{/* <Router>

<Routes>
            <Route path="/" element={<AddGame />} />
            <Route path="/AddGame" element={<AddGame setMatches={setMatches} />} />
          </Routes>
</Router> */}
