import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '이강산',
            }
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}

export { 
    UserProvider,
    Consumer as UserConsumer
};