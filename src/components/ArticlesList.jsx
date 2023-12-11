import { useEffect, useState } from "react";
import getAllArticles from "../utils/utils";
import ArticleCard from "./ArticleCard";
const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  return (
    <section id="articles-list">
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
