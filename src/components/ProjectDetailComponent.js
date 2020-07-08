import React from 'react';
import { Card, CardTitle, Row, Col, CardImg, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectDetail = ({ project }) => {
    console.log(project.photos);
    return (
        <div className="container">
            <Card className="col-12 col-md-12">
                <Row>
                    <Col md="8" className="p-4">
                        <Row className="p-3">
                            <CardTitle><h4>{project.name}</h4></CardTitle>
                            <Button color="primary" style={{ float: 'right' }} className="m-2" href={project.link}>Link to Project Page</Button>
                        </Row>
                        <p>{project.date}</p>
                        <CardImg src={project.photos[0]} width="100%"></CardImg>
                        <p> {project.longDescription} </p>
                        <Button color="dark" className="m-1"><Link to={"/projects"}>Back</Link></Button>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ProjectDetail;