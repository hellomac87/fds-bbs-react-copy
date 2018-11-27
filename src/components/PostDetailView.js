import React, { Component } from 'react'
import WithLoading from '../HOC/withLoading';

class PostDetailView extends Component {
  render() {
    const { user, postId, onEditPostFormPage, userId, title, body} = this.props;
    return (
      <React.Fragment>
        {
          user.id === userId ? <button onClick={() => onEditPostFormPage(postId)}>수정</button> : null
        }
        <div>{title}</div>
        <div>{body}</div>
      </React.Fragment>
    )
  }
}

export default WithLoading(PostDetailView);