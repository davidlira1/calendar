import React from 'react';
import styled from 'styled-components';

var CalendarHeaderContainer = styled.div
`   
    height: 80px;
    display: flex;
`

var MonthNameContainer = styled.div
`   
    font-size: 32px;
    width: 250px;
    padding: 25px;
`

var ButtonContainer = styled.div
`
    background-color: transparent;
    vertical-align: center;
    font-size: 24px;
    padding-top: 30px;
    margin: 0 14px;
    cursor: pointer;
`

var CalendarHeader = (props)  => {
    return (
        <CalendarHeaderContainer>
            <MonthNameContainer>{props.monthName} {props.year}</MonthNameContainer>
            <ButtonContainer onClick={(ev) => props.changeMonth("previous")}><i class='fas fa-angle-left'></i></ButtonContainer>
            <ButtonContainer onClick={(ev) => props.changeMonth("next")}><i class='fas fa-angle-right'></i></ButtonContainer>
        </CalendarHeaderContainer>
    )
}

export default CalendarHeader;