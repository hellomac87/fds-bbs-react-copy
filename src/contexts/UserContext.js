import React, { Component } from 'react';
import api from '../api';

const { Provider, Consumer: UserConsumer } = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);

        // 로그인 함수
        this.login = async (username, password) => {

            const res = await api.post('/users/login', {
                    username,
                    password
                })
            localStorage.setItem('token', res.data.token);

            await this.refreshUser();
            this.props.onPostListPage();
        }

        this.logout = () => {
            // 토큰 지우기
            localStorage.removeItem('token');
            // 사용자 정보 초기화
            this.setState({
                user: {
                    id: null,
                    username: null
                }
            })
            // TODO: LoginForm 보여주기
            this.props.onLoginFormPage();
            
        }

        this.state = {
            user: {
                id: null,
                username: null
            },
            login: this.login,
            logout: this.logout
        }
    }

    refreshUser = async () => {
        const { data } = await api.get('/me');
        this.setState({
            user: {
                id: data.id,
                username: data.username
            }
        });
    }

    async componentDidMount(){
        if(localStorage.getItem('token')){
            await this.refreshUser();
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

function withUser (WrappedComponent) {
    function WithUser(props){
        return (
            <UserConsumer>
                {
                    (value) => <WrappedComponent {...props} {...value}/>
                }
            </UserConsumer>
        )
    }
    WithUser.displayName = `WithUser(${getDisplayName(WrappedComponent)})`
    return WithUser;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export { 
    UserProvider,
    UserConsumer,
    withUser
};