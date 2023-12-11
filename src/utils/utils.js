import axios from 'axios'

const getArticleById = (id) => {
    return axios.get(`https://dh-news-server.onrender.com/api/articles/${id}`)
    .then(({data}) => {
        return data.article
    })
}

export default getArticleById