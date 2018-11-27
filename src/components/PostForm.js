import React, { Component } from 'react'
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
        <form onSubmit={e => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          const body = e.target.elements.body.value;

          this.props.onSubmit(title, body);
        }}>
          <input 
            className={titleClass}
            type="text" name="title" defaultValue={this.props.title} 
          />
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
          <button>전송</button>
        </form>
      </div>
    )
  }
}


export default PostForm;