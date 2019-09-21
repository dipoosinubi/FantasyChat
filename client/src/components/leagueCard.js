import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, Button, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default (props) => (
    <div>
        <Link to={`/sports/${props.sportId}/leagues/${props.leaugeId}/messages`}>
            <Card className="leagueCard">
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <CardText>{props.players}</CardText>
                    {/* <CardBody>{props.website}</CardBody>
                    <Button >Go To Messages</Button> */}
                </CardBody>
            </Card>
        </Link>
          {/* <div style={styles.alignText}> */}
          <Label color='green' basic>
                <a href="{props.website}" target="_blank">Click here</a>
            </Label>
        {/* </div> */}
    </div>
);