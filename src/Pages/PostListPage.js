import React, { Component } from 'react';
import Layout from '../components/Layout';
import PostList from '../containers/PostList';

class PostListPage extends Component {
    render() {
        return (
            <Layout title="게시물 목록" onLoginFormPage={this.props.onLoginFormPage}>
                <PostList {...this.props}/>
            </Layout>
        );
    }
}

export default PostListPage;