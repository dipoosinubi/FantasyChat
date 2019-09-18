/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, Button
// } from 'reactstrap';
/* Step 2
 * Rename this class to reflect the component being created
 *
 */
const sport = ({name, description}) => 
(<li>{name} - {description}</li>)

const sportsList = (sports) => (
    <div>
        {sports.map(sport)}
    </div>
)
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
                {/* <Card>
                    <CardImg top width="100%" src="" alt="Sport Image" />
                    <CardBody>
                        <CardTitle>{this.state.sports[0].name}</CardTitle>
                        <CardText>{this.state.sports[0].description}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card> */}
                {sportsList}
            </div>

            // </link>
        );
    }
}
