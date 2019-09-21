import React, { Component } from 'react'
import Messages from './messages.js'
import './messagepage.css'


export default class MessagePage extends Component {
       
    state = {
        messages: [
            {
                userName: "Ballers"
                , message: "Hey, can we trade?"
            },
            {
                userName: "Demogorgons"
                , message: "who would you like to trade?"
            },
            {
                userName: "Ballers"
                , message: "I'll give Lamar Jackson, for Tod Gurley"
            },
            {
                userName: "IssaBadTrade"
                , message: "yeaaaaah, i wouldn't do that trade if I were you"
            }
        ]
    }
    render() {
        return (
            <div>
                Message Container will go here
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    value={this.state.userNameText}
                    name="username"
                    onChange={this.handleTextIput}
                    />
                    <input
                    type="text"
                    name="message"
                    value={this.state.newMessageText}
                    onChange={this.handleSubmit}
                    />
                    <input type="submit" value="SEND" />
                </form>
            </div>
        )
    }

}
