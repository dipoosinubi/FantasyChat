import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default (sport) => (
    <div>
        <Link to={'/sports/:sportsId/leagues'}>
        <Card>
            <CardImg top width="10%" src="/test_photo.jpg" alt="Sport Image" />
            <CardBody>
                <CardTitle>{sport.name}</CardTitle>
                <CardText>{sport.description}</CardText>
                <Button>Go To Leagues</Button>
            </CardBody>
        </Card>
        </Link>
    </div>
);
