import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

class NewLeagueForm extends React.Component {
    state = {
        newLeague: {
            name: "",
            description: "",
            players:0
        }
    };

    handleTextInput = (evnt) => {
        let newLeague = { ...this.state.newLeague }
        newLeague[evnt.target.name] = evnt.target.value
        this.setState({ newLeague })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={this.state.newLeague.name}
                    onChange={this.handleTextInput}
                    placeholder="NAME"
                />
                <input
                    type="text"
                    name="description"
                    value={this.state.newLeague.description}
                    onChange={this.handleTextInput}
                    placeholder="DESCRIPTION"
                />
                <input
                type="text"
                name="players"
                value={this.state.newLeague.players}
                onChange={this.handleTextInput}
                />
                <input type="submit" value="ADD LEAGUE" />
            </form>
        )
    }
}

export default class LeaguePage extends Component {

    state = {
        leagues: //[]
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
                 <NewLeagueForm addLeague={this.addNewLeague} />
            {this.state.leagues.map((league) => {
                return (
                    <Card>
                        {/* <CardImg top width="60%" src={sport.img} alt="Sport Image" /> */}
                        <CardBody>
                            <CardTitle>{league.name}</CardTitle>
                            <CardText>{league.description}</CardText>
                            <CardText>{league.players}</CardText>
                            <Button>Go To Messages</Button>
                        </CardBody>
                    </Card>
                )
            })
            }
        </div>
        );
    }

}
