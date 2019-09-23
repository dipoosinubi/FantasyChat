import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import LeagueCard from './leagueCard.js';
import './leaguepage.css';

class NewLeagueForm extends React.Component {
    state = {
        newLeague: {
            name: "",
            description: "",
            players: 0
        }
    };

    // componentDidMount() {
    //     console.log(this.state.sportsId)
    // }

    handleTextInput = (evnt) => {
        let newLeague = { ...this.state.newLeague }
        newLeague[evnt.target.name] = evnt.target.value
        this.setState({ newLeague })
    }
    addNewLeague = (league) => {
         console.log(league.sportId)
        fetch(`/api/sports/${this.props.match.params.sportsId}/leagues/`,
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
                    onChange={this.handleTextInput}
                    placeholder="ENTER NAME"
                />
                <input
                    type="text"
                    name="description"
                    onChange={this.handleTextInput}
                    placeholder="ENTER DESCRIPTION"
                />
                <input
                    type="text"
                    name="players"
                    onChange={this.handleTextInput}
                    placeholder= "NUMBER OF PLAYERS"
                />
                <input  className="button" type="submit" value="ADD LEAGUE" />
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
        const leagues = this.state.leagues.map((leagues) => {
            return (
                < LeagueCard
                    key={leagues._id}
                    sportId={leagues.sportsId}
                    leagueId={leagues._id}
                    name={leagues.name}
                    description={leagues.description}
                    players={leagues.players}
                />
            )
        })

        return (
            <div className='leagueBody'>
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
