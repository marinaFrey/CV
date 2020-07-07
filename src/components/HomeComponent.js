import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';


const Home = (props) => {
    return (
        <div className='container'>
            <Card className="col-12 col-md-12">
                <CardTitle>John Doe</CardTitle>
                <CardBody>
                    <Row>
                        <Col md="9">
                            <p>sdasidsa</p>
                            <p>sdasidsa</p>
                            <p>sdasidsa</p>
                            <p>sdasidsa</p>
                        </Col>
                        <Col md="3">
                            <img src="/images/sample.jpg"></img>
                        </Col>
                    </Row>
                    <Row>
                        <Button>Download CV</Button>
                        <Button>Check Projects</Button>
                    </Row>

                </CardBody>

            </Card>

        </div>
    );
}

export default Home;