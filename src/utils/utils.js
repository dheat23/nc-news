import axios from "axios";
const instance = axios.create({
  baseURL: "https://dh-news-server.onrender.com/api/",
});
const getAllArticles = () => {
  return instance.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export default getAllArticles;
