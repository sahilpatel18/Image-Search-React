import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID u7CJUkhAbNqxnKfSb0950Od4zssgJrhXpVjjcv4uRQ0'
    }
});