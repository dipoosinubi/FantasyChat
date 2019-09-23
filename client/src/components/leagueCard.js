import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './leaguepage.css'

export default (props) => (
    <div>
        <Link to={`/api/sports/${props.sportId}/leagues/${props.leaugeId}/players`}>
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