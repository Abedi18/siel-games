import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditGame(props) {
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

  useEffect(() => {
    setGameData(props.game);
  }, [props.game]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGameData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/matches/${props.game.id}`, gameData)
    // axios.put(`/api/matches/${props.game.id}`, gameData)
      .then(response => {
        props.onGameUpdated(response.data);
      })
      .catch(error => console.log(error));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/games${props.game.id}`)
    // axios.delete(`/api/matches/${props.game.id}`)
      .then(() => {
        props.onGameDeleted(props.game.id);
      })
      .catch(error => console.log(error));
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h2>Edit Game</h2>
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
      <button type="submit">Update Game</button>
      <button type="button" onClick={handleDelete}>Delete Game</button>
    </form>
  );
}

export default EditGame;
