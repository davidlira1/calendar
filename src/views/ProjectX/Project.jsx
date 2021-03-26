import React from 'react';
import styled from 'styled-components';

var ProjectBox = styled.div
`   
    display: flex;
    align-items: center;
    
    margin: 0 auto;
    width: 90%;
    height: 80px;
    cursor: pointer;
    

`
//border: .5px solid gray;
//border-bottom: .5px solid gray;
var ProjectName = styled.div
`   
    flex-basis: 200px;
    padding: 20px;
    font-size: 20px;
`

var StatusBarContainer = styled.div
`   
    flex-grow: 1;
`

var StatusBar = styled.div
`   
    height: 35px;
    width: ${props => props.percentComplete * 100 + '%'};
    background-color: #226185;
    border-radius: 20px;
    transition: width 3s;
`

var Percentage = styled.div
`
    font-size: 24px;
    width: 50px;
    padding-right: 20px;
`

var Project = (props) => {
    console.log(props.stage)
    return (
        <ProjectBox>
            <ProjectName>{props.project.name}</ProjectName>
            <StatusBarContainer><StatusBar className="status-bar" percentComplete={props.project.percentComplete}></StatusBar></StatusBarContainer>
            <Percentage>{props.project.percentComplete * 100 + '%'}</Percentage>
        </ProjectBox>
    )
}

export default Project;