import axios from 'axios';

const GithubAPI = axios.create({
  baseURL: 'https://api.github.com',
});

export default GithubAPI;
