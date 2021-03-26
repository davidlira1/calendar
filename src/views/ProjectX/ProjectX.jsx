import React from 'react';
import styled from 'styled-components';
import Project from './Project.jsx';

var ProjectXContainer = styled.div
`
    margin: 120px 5%;
    width: 50%;
    box-shadow: 3px 3px 5px 6px #ccc;

`

class ProjectX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 1
        }
    }

    componentDidMount() {
        // console.log('projectX mounted', this.props.projects.length)
        // if(this.props.projects.length > 0) {
        //     this.setState({
        //         stage: 2
        //     })
        // }
    }

    render() {
        
        return (
            <ProjectXContainer>
                {this.props.projects.map(project => {
                    console.log(project, this.state.stage)
                    return <Project project={project} stage={this.state.stage}/>
                })}
            </ProjectXContainer>
        )
    }
}


export default ProjectX;