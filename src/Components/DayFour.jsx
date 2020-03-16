import React, { Component } from 'react';

class DayFour extends Component{
    render(){
        const weather = this.props.forecast;
        return(
            <div className = "weather-container">
                <h2>Day Four</h2>
                <div className = "weather-content">
                    Weather: {weather.weather[0].main} <br />
                    Temperature: {weather.main.temp}
                </div>
            </div>
        );
    }
}

export default DayFour;