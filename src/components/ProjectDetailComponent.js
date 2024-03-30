import React, { Component } from 'react';
import { Card, CardBody, CardFooter, Divider, Tag as ChakraTag,
    Text, Button, ButtonGroup, Image, Stack, Heading, Link, Wrap,
    Link as ChakraLink, LinkProps,
    Flex, Spacer  } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import PhotoCarousel from '../shared/CarouselComponent';

import { useLoaderData } from "react-router-dom";
import { PROJECTS } from '../shared/data/projects';
import ProjectPageButton from '../shared/ProjectPageButtonComponent';

export function projectLoader({ params }) {
    const project = PROJECTS.find((project) => project.id === parseInt(params.projectId, 10));
    return { project };
}

const ProjectDetail = () => {
    const { project } = useLoaderData();
    return (
        <Card >
            <CardBody>
                <Stack align="start">
                    <Flex justify="space-between" align="center" width="100%">
                        <Heading>{project.name}</Heading>
                        <ProjectPageButton link={project.link} />
                    </Flex>
                    
                    <Text> {project.date} </Text>
                    <PhotoCarousel photos={project.photos}/>
                    <Heading as='h4' size='md'>About</Heading>
                    <Text> {project.longDescription} </Text>
                    <Button as={ReactRouterLink} to='/projects' variant="outline" color="teal">Back</Button>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProjectDetail;