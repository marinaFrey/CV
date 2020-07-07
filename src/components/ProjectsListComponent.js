import React from 'react';
import { Media, Card, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    return (
        <Media tag="li">
            <Card>
                <Media body>
                    <Media heading> {project.name} </Media>
                    {project.description}
                    <Button>Link</Button>
                    <Button><Link to={"/projects/"+project.id}>Project Details</Link></Button>
                </Media>
                <Media right href="#">
                    <Media object data-src={project.photos[0]} alt="Generic placeholder image" />
                </Media>
            </Card>
        </Media>


    );
}

const ProjectsList = ({ projects }) => {
    const projectsElements = projects.map((project) => <Project key={project.id} project={project} />);
    return (
        <div className="container">
                <Media list>
                    {projectsElements}
                </Media>
        </div>
    );
}

export default ProjectsList;