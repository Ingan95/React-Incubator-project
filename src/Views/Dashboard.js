import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CurrentDay from '../Components/CurrentDay';
import DayOne from '../Components/DayOne';
import DayTwo from '../Components/DayTwo';
import DayThree from '../Components/DayThree';
import DayFour from '../Components/DayFour';
import DayFive from '../Components/DayFive';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            rest_of_the_days_weather : this.props.location.state.forecast
        }
    }
    
    render(){
        const { rest_of_the_days_weather: weekForecast }  = this.state
        return(
            <div>
                <div className = "header" style={{backgroundColor: "white"}}>
                    <h1>Dashboard</h1>
                </div>
                <div className = "dashboard" style={{backgroundColor: "pink"}}>
                    <div className = "item" style={{backgroundColor: "lightBlue"}}>
                        <CurrentDay forecast = {weekForecast[0]} />
                    </div>
                    <div className = "item" style={{backgroundColor: "Yellow"}}>
                        <DayOne forecast = {weekForecast[1]}/>
                    </div>
                    <div className = "item" style={{backgroundColor: "lightGreen"}}>
                        <DayTwo forecast = {weekForecast[2]}/>
                    </div>
                    <div className = "item" style={{backgroundColor: "Red"}}>
                        <DayThree forecast = {weekForecast[3]}/>
                    </div>
                    <div className = "item" style={{backgroundColor: "Grey"}}>
                        <DayFour forecast = {weekForecast[4]}/>
                    </div>
                    <div className = "item" style={{backgroundColor: "Purple"}}>
                        <h2>Day Five</h2>
                        <div  className = "weather-container">
                            <DayFive forecast = {weekForecast[5]}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Dashboard);