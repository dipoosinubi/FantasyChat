import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

export default class LeaguePage extends Component {

    state = {
        leauges: //[]
            [
                {
                    name: "Tests League 1"
                    , description: "Fantasy league 1"
                    , players: 10
                },
                {
                    name: "Test League 2"
                    , description: " Fantasy League 2"
                    , players: 6
                },
                {
                    name: "Test League 3"
                    , description: "Fantasy League 3"
                    , players: 10
                }
            ]
    }

    render() {
        return (
            <div >
            {this.state.leagues.map((league) => {
                return (
                    <Card>
                        {/* <CardImg top width="60%" src={sport.img} alt="Sport Image" /> */}
                        <CardBody>
                            <CardTitle>{league.name}</CardTitle>
                            <CardText>{league.description}</CardText>
                            <CardText>{league.number}</CardText>
                            <Button>Go To Leagues</Button>
                        </CardBody>
                    </Card>
                )
            })
            }
        </div>
        )
    }

}
