import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HellowWorldService from '../../api/todo/HellowWorldService'

export default class WelcomeComponent extends Component {
    constructor(props) {
        super(props) 
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
    }

    render() {
        return  (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    <div>
                        Welcome {this.props.match.params.name}. 
                        You can manage your todos <Link to="/todos">here</Link>.
                    </div>
                </div>
                <div className="container">
                    <div>
                        Click here to get a customized welcome message.    
                        You can manage your todos <Link to="/todos">here</Link>.
                        <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                    </div>
                </div>
            </div>
        )
    }

    retriveWelcomeMessage() {
        HellowWorldService.executeHelloWorldService()
        .then(response => console.log(response))
    }

}
