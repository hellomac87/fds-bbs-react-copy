import React, { Component } from 'react';

const {Provider, Consumer: UserConsumer} = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            user : {
                id: '3',
                username: 'qwer',
            }
        }
    }
    async componentDidMount(){

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
    UserConsumer
};