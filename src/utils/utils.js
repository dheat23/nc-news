import axios from "axios";
const instance = axios.create({
  baseURL: "https://dh-news-server.onrender.com/api",
}); 
function getAllArticles() {
  return instance.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

function getArticleById(id) {
    return instance.get(`/articles/${id}`)
    .then(({data}) => {
        return data.article
    })
};

function getCommentsByArticleId(id) {
    return instance.get(`articles/${id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

function patchArticleVotes(id, inc_votes) {
    const patchBody = {inc_votes}
    return instance.patch(`articles/${id}`, patchBody)
    .then(({data}) => {
        return data.article
    })
}
export {getAllArticles, getArticleById, getCommentsByArticleId, patchArticleVotes}