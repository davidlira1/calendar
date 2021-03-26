import React from 'react';
import styled from 'styled-components';

var HeaderContainer = styled.div
`   position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    top: 0;
    background-color: #192a36;
    border-bottom: 1px solid black;
    height: 90px;
    width: 100%;
    color: white;
    font-size: 38px;
    
`
var Links = styled.div
`   cursor: pointer;
`

var Header = ({changeView}) => {
    return (
        <HeaderContainer>
            <Links onClick={(ev) => changeView("Project Management")}>Project Management</Links>
            {/* <img src="gypFillLogo.jpg" height="90"></img> */}
            <Links onClick={(ev) => changeView("Calendar")}>Calendar</Links>
        </HeaderContainer>
    )
}

export default Header;