import React, { Component } from 'react';
import './App.css';
import CoronaStats from "./components/CoronaStats";
import axios from "axios";


class App extends Component {

  state = {
	countries: []
  };

  componentDidMount() {
	axios
	  .get("https://api.covid19api.com/countries")
	  .then(response => {
		// create an array of countries only with relevant data
		const newCountries = response.data.map(c => {
		  return {
			country: c.Country,
			slug: c.Slug,
			ISO2: c.ISO2
		  }
		});

		// create a new "State" object without mutating 
		// the original State object. 
		const newState = Object.assign({}, this.state, {
		  countries: newCountries
		});

		// store the new state object in the component's state
		this.setState(newState);
	  })
	  .catch(error => console.log(error));
  }

  render() {
	return (
	  <div className="App">
			<CoronaStats countries={this.state.countries} />
	  </div>
	);
  }
}


export default App;
