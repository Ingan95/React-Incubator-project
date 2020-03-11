import React, { Component } from 'react';
import SearchField from '../Components/SearchField';
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
        const current_city = localStorage.getItem("City_name");
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
        }
        return cityForcast;
    }
    render(){
        return(<div className = "box">
            <div> </div><div> </div><div> </div><div> </div><div> </div><div> </div>
            <div>
                <SearchField text="Enter your city" onChangeCapture = {this.getCityName} onKeyDownCapture = {this.getCityForcast}/>
            </div>
        </div>
        );
    }
}

export default Home;