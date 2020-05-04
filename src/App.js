import React, { Component } from 'react';
import './App.css';
import './components/CoronaStats.css'
import CoronaStats from "./components/CoronaStats";
import axios from 'axios';

class App extends Component {
  state = {
    countries: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getData() {
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
    document.title = "Corona Stats"
    this.getData();
  }
  renderTable(){
    if(!this.state.isLoading){
        return (
            <div id="box">
                <table id="stats">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>New Confirmed</th>
                            <th>Total Confirmed</th>
                            <th>New Deaths</th>
                            <th>Total Deaths</th>
                            <th>New Recovered</th>
                            <th>Total recovered</th>
                        </tr>
                    </thead>
                    <CoronaStats countries = {this.state.countries} />
                </table>
            </div>
        );
        } else {
            return (
                <center><h4>Loading...</h4></center>
            );
        }
    }

  render() {
    return (
    <body>
        <center>
            <h3 id="title">Corona Stats</h3>
            <div id="warning"><small>This is a simple demo, the data
            is being taken from api.covid19api.com</small></div>
        </center>

        <div>
            {this.renderTable()}
        </div>
    </body>
    );
  }
}


export default App;
