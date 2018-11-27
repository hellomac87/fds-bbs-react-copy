import React, { Component } from 'react';
import PostDetailView from '../components/PostDetailView';
import { withUser } from '../contexts/UserContext';
import api from '../api';

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      title: '',
      userId: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      data: { title, body, userId },
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body,
      userId,
      loading: false,
    });
  }

  render() {
    const { onEditPostFormPage, postId, user } = this.props;
    const { title, body, userId, loading } = this.state;
    // console.log
    return (
      <PostDetailView
        postId={postId}
        onEditPostFormPage={onEditPostFormPage}
        userId={userId}
        title={title}
        body={body}
        user={user}
        loading={loading}
      />
    );
  }
}

export default withUser(PostDetail);
