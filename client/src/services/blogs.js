import API from './apiConfig'

export const getBlogs = async () => {
    try {
        const response = await API.get('/blogs')
        console.log("Look here line 6")
        return response.data
    } catch (error) {
        console.log("Look here line 9")
        throw error
    }
}

export const getBlog = async id => {
    try {
        const response = await API.get(`/blogs/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createBlog = async blog => {
    try {
        const response = await API.post('/blogs', blog)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateBlog = async (id, blog) => {
    try { 
        const response = await API.put(`/blogs/${id}`, blog)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteBlog = async id => {
    try {
        const response = await API.delete(`/blogs/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
} 






