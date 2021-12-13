const baseURL = 'http://localhost:5000/api/questions/'

const quizService = {
    getQuestions() {
        return fetch(baseURL)
            .then(res => res.json())
    }
}

export default quizService