import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import ProjectsList from './ProjectsListComponent';
import ProjectDetail from './ProjectDetailComponent';
import { PERSONAL_INFO } from '../shared/personalInfo';
import { PROJECTS } from '../shared/projects';
import { EXPERIENCE } from '../shared/experience';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: PERSONAL_INFO,
            projects: PROJECTS,
            experiences: EXPERIENCE
        };
    }

    render() {
        const ProjectWithId = ({ match }) => {
            return (
                <ProjectDetail project={this.state.projects.filter((project) => project.id === parseInt(match.params.projectId, 10))[0]} />
            );
        }
        return (
            <div>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/home`}  component={() => <Home personalInfo={this.state.personalInfo} experiences={this.state.experiences}/>} />
                    <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={() => <ProjectsList projects={this.state.projects} />} />
                    <Route path={`${process.env.PUBLIC_URL}/projects/:projectId`} component={ProjectWithId} />
                    <Redirect to={`${process.env.PUBLIC_URL}/home`}  />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);