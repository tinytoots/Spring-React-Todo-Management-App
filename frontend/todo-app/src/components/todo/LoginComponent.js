import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'chenwang',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }

    // in terms of HTML, any action that you perform in the button, you click it, you generate an event in React
    // handleUsernameChange(event) {
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //             [event.target.name]
    //                 :event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        // chenwang, good
        if (this.state.username === 'chenwang' && this.state.password === 'good') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`) 
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> 
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}