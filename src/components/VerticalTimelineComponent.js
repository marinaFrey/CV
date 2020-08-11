import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const Element = ({ experience, color, icon }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: color, color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid ' + color }}
            date={experience.date}
            icon={icon}
            iconStyle={{ background: color, color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">{experience.name}</h3>
            <h6 className="vertical-timeline-element-subtitle">{experience.location}</h6>
            <p> {experience.description} </p>
        </VerticalTimelineElement>
    );
}

const TimelineElement = ({ experience }) => {
    if (experience.type === 'job') {
        return (<Element experience={experience} color="rgb(33, 150, 243)" icon={<WorkIcon />} />)
    }
    if (experience.type === 'education') {
        return (<Element experience={experience} color="rgb(233, 30, 99)" icon={<SchoolIcon />} />)
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