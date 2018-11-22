import React, { Component } from 'react';
import {UserConsumer} from '../contexts/UserContext';

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    header
                    <UserConsumer>
                        {({ user, logout}) => {
                            return (
                                <React.Fragment>
                                    <div>사용자명: {user.username}</div>
                                    {user.username ? <button onClick={logout}>logout</button> : <button>login</button>}
                                </React.Fragment>
                            )
                        }}
                    </UserConsumer>
                </div>
                <h1>{this.props.title}</h1>
                {this.props.children}   
                <div className="footer">
                    footer
                </div>
            </div>
        );
    }
}

export default Layout;