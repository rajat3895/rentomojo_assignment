import React, {Component} from 'react'
import Api from '../../apis/Api.js';
import './PostDetails.css';

export default class PostDetails extends Component {

    state = {
        postDetails: {},
        comments: [],
        activePostId: '',
        showComments: false
    }

    componentDidMount() {
        const windowUrl = window.location.href;
        const postId = windowUrl.split('postId=')[1];
        Api.getPostById(postId).then((res) => {
            this.setState({
                postDetails: res.data,
                activePostId: postId
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.comments !== this.state.comments) {
            this.setState({
                comments: this.state.comments
            });
        }

    }

    getComments = () => {
        const windowUrl = window.location.href;
        const postId = windowUrl.split('postId=')[1];
        Api.getComments(postId).then((res) => {
            this.setState({
                comments: res.data,
                showComments: !this.state.showComments
            });
        });
    }

    displayComments = () => {
        const {comments, showComments} = this.state;

        return showComments && comments.map((comment) => {
            return (
                <div key={comment.id} className='postCard'>
                    <p>{comment.name}</p>
                    <p className= 'email'>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            );
        });
    }

    handleDeletePost = () => {
        const {activePostId = '', postDetails: {userId = ''} ={}} = this.state;

        Api.deletePost(activePostId).then(() => {
            this.props.history.push(`/posts-list?userId=${userId}`)
        });
    }

    getHeader = () => {
        return (
            <div className='headerClassDetails'>
                <div className='subHeaderClass'>Post Details</div>
                <button className='deleteBtn'
                    onClick={this.handleDeletePost}>
                    Delete Post
                </button>
            </div>
        );
    }

    getPostCard = () => {
        const {postDetails: {title = '', body = ''} = {}} = this.state;
        return (
            <div className= 'postCard'>
                <p className='title'>{title}</p>
                <p>{body}</p>
            </div>
        );
    }

    getCommentsButton = () => {
        return(
            <button className='showCommentsLink'
                onClick={this.getComments}>
                {!this.state.showComments ? 'Show Comments' : 'Hide Comments'}
            </button>
        );
    }

    render() {
        return (
            <>
                {this.getHeader()}
                {this.getPostCard()}
                <hr />
                {this.getCommentsButton()}
                {this.displayComments()}
            </>
        );
    }
}

