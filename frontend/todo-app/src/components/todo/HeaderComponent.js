import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
        render() {
            const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
            // console.log(isUserLoggedIn);

            return (
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://www.mykeyboard.fun" className="navbar-brand">chenwang</a></div>
                        <ur className="navbar-nav">
                            {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/chenwang">Home</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ur>
                        <ur className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn &&<li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ur>
                    </nav>
                </header>
            )
        }
}

export default withRouter(HeaderComponent);