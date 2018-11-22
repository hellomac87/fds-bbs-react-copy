import React, { Component } from 'react';
import { UserConsumer } from '../contexts/UserContext';
import Layout from './Layout';
import api from '../api';

export default class PostDetail extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      body: '',
      title: '',
      userId: null
    }
  }
  
  async componentDidMount() {
    const { data: { title, body, userId}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body,
      userId
    })
  }
  
  render() {
    const {postId, onEditPostFormPage} = this.props
    const { title, body, userId} = this.state

    return (
      <Layout title="게시물 상세">
        <UserConsumer>
          {
            ({user}) => {
              return user.id === userId ? <button onClick={() => onEditPostFormPage(postId)}>수정</button> : null
            }
          }
        </UserConsumer>
        
        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    )
  }
}
