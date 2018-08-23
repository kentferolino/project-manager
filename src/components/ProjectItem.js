import React, { Component } from 'react';

class ProjectItem extends Component{

    constructor(){
        super();
    }

    deleteProject = id => {
        this.props.deleteProject();
    }

    render() {
        const project = this.props.project;
        return (
          <li> <strong>{this.props.id + 1} {project.title}</strong> - {project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.id)}> Delete </a> </li>
        );
      }
}
export default ProjectItem;