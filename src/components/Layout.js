import React, { Component } from 'react';
import { UserConsumer } from '../contexts/UserContext';

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    header
                    <UserConsumer>
                        {({ user }) => <div>{user.username}</div>}
                    </UserConsumer>  
                </div>
                <h1 className="title">
                    {this.props.title}
                </h1>
                {this.props.children}
                <div className="footer">footer</div>
            </div>
        );
    }
}

export default Layout;