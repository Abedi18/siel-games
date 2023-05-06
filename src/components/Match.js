import React from 'react';
import PropTypes from 'prop-types';
import EditGame from './EditGame';
import DeleteGame from './DeleteGame';

function Match({ match, setMatches }) {
  const { id, home, away, conference, date, time, court, location } = match;

  const handleDelete = () => {
    const confirmation = window.confirm('Are you sure you want to delete this game?');
    if (confirmation) {
      fetch(`http://localhost:8000/games${id}`, {
        // fetch(`/api/matches/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => setMatches(data.matches));
    }
  };

  return (
    <div className="match">
      <div className="match-info">
        <h2 className="match-title">{home} vs {away}</h2>
        <p className="match-conference">{conference}</p>
        <p className="match-date">{date} at {time}</p>
        <p className="match-court">{court}, {location}</p>
      </div>
      <div className="match-actions">
        <EditGame match={match} setMatches={setMatches} />
        <DeleteGame handleDelete={handleDelete} />
      </div>
    </div>
  );
}

Match.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number.isRequired,
    home: PropTypes.string.isRequired,
    away: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    court: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  setMatches: PropTypes.func.isRequired,
};

export default Match;

