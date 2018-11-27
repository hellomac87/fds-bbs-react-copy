import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import styles from './PostForm.module.scss';
import classNames from 'classnames';


// defaultValue에 다른 값을 또 넣어주지 않도록 주의
class PostForm extends Component {

  static defaultProps = {
    // true :: 편집 스타일, false :: 새글쓰기 스타일
    editing: false,
    // form 전송시 호출되는 함수, prams : title,body
    onSubmit: () => {}
  }


  render() {
    const { editing } = this.props;
    const titleClass = classNames(styles.titleInput, { [styles.editing]: editing })
    return (
      <div>
        <Form onSubmit={e => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          const body = e.target.elements.body.value;

          this.props.onSubmit(title, body);
        }}>
          <Form.Input 
            className={titleClass}
            type="text" name="title" defaultValue={this.props.title} 
          />
          <Form.TextArea name="body" cols="30" rows="10" defaultValue={this.props.body}></Form.TextArea>
          <Form.Button>전송</Form.Button>
        </Form>
      </div>
    )
  }
}


export default PostForm;