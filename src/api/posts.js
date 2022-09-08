import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const API = {
  getUsers() {
    return instance.get('users').then((res) => res.data);
  },
  getUserPosts(id) {
    return instance.get(`users/${id}/posts`).then((res) => res.data);
  },
  getUserPhotos(id) {
    return instance.get(`albums/${id}/photos`).then((res) => res.data);
  },
};
