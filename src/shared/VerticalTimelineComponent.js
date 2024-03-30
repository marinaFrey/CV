import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { educationExperienceColor, workExperienceColor } from './colors';

const Element = ({ experience, color, icon }) => {
    const textColor = 'black';
    const backgroundColor = 'white';
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: backgroundColor, color: textColor }}
            contentArrowStyle={{ borderRight: '7px solid ' + backgroundColor }}
            date={experience.date}
            icon={icon}
            iconStyle={{ background: color, color: backgroundColor }}>
            <h3 className="vertical-timeline-element-title">{experience.name}</h3>
            <h6 className="vertical-timeline-element-subtitle">{experience.location}</h6>
            <p> {experience.description} </p>
        </VerticalTimelineElement>
    );
}

const TimelineElement = ({ experience }) => {
    if (experience.type === 'job') {
        return (<Element experience={experience} color={workExperienceColor} icon={<WorkIcon />} />)
    }
    if (experience.type === 'education') {
        return (<Element experience={experience} color={educationExperienceColor} icon={<SchoolIcon />} />)
    }
    return (<div></div>)
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