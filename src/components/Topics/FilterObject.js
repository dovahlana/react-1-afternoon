import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            games: [
                { name: 'Fallout: New Vegas',
                  genre: 'solo rpg',
                  releaseDate: 2010
                },

                { name: 'Outlast',
                  genre: 'horror rpg',
                  releaseDate: 2013
                },

                { name: 'Skyrim',
                  genre: 'rpg',
                  releaseDate: 2011
                }
            ],
            

        userInput: '',
        filteredGames: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
      
  filterGames(prop) {
    let  games = this.state.games;
    let filteredGames = [];

    for ( let i = 0; i < games.length; i++ ) {
      if (games[i].hasOwnProperty(prop) ) {
        filteredGames.push(games[i]);
      }
    }

    this.setState({ filteredGames: filteredGames });
  }

    
      render() {
        return (
          <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.games, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button onClick= filterGames() className="confirmationButton"> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredGames, null, 10) } </span>
          </div>
        )
      }
}