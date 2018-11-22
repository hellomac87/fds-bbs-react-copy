import React from 'react'
import { UserConsumer } from '../contexts/UserContext';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }
  
  
  render() {
    const {onRegister} = this.props
    return (
      
        <UserConsumer>
          {
            ({login}) => (
              <React.Fragment>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const username = e.target.elements.username.value;
                  const password = e.target.elements.password.value;
                  login(username, password)
                }}>
                  <h1>로그인</h1>
                  <input ref={this.usernameRef} type="text" name="username" />
                  <input ref={this.passwordRef} type="password" name="password" />

                  <button>로그인</button>
                </form>
                <button onClick={() => onRegister()}>회원 가입</button>
              </React.Fragment>
            )   
          }
        </UserConsumer>
    )
  }
}