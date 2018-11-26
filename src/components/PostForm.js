import React, { Component } from 'react'
import styles from './PostForm.module.scss';
import classNames from 'classnames';


// defaultValue에 다른 값을 또 넣어주지 않도록 주의
export default class PostForm extends Component {
  render() {
    const { editing } = this.props;
    const titleClass = classNames(styles.titleInput, { [styles.editing]: editing })
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
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
