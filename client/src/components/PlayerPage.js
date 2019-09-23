import React, { Component } from 'react'
import './playerpage.css';
import { Form } from 'reactstrap';

// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { Container } from 'reactstrap';
// import PlayerCard from './playerCard.js';
// import './playerpage.css';

// class NewPlayerForm extends React.Component {
//     state = {
//         newPlayer: {
//             teamName: "",
//             name: ""
//         }
//     };

//     handleTextIput = (evnt) => {
//         let newPlayer = { ...this.state.newPlayer }
//         newPlayer[evnt.target.name] = evnt.target.value
//         this.setState({ newPlayer })
//     }
//     addNewPlayer = (player) => {
//         fetch(`/api/sports/${this.state.league.sportId}/leagues/${this.state.players.leagueId}/playersd`,
//             {
//                 method: 'POST'
//                 , headers: { 'Content-Type': 'application/json' }
//                 , body: JSON.stringify(player)
//             }
//         ).then(response => response.json())
//             .then((responseJson) => console.log(responseJson))
//             .catch(error => console.log(error));
//     };
//     handleSubmit = (evnt) => {
//         evnt.preventDefault();
//         this.addNewPlayer(this.state.newPlayer)
//     };
//     render() {
//         return (
//             <Form>
//                 <FormGroup>
//                     <Label for="teamName">Team Name: </Label>
//                     <input
//                         type="text"
//                         name="teamName"
//                         placeholder="Enter Team Name"
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="name">Full Name: </Label>
//                     <input
//                         type="name"
//                         name="name"
//                         placeholder="Enter Full Name"
//                     />
//                     <input className="button" type="submit" value="ADD PLAYER" />
//                 </FormGroup>
//             </Form>
//         )
//     }
// }

// export default class PlayerPage extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             players: []
//             // [
//             //     {
//             //         teamName: "Ballers"
//             //         , name: "Sue Storm"
//             //         ,win: 2
//             //         ,loss:3
//             //         ,tie: 0
//             //     },
//             //     {
//             //         teamName: "Demogorgons"
//             //         , name: "Johnny Storm"
//             //         ,win: 2
//             //         ,loss:3
//             //         ,tie: 0
//             //     },
//             //     {
//             //         teamName: "Ballers"
//             //         , name: "Mr Fantastic"
//             //         ,win: 2
//             //         ,loss:3
//             //         ,tie: 0
//             //     },
//             //     {
//             //         teamName: "IssaBadTrade"
//             //         , name: "The Thing"
//             //         ,win: 2
//             //         ,loss:3
//             //         ,tie: 0
//             //     }
//             // ]
//         }
//     }
//     componentDidMount() {
//         this.getPlayers()
//     }

//     getPlayers = () => {
//         fetch(`/api/sports/${this.props.match.params.sportsId}/leagues/${this.props.match.params.leaguesId}/players`)
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({ palyers: json })
//             })
//     }
//     render() {
//         const players = this.state.players.map((player) => {
//             return (
//                 <PlayerCard
//                     key={player._id}
//                     league={player._id}
//                     sportId={player._id}
//                     playerId={player._id}
//                     teamName={player.teamName}
//                     name={player.name}
//                 />
//             )
//         })
//         return (
//             <div>
//                 <h1>Message Container will go here</h1>
//                 <NewPlayerForm addPlayer={this.addNewPlayer} />
//                 <Container>
//                     {players}
//                 </Container>
//             </div>
//         )
//     }

// }
const player = (text) => {
    return (
      <li>{text}</li>
    )
  }
  
  const playerListHeader = (headerText) => {
    return (
      <h3>{headerText}</h3>
    )
  }
  
  const playerList = (alist) => {
  
    return (
      <div>
        {playerListHeader(alist.listName)}
        <ol>
          {alist.playerNames.map(player)}
        </ol>
      </div>
    )
  }
  
  const todoListContainer = (lists, addNewPlayerAtIndex) => {
    return (
      <div>
        {lists.map(playerList)}
      </div>
    )
  }
  
  class NewPlayerForm extends React.Component {
  
    state = {
      newPlayerText: ""
    }
  
    handleInputChange = (evnt) => {
      this.setState({ newPlayerText: evnt.target.value })
    }
  
    handleFormSubmission = (evnt) => {
      evnt.preventDefault();
  
      this.props.addNewPlayerText(this.state.newPlayerText)
    }
  
    render() {
      return (
        <Form onSubmit={this.handleFormSubmission}>
          <input 
            type="text" 
            placeholder="ENTER PLAYER NAME" 
            value={this.state.newPlayerText}  
            onChange={this.handleInputChange}
          />
          <input className="button" type="submit" value="ADD PLAYER" />
        </Form>
      )
    }
  }
  
  class App extends React.Component {
  
    state = {
      playerList:
        { listName : "Players in my league"
        , playerNames: ["Mr. Fantastic", "Sue Storm", "Bob Burger"]
        }
    }
  
    addNewPlayer = (newPlayerText) => {
  
      //this.state.playerList.playerNames.push(newPlayerText)
      //create a copy of our todo list
      let playerList = {...this.state.playerList} //[...this.state.playerList.playerNames]
  
      playerList.playerNames.push(newPlayerText)
  
      this.setState({ playerList })
      
    }
  
    render() {
      return (
        <div className="playerBody">
          <h1>My Player List</h1>
          {/* todoItemForm() */}
          <NewPlayerForm 
            addNewPlayerText={this.addNewPlayer}
            someText="asdf"
          />
          {playerList( this.state.playerList )}
        </div>
      );
    }
  }
  
  export default App; // module.exports = { App }