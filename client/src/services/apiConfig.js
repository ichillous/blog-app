import axios from 'axios'

let apiURL

const apiURLs = {
    production: 'https://dragonflies-blog-app.herokuapp.com/api',
    development: 'http://localhost:3000/api'
}
//backend runs on 3000 always

if (window.location.hostname === 'localhost') {
    apiURL = apiURLs.development
} else {
    apiURL= apiURLs.production
}

const API = axios.create({
    baseURL: apiURL
})

export default API