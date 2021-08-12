import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HellowWorldService from '../../api/todo/HellowWorldService'

export default class WelcomeComponent extends Component {
    constructor(props) {
        super(props) 
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {
        return  (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    <div>
                        {/* name是从TodoApp.js里的Route那里得到的param */}
                        Welcome {this.props.match.params.name}. 
                        You can manage your todos <Link to="/todos">here</Link>.
                    </div>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.    
                    You can manage your todos <Link to="/todos">here</Link>.
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        )
    }

    retriveWelcomeMessage() {
        // HellowWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))

        // HellowWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))

        HellowWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {       
        console.log(response)
        // you cannot display an object directly, that's why we use response.data.message here
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error) {       
        console.log(error.response)
        let errorMessage = '';

        if (error.message) 
            errorMessage += error.message

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }


        // you cannot display an object directly, that's why we use response.data.message here
        this.setState({welcomeMessage: errorMessage})
    }

}
