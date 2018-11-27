import React, { Component } from 'react';
import PostListView from '../components/PostListView';
import api from '../api';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            loading: true
        }
    }

    async componentDidMount() {
        const res = await api.get('/posts')
        this.setState({
            posts: res.data,
            loading: false
        })
    }

    render() {
        const { posts, loading } = this.state;
        return (
            <div>
                <PostListView posts={posts} loading={loading} {...this.props}/>
            </div>
        );
    }
}

export default PostList;