
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SportCard from './sportCard.js';
import './homepage.css'

class NewSportForm extends React.Component {
    state = {
        newSport: {
            name: "",
            description: ""
        }
    }

    handleTextInput = (evnt) => {
        let newSport = { ...this.state.newSport }
        newSport[evnt.target.name] = evnt.target.value
        this.setState({ newSport })
    }


    // componentDidMount() {
    // }

    //  addNewSport =(sport) => {
    //       fetch('/api/sports',
    //             {
    //                 method: 'POST'
    //                 , headers: { 'Content-Type': 'application/json' }
    //                 , body: JSON.stringify(sport)
    //             }
    //         ).then(response => response.json())
    //          .then((responseJson) => console.log(responseJson))
    //          .catch(error => console.log(error));
    // };
    //     getAllCoursework = () =>
    //   fetch('/api/sports')
    //     .then(res => res.json())
    //     .catch(() => []) 

    //     handleSubmit = (evnt) => {
    //         evnt.preventDefault();
    //         this.addNewSport(this.state.newSport)
    //     };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    // value={this.state.newSportText}
                    onChange={this.handleTextInput}
                    placeholder="NAME"
                />
                <input
                    type="text"
                    name="description"
                    // value={this.state.newDescriptionText}
                    onChange={this.handleTextInput}
                    placeholder="DESCRIPTION"
                />
                <input type="submit" value="ADD SPORT" />
            </form>
        )
    }
}


export default class HomePage extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        sports: //[]
            [
                {
                    name: "Tests Sport 1"
                    , description: "National Football League"
                },
                {
                    name: "Test Sport 2"
                    , description: " Nation BasketBall Association"
                },
                {
                    name: "Test Sport 3"
                    , description: " Nation BasketBall Association"
                },
                {
                    name: "Test Sport 4"
                    , description: " Premier League"
                }
            ]
    }
    // componentDidMount() {
    //     this.getSports()
    // }

    // getSports = () => {
    //    fetch('/api/sports')
    //         .then(res => {
    //             let sportsData = res.data
    //             this.setState({ sports: {...sportsData} })
    //         })
    // };

    render() {
        const sportList = this.state.sports.map((sport) => {
            return (
                <Col sm="4">
                    < SportCard 
                        key={sport._id}
                        sportId={sport._id}
                        name={sport.name}
                        description={sport.description}
                    />
                </Col>

            )
        })

        return (
            <div className='body'>
                <h1> All Fantasy, No Reality</h1>
                <p>Welcome to Oladipo's fantasy leagues </p>
                <NewSportForm addSport={this.addNewSport} />
                <Container fluid>
                    <Row>
                        {sportList}
                    </Row>
                </Container>
            </div>
        );
    }
}

