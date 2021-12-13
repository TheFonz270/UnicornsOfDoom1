const baseURL = 'http://localhost:5000/api/questions/'

export const getQuestions = () => {
    return fetch(baseURL)
        .then(res => res.json())
}
