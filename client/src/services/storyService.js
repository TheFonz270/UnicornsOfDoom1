const baseURL = 'http://localhost:5000/api/stories/'

export const getStories = () => {
    return fetch(baseURL)
        .then(res => res.json())
}
