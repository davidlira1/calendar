import React from 'react';
import Header from './views/Header/Header.jsx';
import ProjectX from './views/ProjectX/ProjectX.jsx';
import Calendar from './views/Calendar/Calendar.jsx';
import data from './views/ProjectX/data.js';


class App extends React.Component {
  constructor(props) {
      super(props);

      var date = new Date();
      this.state = {
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          view: "Calendar",
          projects: []
      }
      this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
      this.setState({
          projects: data
      })
  }

  changeView(viewName) {
      this.setState({
          view: viewName
      })
  }

  render() {

    return(
      <div className="App">
        <Header changeView={this.changeView}/>
                 
        {this.state.view === "Project Management"
        ? <ProjectX projects={this.state.projects}/>
        : <Calendar month={this.state.month} year={this.state.year}/>}
                  
      </div>
    )
  }
}

export default App;
