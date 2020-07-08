import React from 'react';
import { Card, CardSubtitle, CardImg, CardLink, CardTitle, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Experiences  from './VerticalTimelineComponent';

const Info = ({icon, text, info}) => {
    return (
        <p><i className={icon}></i> {text}: {info}</p>
    );
}

const socialMediaIcons = ({icon, link}) => {
    return (
        <Button className="m-2 btn btn-danger btn-circle btn-xl" color="secondary" size="lg"><i className="fa fa-skype"></i></Button>
    );
}

const Home = ({ personalInfo, experiences }) => {
    return (
        <div className='container'>
            <Card className="col-12 col-md-12">
                <Row>
                    <Col md="8" className="p-4">
                        <CardTitle><h4>{personalInfo.name}</h4></CardTitle>
                        <CardSubtitle>{personalInfo.profession}</CardSubtitle>
                        <br />
                        <Info icon="fa fa-envelope-o" text="Email" info={personalInfo.email} />
                        <Info icon="fa fa-skype" text="Skype" info={personalInfo.skype} />
                        <Info icon="fab fa-linkedin" text="Location" info={personalInfo.location} />
                        <br />
                        <p> {personalInfo.description} </p>
                        <Row >
                            <Button className="m-2 btn btn-danger btn-circle btn-xl" color="primary" size="lg"><i className="fa fa-skype"></i></Button>{' '}
                            <Button className="m-2 btn btn-danger btn-circle btn-xl" color="secondary" size="lg"><i className="fa fa-skype"></i></Button>
                        </Row>

                        <CardLink href="#">Download CV</CardLink>
                        <CardLink href="#"><Link to='/projects'>Check Projects</Link></CardLink>
                    </Col>
                    <Col md="4" className="p-0" >
                        <CardImg  src={personalInfo.photo} width="100%"></CardImg>
                    </Col>
                </Row>
            </Card>
            <Experiences experiences={experiences} />
        </div>
    );
}

export default Home;