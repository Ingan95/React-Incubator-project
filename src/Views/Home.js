import React, { Component } from 'react';
import Calendar from '../Components/Calendar';
import SearchField from '../Components/SearchField';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            city_name : ""
        }
        this.getCityName = this.getCityName.bind(this);
        this.getCityForcast = this.getCityForcast.bind(this);
    }
    getCityName(event){
        this.setState({city_name : [event.target.value]});
        localStorage.setItem("City_name", [event.target.value])
    } 
    getCityForcast(event){
        let cityForcast;
        const current_city = [this.state.city_name];
        if (event.key === 'Enter' && current_city !== ""){
            const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ current_city +'&appid=2ef4e7c15ba3ada1b11bba89ff522f9c';
            
            Axios.get(url)
            .then(response => {
                alert(current_city + ': ' + response.data.coord["lon"]);
                this.cityForcast = response.weather;
            })
            .catch(error => {
                alert(error +'\n'+ url);
            })
            alert(current_city + ": " +cityForcast);
        }
        return cityForcast;
    }

    render(){
        return(<div className = "center">
            <TextField id = "standard-basic" label="Enter your city" onChangeCapture = {this.getCityName} onKeyDownCapture = {this.getCityForcast}/>
        </div>
        );
    }
}

export default Home;