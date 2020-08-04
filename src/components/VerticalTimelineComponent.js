import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const Icon = ({icon}) => {
    if(icon === 'job') {
        return ( <WorkIcon/>)
    }
    if(icon === 'education') {
        return (<SchoolIcon />)
    }
    return (<div></div>)
}

const TimelineElement = ({ experience }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={experience.date}
            icon={<Icon icon={experience.icon} />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">{experience.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
            <p> {experience.description} </p>
        </VerticalTimelineElement>
    );
}

const Experiences = ({experiences}) => {
    const experiencesElements = experiences.map((experience) => <TimelineElement key={experience.id} experience={experience}/>)
    return (
        <VerticalTimeline>
            {experiencesElements}
        </VerticalTimeline>
    );
}

export default Experiences;