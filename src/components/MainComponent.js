import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import ProjectsList from './ProjectsListComponent';
import ProjectDetail from './ProjectDetailComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {


        const ProjectWithId = ({ match }) => {
            return (
                <ProjectDetail project={this.props.projects.filter((project) => project.id === parseInt(match.params.projectId, 10))[0]} />
            );
        }

        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/projects" component={() => <ProjectsList projects={this.props.projects} />} />
                    <Route path="/projects/:projectId" component={ProjectWithId} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;