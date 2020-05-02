import React, { Component } from 'react';
import './App.css';
import './components/CoronaStats.css'
import CoronaStats from "./components/CoronaStats";

import axios from "axios";

class App extends Component {
  state = {
    countries: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getPosts() {
    axios
      // This is where the data is hosted
      .get("https://api.covid19api.com/summary")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          countries: response.data.Countries,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getPosts();
  }
  // Putting that data to use
  render() {
    const { isLoading  } = this.state;
    return (
      <React.Fragment>
        <body>
            <center><h3 id="title">Corona Stats</h3></center>
            <div>
              {!isLoading ? (
                <table id="stats">
				<tr>
					<th>Country</th>
					<th>New Confirmed</th>
					<th>Total Confirmed</th>
					<th>New Deaths</th>
					<th>Total Deaths</th>
					<th>New Recovered</th>
					<th>Total recovered</th>
				</tr>
                <CoronaStats countries = {this.state.countries} />
                </table>
              ) : (
                <center><p>Loading...</p></center>
              )}
            </div>
        </body>
      </React.Fragment>
    );
  }
}


export default App;
