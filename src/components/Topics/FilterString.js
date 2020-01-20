import React, { Component, useImperativeHandle } from 'react';

export default class FilterString extends Component {

    constructor() {
        super();
        
        this.state = {
        companies: ['Bethesda','Red Barrel','Obsidian'],
        userInput: '',
        filteredCompanies: []
        };
    }
    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterCompanies(userInput) {
        let companies = this.state.companies;
        let filteredCompanies = [];

        for ( let i = 0; i < companies.length; i++ ) {
          if ( companies[i].includes(userInput) ) {
            filteredCompanies.push(companies[i]);
          }
        }
    
        this.setState({ filteredCompanies: filteredCompanies });
      }
    
      render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Companies: { JSON.stringify(this.state.companies, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterCompanies(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Companies: { JSON.stringify(this.state.filteredCompanies, null, 10) } </span>
          </div>
        )
      }
    }