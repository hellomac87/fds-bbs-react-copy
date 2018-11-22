import React, { Component } from 'react';
import { UserConsumer } from '../contexts/UserContext';

class Layout extends Component {
    render() {
        const { onLoginFormPage } = this.props;
        return (
            <div>
                <div className="header">
                    header
                    <UserConsumer>
                        {({ user, login,logout }) => 
                            <React.Fragment>
                                <div>{user.username}</div>
                                {
                                    user.username ? (
                                        <button onClick={logout}>logout</button>
                                    ):(
                                        <button onClick={onLoginFormPage}>login</button>
                                    )
                                }
                                
                            </React.Fragment>
                        }
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