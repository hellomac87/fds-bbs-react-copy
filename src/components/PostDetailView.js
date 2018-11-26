import React, { Component } from 'react'
import Layout from './Layout';

class PostDetailView extends Component {
  render() {
    const { user, postId, onEditPostFormPage, userId, title, body} = this.props;

    return (
      <Layout title="게시물">
        {
          user.id === userId ? <button onClick={() => onEditPostFormPage(postId)}>수정</button> : null
        }
        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    )
  }
}

export default PostDetailView;