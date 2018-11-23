import React, { Component } from 'react'
import { withUser} from '../contexts/UserContext';
import Layout from './Layout';
import api from '../api';

class PostDetail extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      body: '',
      title: '',
      userId: null
    }
  }
  
  async componentDidMount() {
    const {data: {title, body, userId}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body,
      userId
    })
  }
  
  render() {
    const {user, postId, onEditPostFormPage} = this.props
    const { title, body, userId} = this.state

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

export default withUser(PostDetail)