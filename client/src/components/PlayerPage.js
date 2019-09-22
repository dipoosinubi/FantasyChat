import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container } from 'reactstrap';
import PlayerCard from './playerCard.js';

class NewPlayerForm extends React.Component {
    state = {
        newPlayer: {
            teamName: "",
            name: ""
        }
    };

    handleTextIput = (evnt) => {
        let newPlayer = { ...this.state.newPlayer }
        newPlayer[evnt.target.name] = evnt.target.value
        this.setState({ newPlayer })
    }
    addNewPlayer = (player) => {
        fetch('/api/player',
            {
                method: 'POST'
                , headers: { 'Content-Type': 'application/json' }
                , body: JSON.stringify(player)
            }
        ).then(response => response.json())
            .then((responseJson) => console.log(responseJson))
            .catch(error => console.log(error));
    };
    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewPlayer(this.state.newPlayer)
    };
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="teamName">Team Name: </Label>
                    <input
                        type="text"
                        name="teamName"
                        placeholder="Enter Team Name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Full Name: </Label>
                    <input
                        type="name"
                        name="name"
                        placeholder="Enter Full Name"
                    />
                </FormGroup>
            </Form>
        )
    }
}

export default class PlayerPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            players: []
            // [
            //     {
            //         teamName: "Ballers"
            //         , name: "Sue Storm"
            //         ,win: 2
            //         ,loss:3
            //         ,tie: 0
            //     },
            //     {
            //         teamName: "Demogorgons"
            //         , name: "Johnny Storm"
            //         ,win: 2
            //         ,loss:3
            //         ,tie: 0
            //     },
            //     {
            //         teamName: "Ballers"
            //         , name: "Mr Fantastic"
            //         ,win: 2
            //         ,loss:3
            //         ,tie: 0
            //     },
            //     {
            //         teamName: "IssaBadTrade"
            //         , name: "The Thing"
            //         ,win: 2
            //         ,loss:3
            //         ,tie: 0
            //     }
            // ]
        }
    }
    componentDidMount() {
        this.getPlayers()
    }

    getPlayers = () => {
        fetch('/api/players')
            .then(res => res.json())
            .then(json => {
                this.setState({ palyers: json })
            })
    }
    render() {
        const players = this.state.players.map((player) => {
            return (
                <PlayerCard
                    key={player._id}
                    league={player._id}
                    sportId={player._id}
                    playerId={player._id}
                    teamName={player.teamName}
                    name={player.name}
                />
            )
        })
        return (
            <div>
                <h1>Message Container will go here</h1>
                <NewPlayerForm addPlayer={this.addNewPlayer} />
                <Container>
                    {players}
                </Container>
            </div>
        )
    }

}
