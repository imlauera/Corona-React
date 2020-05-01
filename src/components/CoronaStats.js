import React, { Component } from "react";
import "./CoronaStats.css";

class CoronaStats extends Component {
	render(){
		return (
           this.props.countries.map(c => {
              const { Country, CountryCode, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered} = c;
              return (
					<tbody>
					<tr>
						<td title="country"><p id="country">{Country} </p></td>
						<td title="new confirmed"><p id="newconfirmed">{NewConfirmed} </p></td>
						<td title="total confirmed"><p id="totalconfirmed">{TotalConfirmed}</p></td>
						<td title="new deaths" ><p id="newdeaths">{NewDeaths}</p></td>
						<td title="total deaths"><p id="totaldeaths">{TotalDeaths}</p></td>
						<td title="new recovered"><p id="newrecovered">{NewRecovered}</p></td>
						<td title="total recovered"><p id="totalrecovered">{TotalRecovered}</p></td>
					</tr>
					</tbody>
              );
			})
		);
	}
}



export default CoronaStats;
