import React, { Component } from 'react';
import $ from 'jquery';

import AddProjects from './components/AddProject';
import Projects from './components/Projects';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
    }
  }

  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        });
      }.bind(this),
      error: function (xhr,status,err){
        console.log(err);
      }
    })
  }

  getProjects(){
    this.setState({
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Mobile',
          category: 'Mobile Dev'
        },
        {
          title: 'Web',
          category: 'Web Dev'
        },
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject = (project) => {
    let projectsCopy = this.state.projects.slice();
    projectsCopy.push(project);
    this.setState({projects: projectsCopy });
    console.log(project);
  }

  handleDeleteProject = id => {
    const projectsCopy = this.state.projects.slice();
    projectsCopy.splice(id, 1);
    this.setState({projects: projectsCopy });
}

  render() {
    return (
      <div className="App">
        <h1> My app </h1>
        <AddProjects addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
