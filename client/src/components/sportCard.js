import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default (props) => (
    <div className="sportCard">
        <Link to={`/sports/${props.sportId}/leagues`}>
        <Card>
            <CardImg top width="10%" src="/test_photo.jpg" alt="Sport Image" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.description}</CardText>
                <Button>Go To Leagues</Button>
            </CardBody>
        </Card>
        </Link>
    </div>
);
