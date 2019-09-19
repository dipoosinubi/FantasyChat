import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default (league) => (
    <div>
        <Link to={'/sports/:sportsId/leagues/:league/messages'}>
            <Card className="leagueCard">
                <CardBody>
                    <CardTitle>{league.name}</CardTitle>
                    <CardText>{league.description}</CardText>
                    <CardText>{league.players}</CardText>
                    <Button>Go To Messages</Button>
                </CardBody>
            </Card>
        </Link>
    </div>
);