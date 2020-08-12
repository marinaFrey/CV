import React, { Component } from 'react';
import {
    Card, CardLink, CardTitle, Row, Col, Button, 
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap';
import { Link } from "react-router-dom";

class PhotoCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.photos.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.photos.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = this.props.photos.map((photo, index) => {
            return (
                <CarouselItem
                    className="carouselImg"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={index}
                >
                    <img src={`${process.env.PUBLIC_URL}/${photo} `} alt={photo} width="100%" />
                    <CarouselCaption captionText="" captionHeader="" />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={this.props.photos} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

const ProjectDetail = ({ project }) => {
    return (
        <div className="container">
            <Card className="col-12 col-md-12">
                <Row>
                    <Col md="12" className="p-4">
                        <Row className="p-3">
                            <CardTitle><h1>{project.name}</h1></CardTitle>
                            <Button color="primary" className="m-3" style={{ float: 'right' }} href={project.link} target="_blank"
                                rel="noopener noreferrer">Link to Project Page</Button>
                        </Row>
                        <p>{project.date}</p>
                        <PhotoCarousel photos={project.photos}/>
                        <h4>About</h4>
                        <p> {project.longDescription} </p>
                        <CardLink tag={Link} to={`/projects`} >Back</CardLink>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ProjectDetail;