import React, { Component } from 'react';
import Calendar from '../Components/Calendar';

class CurrentDay extends Component{
    render(){
        const weather = this.props.forecast;
        return(
            <div >
                <h2>Today</h2>
                <div className = "weather-content">
                    Weather: {weather.weather[0].main} <br />
                    Temperature: {weather.main.temp}
                </div>
            </div>
        );
    }
}
export default CurrentDay;