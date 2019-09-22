import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default (props) => (
    <div>
        <Link to={`/sports/${props.sportId}/${props.leaugeId}/players`}>
            <Card className="leagueCard">
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <CardText>{props.players}</CardText>
                </CardBody>
            </Card>
        </Link>
    </div>
);