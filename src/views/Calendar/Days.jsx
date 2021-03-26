import React from 'react';
import styled from 'styled-components';

import Day from './Day.jsx';

var DaysContainer = styled.div
`
    display: grid;
    grid-template-columns: repeat(7, auto);
`

var Days = (props) => {
    var {monthData} = props;

    return (
        <DaysContainer>
            {monthData.map(day => {
                return (
                    <Day dayData={day}/>
                )
            })}
        </DaysContainer>
    )
}

export default Days;