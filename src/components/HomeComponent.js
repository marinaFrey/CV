import React from 'react';
import { Card, CardSubtitle, CardImg, CardLink, CardTitle, Button, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import '../App.css';
import Experiences from './VerticalTimelineComponent';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TranslateIcon from '@material-ui/icons/Translate';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Info = ({ icon, text, info }) => {
    return (
        <p>{icon} <b>{text}:</b> {info}</p>
    );
}

const SocialMediaIcons = ({ icon, link }) => {
    return (
        <Button className="m-2 btn btn-dark btn-circle " color="secondary" size="lg" href={link} >{icon}</Button>
    );
}

const Home = ({ personalInfo, experiences }) => {
    return (
        <div className='container'>
            <Card className="col-12 col-md-12">
                <Row>
                    <Col md="7" className="p-4">
                        <CardTitle><h4>{personalInfo.name}</h4></CardTitle>
                        <CardSubtitle>{personalInfo.profession}</CardSubtitle>
                        <br />
                        <Info icon={<EmailIcon />} text="Email" info={personalInfo.email} />
                        <Info icon={<CallIcon />} text="Skype" info={personalInfo.skype} />
                        <Info icon={<LocationOnIcon />} text="Location" info={personalInfo.location} />
                        <Info icon={<TranslateIcon />} text="Languages" info={personalInfo.languages} />
                        <br />
                        <p> {personalInfo.description} </p>
                        <Row className="p-3">
                            <SocialMediaIcons icon={<GitHubIcon />} link={personalInfo.githubUrl} />
                            <SocialMediaIcons icon={<LinkedInIcon />} link={personalInfo.linkedInUrl} />
                            <SocialMediaIcons icon={<YouTubeIcon />} link={personalInfo.youtubeUrl} />
                            <SocialMediaIcons icon={<InstagramIcon />} link={personalInfo.instagramUrl} />
                            <SocialMediaIcons icon={<FacebookIcon />} link={personalInfo.facebookUrl} />
                        </Row>
                        <Row className="p-3">
                            <CardLink href={`${process.env.PUBLIC_URL}/assets/resume_Marina_Fortes_Rey.pdf `} 
                                        target="_blank"
                                        rel="noopener noreferrer">Download CV</CardLink>
                            <CardLink tag={Link} to={`/projects`}>My Projects</CardLink>
                        </Row>


                    </Col>
                    <Col md="5" className="p-0" >
                        <CardImg src={`${process.env.PUBLIC_URL}/${personalInfo.photo} `} width="100%"></CardImg>
                    </Col>
                </Row>
            </Card>
            <Experiences experiences={experiences} />
        </div>
    );
}

export default Home;