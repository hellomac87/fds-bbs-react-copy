import React from 'react'
import {UserConsumer} from '../contexts/UserContext';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }
  
  handleSubmit = async(e) => {
    e.preventDefault();
    const username = this.usernameRef.current.value
    const password = e.target.elements.password.value
    this.props.login(username, password);
    
  }
  render() {
    const {onRegister} = this.props
    return (
      <React.Fragment>
        <form onSubmit={e => {
          this.handleSubmit(e)
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
}

export default (props) => (
  <UserConsumer>
    {
      ({login}) => <LoginForm {...props} login={login} />
    }
  </UserConsumer>
)
  
