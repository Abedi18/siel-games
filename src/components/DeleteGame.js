import React from 'react';
import axios from 'axios';

function DeleteGame(props) {

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/games${props.game.id}`)
    // axios.delete(`/api/matches/${props.game.id}`)
      .then(() => {
        props.onGameDeleted(props.game.id);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="delete-game">
      <h2>Delete Game</h2>
      <p>Are you sure you want to delete this game?</p>
      <p><strong>{props.game.home}</strong> vs. <strong>{props.game.away}</strong></p>
      <button type="button" onClick={handleDelete}>Yes</button>
      <button type="button" onClick={props.onCancel}>No</button>
    </div>
  );
}

export default DeleteGame;
