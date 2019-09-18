/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
// import { eventNames } from 'cluster';
/* Step 2
 * Rename this class to reflect the component being created
 *
 */

class NewSportForm extends React.Component {
    state = {
        sports: {
            name: "",
            description: ""
        }
    }

    handleTextInput = (evnt) => {
        let newSport = { ...this.state.newSport }
        newSport[evnt.target.name] = evnt.target.value
        this.setState({ newSport })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.props.addSport(this.state.newSport)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={this.handleTextInput}
                    placeholder="TYPE SPORT NAME"
                />
                <input
                    type="text"
                    name="description"
                    onChange={this.handleTextInput}
                    placeholder="TYPE SPORT DESCRIPTION"
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
        sports: [
            {
                name: "Tests Sport 1"
                , description: "National Football League"
            },
            {
                name: "Test Sport 2"
                , description: " Nation BasketBall Association"
            }
        ]
    }



    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    // componentDidMount() {
    //     this.getAppSport()
    // }
    // getAppSport() {
    //     getFirstSport = (sports) => {
    //         this.setState({ sport: { ...sports } })
    //     }
    // }
    // addNewSport = (createdSport) => {
    //     createdSport.sportId = this.state.sports._id

    //     saveSport(createdSport)
    //         .then(() => this.getAppSport())
    // }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            // <link to='/league'>
            <div >
                <NewSportForm />
                {this.state.sports.map((sport) => {
                    return (
                        <Card>
                            <CardImg top width="100%" src={sport.img} alt="Sport Image" />
                            <CardBody>
                                <CardTitle>{sport.name}</CardTitle>
                                <CardText>{sport.description}</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    )
                })
                }
            </div>

            // </link>
        );
    }
}
