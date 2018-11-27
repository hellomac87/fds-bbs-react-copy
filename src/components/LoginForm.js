import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { withUser } from '../contexts/UserContext';

class LoginForm extends React.Component {
  static defaultProps = {
    // 사용자가 로그인 폼을 전송했을 때 호출되는 함수
    // Params :: username, password
    login: (username, password) => {},
    // 회원가입 버튼을 눌렀을때 호출되는 함수
    // 함수를 반드시 넘겨줘야 함
    onRegister: null,
  };
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.login(username, password);
  }

  render() {
    const { onRegister } = this.props;
    return (
      <React.Fragment>
        <h1>로그인</h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Field>
            <Form.Input label="username" type="text" name="username" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="password" type="password" name="password" />
          </Form.Field>
          <Form.Button primary type="submit">
            로그인
          </Form.Button>
        </Form>
        <Button onClick={() => onRegister()}>회원 가입</Button>
      </React.Fragment>
    );
  }
}

export default withUser(LoginForm);
