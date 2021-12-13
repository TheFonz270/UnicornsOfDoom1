const baseURL = 'http://localhost:5000/api/stories/'

export const getStories = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getStory = (id) => {
    console.log("getStory run")
    return fetch(baseURL + id)
    .then(res => res.json())
    // .then(data => data[0]);   
    
}

// const fetchDog =  function(){
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => setDogImgUrl(data.message))
//   }