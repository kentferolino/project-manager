import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    constructor() {
        super();
    }

    deleteProject = id => {
        this.props.onDelete(id);
        // const projectsCopy = this.props.projects.slice();
        // projectsCopy.splice(id, 1);
        // this.props.projects = projectsCopy;
    }

    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(
                (project, i) => { console.log(i); return (<ProjectItem key={i} id={i} project={project} deleteProject={this.deleteProject.bind(this)} />)}
            )
        }
        return (
            <div className=''>
                <br />
                My Projects (static values)
                {projectItems}
          </div>
        );
    }
}
export default Projects;