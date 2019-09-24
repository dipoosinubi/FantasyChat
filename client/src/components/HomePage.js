import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SportCard from './sportCard.js';
import './homepage.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewSportForm extends React.Component {
    state = {
        newSport: {
            name: "",
            description: "",
            image:""
        }
    };

    handleTextInput = (evnt) => {
        let newSport = { ...this.state.newSport }
        newSport[evnt.target.name] = evnt.target.value
        this.setState({ newSport })
    }

    addNewSport = (sport) => {
        fetch('/api/sports/',
            {
                method: 'POST'
                , headers: { 'Content-Type': 'application/json' }
                , body: JSON.stringify(sport)
            }
        ).then(response => response.json())
            .then((responseJson) => console.log(responseJson))
            .catch(error => console.log(error));
    };

    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewSport(this.state.newSport)
        window.location.reload();
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleTextInput}
                        placeholder="NAME"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="text"
                        name="description"
                        onChange={this.handleTextInput}
                        placeholder="DESCRIPTION"
                    />
                    </FormGroup>
                    <FormGroup>
                       <input
                        type="text"
                        name="image"
                        onChange={this.handleTextInput}
                        placeholder="Enter URL"
                    />
                    </FormGroup>
                     <FormGroup>
                    <input className="button" type="submit" value="ADD SPORT" />
                </FormGroup> 
            </Form>
        )
    }
}


export default class HomePage extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    constructor(props) {
        super(props);

        this.state = {
            sports: []
            // [
            //     {
            //         name: "Tests Sport 1"
            //         , description: "National Football League"
            //     },
            //     {
            //         name: "Test Sport 2"
            //         , description: " Nation BasketBall Association"
            //     },
            //     {
            //         name: "Test Sport 3"
            //         , description: " Nation BasketBall Association"
            //     },
            //     {
            //         name: "Test Sport 4"
            //         , description: " Premier League"
            //     }
            // ]
        }
    }
    componentDidMount() {
        this.getSports()
    }

    getSports = () => {
        fetch('/api/sports/')
            .then(res => res.json())
            .then(json => {
                this.setState({ sports: json })
            })
    };

    render() {
        const sports = this.state.sports.map((sport) => {
            return (
                <Col className="CardImg"sm="4">
                    < SportCard
                        key={sport._id}
                        sportId={sport._id}
                        name={sport.name}
                        description={sport.description}
                        image={sport.image}
                    />
                </Col>

            )
        })

        return (
            <div className='homeBody'>
                <h1> All Fantasy, No Reality</h1>
                <p>Welcome to Oladipo's fantasy leagues </p>
                <NewSportForm addSport={this.addNewSport} />
                <Container fluid>
                    <Row>
                        {sports}
                    </Row>
                </Container>
            </div>
        );
    }
}

