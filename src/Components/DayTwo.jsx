import React, { Component } from 'react';

class DayTwo extends Component{
    render(){
        const weather = this.props.forecast;
        return(
            <div >
                <h2>Day Two</h2>
                <div className = "weather-content">
                    Weather: {weather.weather[0].main} <br />
                    Temperature: {weather.main.temp}
                </div>
            </div>
        );
    }
}

export default DayTwo;