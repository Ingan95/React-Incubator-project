import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {
  state = {
    dateObject: moment()
  }
  weekDays = moment.weekdaysShort();

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
   return firstDay;
  };
  daysInMonth = () => {
    let dateObject = this.state.dateObject;
    let days = moment(dateObject).daysInMonth();
   return days;
  };

  render(){
    let weekdayshortname = this.weekDays.map(day => {
      return (
        <td key={day} className="week-day">
        {day}
        </td>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className="calendar-day">
          {d}
        </td>
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows 
        cells = []; // empty container 
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
      }
    });
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

   return(
     <div>
       <h1>Calendar </h1>
       <table>
         <thead>
           <tr>{weekdayshortname}</tr>
         </thead>
         <tbody>
           {daysinmonth}
         </tbody>
       </table>
     </div>
   ); 
  }
}

export default App;
