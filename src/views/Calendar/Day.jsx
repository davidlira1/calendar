import React from 'react';
import styled from 'styled-components';

var DayContainer = styled.div
`
    border: 1px solid #353738;
    height: 150px;
    text-align: center;
    font-size: 20px;
`

var Day = (props) => {
    var {dayData} = props;
    return (
        <DayContainer>
            {dayData.dayNumber}
        </DayContainer>
    )
}

export default Day;