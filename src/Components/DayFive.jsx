import React, { Component } from 'react';

class DayFive extends Component{
    render(){
        const weather = this.props.forecast;
        return(
                <div className = "weather-content">
                    Weather: {weather.weather[0].main} <br />
                    Temperature: {weather.main.temp}
                </div>
        );
    }
}

export default DayFive;