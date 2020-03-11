import React, { Component } from 'react';
import Calendar from '../Components/Calendar';

import CurrentDay from '../Components/CurrentDay';
import DayOne from '../Components/DayOne';
import DayTwo from '../Components/DayTwo';
import DayThree from '../Components/DayThree';
import DayFour from '../Components/DayFour';
import DayFive from '../Components/DayFive';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            current_day_weather : 0,
            rest_of_the_days_weather : []
        }
    }
    render(){
        return(
            <div>
                <div className = "container">
                    <div className = "item">
                        <CurrentDay />
                        <DayOne />
                        <DayTwo />
                        <DayThree />
                        <DayFour />
                        <DayFive />
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;