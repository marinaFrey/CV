import React from 'react';
import { Card, CardBody, CardFooter, Divider,
    Text, Button, Image, Stack, Heading, Spacer  } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import '../App.css';
import Experiences from '../shared/VerticalTimelineComponent';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { PERSONAL_INFO } from '../shared/data/personalInfo';
import { EXPERIENCE } from '../shared/data/experience';

const Info = ({ icon, text, info }) => {
    return (
        <p>{icon} <b>{text}:</b> {info}</p>
    );
}

const SocialMediaIcons = ({ icon, link }) => {
    return (
        <Button >
            <a href={link} target="_blank" rel="noopener noreferrer">{icon}</a>
        </Button>
    );
}

const Home = () => {
    var personalInfo = PERSONAL_INFO;
    var experiences = EXPERIENCE;
    return (
        <div className='container'>
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow="hidden"
                >
                    <Stack>
                        <CardBody>
                            <Stack  direction={{ base: 'column', sm: 'row' }}>
                                <Stack>
                                    <Heading >{personalInfo.name}</Heading>

                                    <Text> {personalInfo.profession}</Text>

                                    <Info icon={<EmailOutlinedIcon />} text="Email" info={personalInfo.email} />
                                    <Info icon={<FmdGoodOutlinedIcon />} text="Location" info={personalInfo.location} />
                                    <Info icon={<TranslateIcon />} text="Languages" info={personalInfo.languages} />

                                </Stack>
                                <Spacer />
                                <Image
                                    display={{base: 'none', md: 'flex'}}
                                    borderRadius='full'
                                    objectFit='cover'
                                    boxSize='250px'
                                    maxW={{ base: '100%', md: "100%"}}
                                    maxH={{base: '100%'}}
                                    justify="content-center"
                                    align="self-center"
                                    src={`${process.env.PUBLIC_URL}/${personalInfo.photo} `} 
                                    alt='photo'
                                />
                            </Stack>
                            
                            <Text py='2' > {personalInfo.description} </Text>
                            <Stack direction='row' spacing={4}>
                                <SocialMediaIcons icon={<GitHubIcon />} link={personalInfo.githubUrl} />
                                <SocialMediaIcons icon={<LinkedInIcon />} link={personalInfo.linkedInUrl} />
                                <SocialMediaIcons icon={<YouTubeIcon />} link={personalInfo.youtubeUrl} />
                                <SocialMediaIcons icon={<InstagramIcon />} link={personalInfo.instagramUrl} />
                                <SocialMediaIcons icon={<FacebookIcon />} link={personalInfo.facebookUrl} />
                            </Stack>

                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Stack direction='row' spacing={4} align='center'>
                                
                                <Button leftIcon={<DownloadIcon />} size='lg' colorScheme='teal' variant='outline'>
                                    <a href={`${process.env.PUBLIC_URL}/assets/resume_Marina_Fortes_Rey.pdf `}  
                                        target="_blank" rel="noopener noreferrer">
                                            Download CV
                                    </a>
                                </Button>
                                <Button as={ReactRouterLink}  to='/projects' size='lg'
                                    rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
                                    My Work
                                </Button>
                            </Stack>
                        </CardFooter>
                    </Stack>

                    
            </Card>
            <Experiences experiences={experiences} />
        </div>
    );
}

export default Home;