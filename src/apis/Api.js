import axios from 'axios';
import Config from './ApiConfig';

class Api {

    getUsers = () => {
        return axios.get(`${Config.baseUrl}/users`);
    }

    getPostsById = (userId, skip, limit) => {
        return axios.get(`${Config.baseUrl}/posts?userId=${userId}&skip=${skip}&limit=${limit}`);
    }

    getPostById = (postId) => {
        return axios.get(`${Config.baseUrl}/posts/${postId}`);
    }

    getComments = (postId) => {
        return axios.get(`${Config.baseUrl}/posts/${postId}/comments`);
    }

    deletePost = (postId, payload) => {
        return axios.delete(`${Config.baseUrl}/posts/${postId}`, {data: {}});
    }
}

export default new Api();