import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import LeagueCard from './leagueCard.js';
import './leaguepage.css';

class NewLeagueForm extends React.Component {
    state = {
        newLeague: {
            name: "",
            description: "",
            players: 0,
            website: "",
            sportId:""
        }
    };

    handleTextInput = (evnt) => {
        let newLeague = { ...this.state.newLeague }
        newLeague[evnt.target.name] = evnt.target.value
        this.setState({ newLeague })
    }
    addNewLeague = (league) => {
        // console.log(this.state.leagues.sportId)
        fetch(`/api/sports/${this.state.league.sportId}/leagues`,
        {
            method: 'POST'
            , headers: { 'Content-Type': 'application/json' }
             , body: JSON.stringify(league)
            }
        ).then(response => response.json())
        .then((responseJson) => console.log(responseJson))
        .catch(error => console.log(error));
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewLeague(this.state.newLeague)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    // value={this.state.newLeague.name}
                    onChange={this.handleTextInput}
                    placeholder="NAME"
                />
                <input
                    type="text"
                    name="description"
                    // value={this.state.newLeague.description}
                    onChange={this.handleTextInput}
                    placeholder="DESCRIPTION"
                />
                <input
                    type="text"
                    name="players"
                    // value={this.state.newLeague.players}
                    onChange={this.handleTextInput}
                />
                <input
                    type="text"
                    name="website"
                    // value={this.state.newLeague.players}
                    onChange={this.handleTextInput}
                />
                <input type="submit" value="ADD LEAGUE" />
            </form>
        )
    }
}

export default class LeaguePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
        leagues: []
            // [
            //     {
            //         name: "Tests League 1"
            //         , description: "Fantasy league 1"
            //         , players: 10
            //     },
            //     {
            //         name: "Test League 2"
            //         , description: " Fantasy League 2"
            //         , players: 6
            //     },
            //     {
            //         name: "Test League 3"
            //         , description: "Fantasy League 3"
            //         , players: 10
            //     }
            // ]
        }
    }
    componentDidMount() {
        this.getAllLeagues()
    }

    getAllLeagues = () => {
        fetch(`/api/sports/${this.props.match.params.sportsId}/leagues`)
            .then(res => res.json())
            .then(json => {
                this.setState({ leagues: json })
            })
    };
   
    
    render() {
        //  const leagueBySport = this.state.leagues.filter( leagues =>
        //     this.props.match.params.sportsId === this.state.leagues.sportId)
        // const leagues = leagueBySport.map((league) => {
        const leagues = this.state.leagues.map((league) => {
            return (
                < LeagueCard
                    key={league._id}
                    // sportId={league._id}
                    leagueId={league._id}
                    name={league.name}
                    description={league.description}
                    players={league.players}
                    website={league.website}
                />
            )
        })

        return (
            <div className='body'>
                <h1>All leauges in "Selected Sport" </h1>
                <NewLeagueForm addLeague={this.addNewLeague} />
                <Container flex className="leagueContainer">
                    {/* <Row> */}
                        {leagues}
                    {/* </Row> */}
                </Container>
            </div>
        );
    }

}
