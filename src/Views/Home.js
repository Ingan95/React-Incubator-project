import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import SearchField from '../Components/SearchField';
import Axios from 'axios';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            city_name : "",
            redirect : null,
            weekForecast : null,
            forecastError: null
        }
        this.setCityName = this.setCityName.bind(this);
    }
    setCityName(event){
        let current_city = this.state.city_name;
        if (event.key === 'Enter' && current_city !== "")
        {
            const url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ current_city +'&appid=2ef4e7c15ba3ada1b11bba89ff522f9c';
            Axios.get(url)
            .then(response => {
                this.props.history.push({
                    pathname : "/dashboard",
                    state: { forecast : response.data.list,
                             error : this.state.forecastError }
                });
            })
            .catch(error => {
                this.setState({forecastError : error +'\n'+ url, current_city: ""});
                alert(error);
            })
        }
        this.setState({city_name : [event.target.value]});
        localStorage.setItem("City_name", [event.target.value]); 
    } 
    render(){
        return(      
            <div className = "HomeContainer">
                    <SearchField text="Enter your city" onKeyDownCapture = {this.setCityName}/>
            </div>
        );
    }
}

export default withRouter(Home);