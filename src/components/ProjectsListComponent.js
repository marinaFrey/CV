import React, { Component } from 'react';
import { Card, CardBody, CardFooter, Divider, Tag as ChakraTag,
    Text, Button, Stack, Heading, Wrap,
    Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ProjectPageButton from '../shared/ProjectPageButtonComponent';
import { PROJECTS } from '../shared/data/projects';

const Tag = ({ tagName, isActive, selectTag}) => {
    var variant = "solid";
    if(isActive === false) variant = "outline";
    return (
        <ChakraTag key={tagName}  variant={variant} className="p-2 m-1 clickable" pill onClick={selectTag} >{tagName}</ChakraTag>
    );
}

const Element = ({ project, color, icon }) => {
    const tags = project.tags.map((tag, index) => <Tag key={index} tagName={tag} />)
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid #fff'  }}
            date={project.date}
            icon={icon}
            iconStyle={{ background: color, color: '#fff' }}>
            <Stack>
                <Wrap spacing={1}>
                    {tags}
                </Wrap>
                
                <Heading className="vertical-timeline-element-title">{project.name}</Heading>
                <Text> {project.description} </Text>
                <Divider />
                <div></div>         
            </Stack>
            
            <Stack direction='row' justify="end" spacing={4} align='center' 
                style={{display: 'inline-flex',float: 'inline-end'}}>
                                
                <ProjectPageButton link={project.link} />
                <Button as={ReactRouterLink} to={`/projects/${project.id}`} rightIcon={<ArrowForwardIcon />}  
                    colorScheme='teal' style={{ float: 'right' }} >
                    View more
                </Button>
            </Stack>
            
        </VerticalTimelineElement>
    );
}

class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
            allTags: this.createListOfAllTags(PROJECTS),
            firstTime: true
        };
        this.selectTag = this.selectTag.bind(this);
    }

    createListOfAllTags(projects) {
        var allTags = [];
        for (var i = 0; i < projects.length; i++) {
            for (var j = 0; j < projects[i].tags.length; j++) {
                if (allTags.map((tag) => tag.tag).indexOf(projects[i].tags[j]) === -1) {
                    allTags.push({tag: projects[i].tags[j], isActive: true});
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
        const projectElements = this.state.projects.map((project) => {
            var tags = this.state.allTags.filter((tag) => {
                return project.tags.indexOf(tag.tag) !== -1
            });
            var isActive = tags.map((tag) => tag.isActive).indexOf(true);
            if (isActive !== -1) {
                if(project.type === 'job') {
                    return (
                        <Element key={project.id} project={project} color="rgb(33, 150, 243)" icon={<WorkIcon />} />
                    );
                }
                else {
                    return (
                        <Element key={project.id} project={project} color="rgb(233, 30, 99)" icon={<HomeIcon />} />
                    );
                }
                
            }
            return <div key={project.id}></div>;
        });
        return projectElements;
    }

    render() {
        const projectsElements = this.createActiveProjectsElements();
        
        const tagsElements = this.state.allTags.map((tag, index) => <Tag key={index} tagName={tag.tag} isActive={tag.isActive} selectTag={() => this.selectTag(tag.tag)} />)
        return (
            <div className="container">
                <Card>
                    <Stack>
                            <CardBody>
                                <Heading>My Projects</Heading>
                                <Text> Click on the technologies below to only show related projects. </Text>
                                <Wrap spacing={1}>
                                    {tagsElements}
                                </Wrap>
                                <br/>
                                <Divider />
                                <br/>
                                <Button as={ReactRouterLink} to='/' variant="outline" color="teal">Back</Button>
                            </CardBody>
                    </Stack>
                </Card>
                <VerticalTimeline layout="1-column">
                    {projectsElements}
                </VerticalTimeline>
            </div>
        );
    }
}

export default ProjectsList;