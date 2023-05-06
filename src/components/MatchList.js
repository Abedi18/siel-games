import React from 'react';
import PropTypes from 'prop-types';
import Match from './Match';

function MatchList({ matches, setMatches }) {
  return (
    <div className="match-list">
      {matches.map(match => (
        <Match key={match.id} match={match} setMatches={setMatches} />
      ))}
    </div>
  );
}

MatchList.propTypes = {
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      home: PropTypes.string.isRequired,
      away: PropTypes.string.isRequired,
      conference: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      court: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
  setMatches: PropTypes.func.isRequired,
};

export default MatchList;

