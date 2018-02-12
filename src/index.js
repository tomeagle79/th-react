import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import './App.css';
//import createClass from 'create-react-class';
var createReactClass = require('create-react-class');

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
  {
    name: "Jeff",
    score: 5
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
        <Counter />
      </div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

// Counter ************************************************** //

let Counter = createReactClass({
  propTypes: {
    score: {}
  },
  getInitialState: function(){
    return {
      score: 0,
    }
  },
  decrementScore: function(e){
    this.setState({
      score: (this.state.score - 1),
    })
  },
  incrementScore: function(e){
    this.setState({
      score: (this.state.score + 1),
    })
  },
  render: function(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
});

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
