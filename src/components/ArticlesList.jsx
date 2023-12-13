import { useEffect, useState } from "react";
import {getAllArticles} from "../utils/utils";
import ArticleCard from "./ArticleCard";
import { ColorRing } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import TopicFilter from "./TopicFilter";
const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const selectedTopic = searchParams.get("topic");
  useEffect(() => {
    getAllArticles(selectedTopic).then((articles) => {
      setArticles(articles);
      setLoading(false);
      setError(null);
    })
    .catch(err => {
      setLoading(false)
      setError(err.response)
    });
  }, [searchParams]);
  if(loading) {
    return <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{"textAlign": "center"}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
  }
  return (
    <section id="articles-list">
      <h2>{selectedTopic ? "" : "All "}Articles{selectedTopic ? ` about ${selectedTopic}` : ""}</h2>
      <TopicFilter selectedTopic={selectedTopic}/>
      {error ? <p className="error">{error.status}: {error.data.msg}</p> : <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>}
    </section>
  );
};

export default ArticlesList;
