import axios from 'axios'

let apiURL

const apiUrls = {
    production: 'https://dragonflies-blog-app.herokuapp.com/api',
    development: 'http://localhose:3000/api'
}

if (window.location.hostname === 'localhost') {
    apiURL = apiUrls.development
} else {
    apiURL= apiUrls.production
}

const api = axios.create({
    baseURL: apiURL
})

export default api