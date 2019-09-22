import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

export default (props) => (
    <div>
            <Card className="leagueCard">
                <CardBody>
                    <CardTitle>{props.teamName}</CardTitle>
                    <CardText>{props.name}</CardText>
                    <CardText>{props.players}</CardText>
                </CardBody>
            </Card>
          {/* <div style={styles.alignText}> */}

    </div>
);