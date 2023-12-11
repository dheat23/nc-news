import axios from "axios"

const getAllArticles = () => {
    return axios.get("https://dh-news-server.onrender.com/api/articles")
    .then(({data}) => {
        return data.articles
    })
}

export default getAllArticles