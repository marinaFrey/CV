import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Row, Label, Col, Media } from 'reactstrap';

const ProjectDetail = ({ project }) => {
    return (
        <div className="container">
            <Card className="col-12 col-md-12">
                <CardTitle><h4>{project.name}</h4></CardTitle>
                <CardBody>
                    <Row>
                        <Col md="3">
                            <img src={project.photos[0]} ></img>

                        </Col>
                        <Col md="9">
                            <p> {project.longDescription} </p>
                        </Col>
                    </Row>
                    <Row>

                    </Row>

                </CardBody>

            </Card>
        </div>
    );
}

export default ProjectDetail;