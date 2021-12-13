const baseURL = 'http://localhost:5000/api/stories/'

export const getStories = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getStory = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}