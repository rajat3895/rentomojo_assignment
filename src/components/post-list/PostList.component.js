import React, {Component} from 'react'
import Api from '../../apis/Api'
import Config from './config/PostList.config';
import './PostList.css';

export default class PostsList extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        // Below 2 lines can be moved to a seperate utils file
        const windowUrl = window.location.href;
        const userId = windowUrl.split('userId=')[1];
        Api.getPostsById(userId, Config.skip, Config.limit).then((res) => {
            this.setState({
                posts: res.data
            });
        });
    }

    naviagteToPostDetails = (id) => {
        this.props.history.push(`/post-details?postId=${id}`);
    }

    
    getPostsList = () => {
        return this.state.posts.map((post, index) => {
            return (
                <button key={post.id} className='btnClass'
                    onClick={() => this.naviagteToPostDetails(post.id)}>
                    {`${index+1}. ${post?.title}`}
                </button>
            );
        });
    }

    render() {
        return (
            <>
                <span className='text'>Posts</span>
                {this.getPostsList()}
            </>
        );
    }
}

