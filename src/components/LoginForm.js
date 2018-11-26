import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { withUser } from '../contexts/UserContext';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }

  handleSubmit(e){
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.login(username, password);
  }
  
  
  render() {
    const {onRegister} = this.props;
    return (
        <React.Fragment>
          <h1>로그인</h1>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Field>
              <Form.Input label="username" type="text" name="username" />
            </Form.Field>
            <Form.Field>
              <Form.Input label="password" type="password" name="password" />
            </Form.Field>
            <Form.Button primary type='submit'>로그인</Form.Button>
          </Form>
          <Button onClick={() => onRegister()}>회원 가입</Button>
        </React.Fragment>
    )
  }
}

export default withUser(LoginForm);