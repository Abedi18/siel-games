import React from 'react';
import PropTypes from 'prop-types';

function SortBar({ sortByDate, sortByConference, addGame}) {
  return (
    <div className="sort-bar">
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByConference}>Sort by Conference</button>
      <button onClick={addGame}>Add Game</button>
    </div>
  //   <div className="container">
  //   <div className="match-tabs">
  //     <li className="tab-link">
  //       <a href="#match-date">Match By Date</a>
  //     </li>
  //     <li className="tab-link">
  //       <a href="#match-group">Match By Group</a>
  //     </li>
  //   </div>
  //   <h1 className="section-heading">Match By Date</h1>
  //   <div className="matchs" id="match-date"></div>
  //   <h1 className="section-heading">Match By Group</h1>
  //   <div className="matchs-by-group" id="match-group"></div>
  // </div>
  );
}

SortBar.propTypes = {
  sortByDate: PropTypes.func.isRequired,
  sortByConference: PropTypes.func.isRequired,
};

export default SortBar;


