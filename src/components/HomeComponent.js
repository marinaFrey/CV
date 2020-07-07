import React from 'react';
import { Card, CardSubtitle, CardImg, CardText, CardLink, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = ({ personalInfo }) => {
    return (
        <div className='container'>
            <Card className="col-12 col-md-12">
                <CardTitle><h4>{personalInfo.name}</h4></CardTitle>
                <CardSubtitle>{personalInfo.profession}</CardSubtitle>
                <CardBody>
                    <Row>
                        <Col md="8">
                            <p> {personalInfo.description} </p>
                            <p>Email: {personalInfo.email}</p>

                            <p>sdasidsa</p>
                            <p>sdasidsa</p>
                            <Button>Download CV</Button>
                            <Button><Link to='/projects'>Check Projects</Link></Button>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#"><Link to='/projects'>Check Projects</Link></CardLink>
                        </Col>
                        <Col md="4">
                            <CardImg right src={personalInfo.photo} width="100%"></CardImg>
                        </Col>
                    </Row>

                </CardBody>


            </Card>

        </div>
    );
}

export default Home;