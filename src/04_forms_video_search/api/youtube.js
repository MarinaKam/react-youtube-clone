import axios from 'axios';

const KEY = 'AIzaSyBj5Cm5lMImWvidJl5zjdGmAdPIl-oXAEw';
const URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: URL,
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY,
        type: 'video',
        order: 'viewCount',
    }
});