import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import './App.css';

// VARS ************************************************** //

var PLAYERS = [
  {
    name: "Jim",
    score: 31
  },
  {
    name: "Tim",
    score: 31
  },
  {
    name: "Sim",
    score: 31
  },
  {
    name: "Kim",
    score: 31
  },
  {
    name: "Nim",
    score: 31
  },

]



// Header ************************************************** //

function Header(props){
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Player ************************************************** //

function Player(props){
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score}/>
      </div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

// Counter ************************************************** //

function Counter(props){
  return(
    <div className="counter">
      <button className="counter-action decrement" > - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" > + </button>
    </div>
  )
}

Counter.propTypes = {
  score: PropTypes.number.isRequired
}

// for (var i=0; i<players.length; i++){
// console.log(players[i].name);
// }

// App ************************************************** //

function  App(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title}/>
      <div className="players">
        {props.players.map(
          function(player, i){
            return <Player key={i} name={player.name} score={player.score} />;
          }
        )}
      </div>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  })).isRequired,
};

App.defaultProps = {
  title: "Scoreboard",
  //description: "Score counting app"
}

ReactDOM.render( <App description="Score counting app" players={PLAYERS}/>, document.getElementById('container') );
