import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

export default class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.mykeyboard.fun" className="navbar-brand">chenwang</a></div>
                    <ur className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/chenwang">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ur>
                    <ur className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ur>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr />Footer 
            </div>
        )
    }
}


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : 
            [
                {id: 1, description : 'Learn React', done:false, targetDate: new Date()},
                {id: 2, description : 'Become an Expert at React', done:false, targetDate: new Date()},
                {id: 3, description : 'Visit India', done:false, targetDate: new Date()},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                </div>
    }
}

function ErrorComponent() {
    return (
        <div>
            An Error Occurred. I don't know what to do! Contact support at 10 summer
        </div>
    )
}


class LoginComponent extends Component {
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
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> 
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     } else {
//         return null
//     }
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     } else {
//         return null
//     }
// }