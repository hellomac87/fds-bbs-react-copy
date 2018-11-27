import React, { Component } from 'react'
import WithLoading from '../HOC/withLoading';
import classNames from 'classnames'

import './PostList.scss';

class PostList extends Component {
  render() {
    
    const { posts, onPostDetailPage, onNewPostFormPage, loading} = this.props;
    const titleClass = classNames('PostList__title', { 'PostList__title--loading': loading })
    
    return (
      <div className="PostList">
          <button onClick={() => onNewPostFormPage()}>새 글 쓰기</button>
          <h1 className={titleClass}>게시물 목록</h1>
          <ul className="PostList__list">
            {posts.map(post => (
              <li
                className="PostList__item"
                key={post.id} onClick={() => onPostDetailPage(post.id)}>{post.title}</li>
            ))}
          </ul>
      </div>
    )
  }
}
export default WithLoading(PostList)