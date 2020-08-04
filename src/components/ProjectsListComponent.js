import React, { Component } from 'react';
import { Card, Col, Row, Button, CardTitle, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import HomeIcon from '@material-ui/icons/Home';

const Tag = ({ tagName, isActive, selectTag}) => {
    var color = "dark";
    if(isActive === false) color = "light";
    return (
        <Badge color={color} className="p-2 m-1 clickable" pill onClick={selectTag} >{tagName}</Badge>
    );
}

const Icon = ({ icon }) => {
    if (icon === 'job') {
        return (<WorkIcon />)
    }
    if (icon === 'home') {
        return (<HomeIcon />)
    }
    return (<div></div>)
}

const ProjectPageButton = ({link}) => {
    if(link !== null) {
        return <Button color="primary" style={{ float: 'right' }} className="m-1" href={link}>Link to Project Page</Button>
    }
    else {
        return <div></div>
    }
}

const TimelineElement = ({ project }) => {
    const tags = project.tags.map((tag, index) => <Tag key={index} tagName={tag} />)
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={project.date}
            icon={<Icon icon={project.icon} />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
            {tags}
            <h3 className="vertical-timeline-element-title">{project.name}</h3>
            <p> {project.description} </p>
            <ProjectPageButton link={project.link} />
            <Button color="dark" style={{ float: 'right' }} className="m-1"><Link to={`${process.env.PUBLIC_URL}/projects/${project.id}`}>More Details</Link></Button>
        </VerticalTimelineElement>
    );
}

class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTags: this.createListOfAllTags(),
            firstTime: true
        };
        this.selectTag = this.selectTag.bind(this);
    }

    createListOfAllTags() {
        var allTags = [];
        for (var i = 0; i < this.props.projects.length; i++) {
            for (var j = 0; j < this.props.projects[i].tags.length; j++) {
                if (allTags.map((tag) => tag.tag).indexOf(this.props.projects[i].tags[j]) === -1) {
                    allTags.push({tag:this.props.projects[i].tags[j], isActive: true});
                }
            }
        }
        return allTags;
    }

    selectTag(tagName) {
        var tags = this.state.allTags;
        if(this.state.firstTime === true) {
            for (let i = 0; i < tags.length; i++) {
                if (tags[i].tag === tagName) tags[i].isActive = true;
                else tags[i].isActive = false;
            }
            this.setState({firstTime: false});
        }
        else {
            for (let i = 0; i < tags.length; i++) {
                if (tags[i].tag === tagName) tags[i].isActive = !tags[i].isActive;
            }
        }
        
        this.setState({allTags: tags});
    }

    createActiveProjectsElements() {
        const projectElements = this.props.projects.map((project) => {
            var tags = this.state.allTags.filter((tag) => {
                return project.tags.indexOf(tag.tag) !== -1
            });
            var isActive = tags.map((tag) => tag.isActive).indexOf(true);
            if (isActive !== -1) {
                return (
                    <TimelineElement key={project.id} project={project} />
                );
            }
            return <div></div>;
        });
        return projectElements;
    }

    render() {
        const projectsElements = this.createActiveProjectsElements();
        
        const tagsElements = this.state.allTags.map((tag, index) => <Tag key={index} tagName={tag.tag} isActive={tag.isActive} selectTag={() => this.selectTag(tag.tag)} />)
        return (
            <div className="container">
                <Card className="col-12 col-md-12">
                    <Row>
                        <Col md="12" className="p-4">
                            <CardTitle><h4>My Projects</h4></CardTitle>
                            <p> Click on the technologies below to only show related projects </p>
                            {tagsElements}
                            <br></br>
                            <Button color="dark" className="m-1"><Link to={"/home"}>Back</Link></Button>
                        </Col>
                    </Row>
                </Card>
                <VerticalTimeline layout="1-column">
                    {projectsElements}
                </VerticalTimeline>
            </div>
        );
    }
}

export default ProjectsList;