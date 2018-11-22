import React, { Component } from 'react';
import api from '../api';

const {Provider, Consumer: UserConsumer} = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);

        this.login = async (username, password) => {
            const res = await api.post('/users/login', {
                username,
                password
            })
            localStorage.setItem('token', res.data.token)
            await this.refreshUser();
            // TODO: 게시글 목록 보여주기
            this.props.onPostListPage();
        }
        this.logout = () => {
            localStorage.removeItem('token');
            this.setState({
                user: {
                    id: null,
                    username: null
                }
            });
            this.props.onLoginFormPage();
        }

        this.state = {
            user : {
                id: null,
                username: null,
            },
            login: this.login,
            logout: this.logout,
        }
    }
    refreshUser = async() => {
        const { data } = await api.get('/me');
        this.setState({
            user: {
                id: data.id,
                username: data.username
            }
        })
    } 
    async componentDidMount(){
        if(localStorage.getItem('token')){
            this.refreshUser();
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
    UserConsumer
};