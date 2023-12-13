import axios from "axios";
const instance = axios.create({
  baseURL: "https://dh-news-server.onrender.com/api",
}); 
function getAllArticles(topic) {
    let queryStr = "/articles"
    if (topic !== null) {
        queryStr += `?topic=${topic}`
    }
  return instance.get(queryStr).then(({ data }) => {
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

function postComment(id, user, text) {
    const postBody = {
        username: user,
        body: text
    }
    return instance.post(`articles/${id}/comments`, postBody)
    .then(({data}) => {
        return data.comment
    })
}

function deleteComment(id) {
    return instance.delete(`comments/${id}`)
}

function getAllTopics() {
    return instance.get(`topics`)
    .then(({data}) => {
        return data.topics
    })
}

export {getAllArticles, getArticleById, getCommentsByArticleId, patchArticleVotes, postComment, deleteComment, getAllTopics}