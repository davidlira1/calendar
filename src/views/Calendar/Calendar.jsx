import React from 'react';
import styled from 'styled-components';
import { getMonthData } from '../../month/monthData.js';
import CalendarHeader from './CalendarHeader.jsx';
import Days from './Days.jsx';
// import fetchMonthData from './fetchMonthData.js';

var CalendarContainer = styled.div
`
    font-family: 'Quicksand', sans-serif;
    margin: 100px 80px;
`

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            month: props.month,
            monthName: "",
            year: props.year,
            monthData: []
        }
        this.changeMonth = this.changeMonth.bind(this);
    }

    componentDidMount() {
        // fetchMonthData(this.state.month, this.state.year)
        // .then(data => {
        //     this.setState({
        //         monthName: data.monthName,
        //         monthData: data.monthData
        //     })
        // })
        var data = getMonthData(this.state.month, this.state.year);

        this.setState({
            monthName: data.monthName,
            monthData: data.monthData
        })
    }

    changeMonth(prevOrNext) {
        var newMonth = this.state.month;
        var newYear = this.state.year;
        if(prevOrNext === 'previous') {
            if(newMonth === 1) {
                newMonth = 12;
                newYear--;
            } else {
                newMonth -= 1;
            }
        } else if(prevOrNext === 'next') {
            if(newMonth === 12) {
                newMonth = 1;
                newYear++;
            } else {
                newMonth++;
            }
        }

        // fetchMonthData(newMonth, newYear)
        // .then(data => {
        //     this.setState({
        //         month: newMonth,
        //         monthName: data.monthName,
        //         year: newYear,
        //         monthData: data.monthData
        //     })
        // })
        var data = getMonthData(newMonth, newYear);

        this.setState({
            monthName: data.monthName,
            monthData: data.monthData
        })
    }

    render() {
        return (
            <CalendarContainer>
                <CalendarHeader monthName={this.state.monthName} year={this.state.year} changeMonth={this.changeMonth}/>
                <Days monthData={this.state.monthData}></Days>
            </CalendarContainer>
        )
    }
}

export default Calendar;