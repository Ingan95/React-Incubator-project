import React, { Component } from 'react';

class CurrentDay extends Component{
    constructor(){
        super();
        this.state = {
            activeDay : true,
            todos : [{key: 1, content:"Item1"},{key: 2, content:"Item2"},{key: 3, content:"Item3"}]
        }
        this.onClick = this.onClick.bind(this);
        this.showTodos = this.showTodos.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    onClick = () =>{
        let active = this.state.activeDay;
        this.setState({activeDay: !active});
    }
    showTodos = () => {
        const todos = this.state.todos;
        return todos.map(item => {
            return (
                <div key = {item.key}>
                    <span onClick = {() => this.removeItem(item)} >
                        {item.content}
                    </span>
                </div>
            )
        });
    }
    removeItem (item){
        let todos = this.state.todos;
        const index = todos.indexOf(item);
        todos.splice(index , 1);
        this.setState({todos});
    } 
    render(){
        const weather = this.props.forecast;
        return(
            <div className = "weather-container">
                <h2>Today</h2>
                <div className = {this.state.activeDay ? "weather-content" : "active-weather-content"} onClick = {this.onClick}>
                    Weather: {weather.weather[0].main} <br />
                    Temperature: {weather.main.temp}
                </div>
                <div>
                    {this.showTodos()}
                </div>
            </div>
        );
    }
}
export default CurrentDay;