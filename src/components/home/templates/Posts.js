import React from 'react';
import {withRouter} from "react-router-dom";
import {URL} from '../Home.consts'
import '../Home.css';

const Posts = (props) => {
    const {id, name, history} = props;

    const getPosts = () => {
        history.push(`${URL.POST_LIST}?userId=${id}`);
    }
     
    return (
        <button className='postButton'
            onClick={getPosts}>
            {`Posts by ${name}`}
        </button>
    );
}

export default withRouter(Posts);
