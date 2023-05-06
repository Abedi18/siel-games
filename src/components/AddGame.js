import React, { useState } from 'react';
import axios from 'axios';

function AddGame(props) {
  const [gameData, setGameData] = useState({
    home: '',
    away: '',
    conference: '',
    day: '',
    date: '',
    time: '',
    court: '',
    location: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGameData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/games', gameData)
    // axios.post('/api/matches', gameData)
      .then(response => {
        props.onGameAdded(response.data);
        setGameData({
          home: '',
          away: '',
          conference: '',
          day: '',
          date: '',
          time: '',
          court: '',
          location: '',
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add Game</h2>
      <div className="form-group">
        <label htmlFor="home">Home Team:</label>
        <input type="text" name="home" value={gameData.home} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="away">Away Team:</label>
        <input type="text" name="away" value={gameData.away} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="conference">Conference:</label>
        <input type="text" name="conference" value={gameData.conference} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="day">Day:</label>
        <input type="text" name="day" value={gameData.day} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" value={gameData.date} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input type="time" name="time" value={gameData.time} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="court">Court:</label>
        <input type="text" name="court" value={gameData.court} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input type="text" name="location" value={gameData.location} onChange={handleInputChange} required />
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
}

export default AddGame;
