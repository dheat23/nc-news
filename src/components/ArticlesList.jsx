import { useEffect, useState } from "react";
import {getAllArticles} from "../utils/utils";
import ArticleCard from "./ArticleCard";
import { ColorRing } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import TopicFilter from "./TopicFilter";
import SortBar from "./SortBar";
const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTopic = searchParams.get("topic");
  const selectedSort = searchParams.get("sort");
  const selectedOrder = searchParams.get("order");
  console.log(searchParams)
  useEffect(() => {
    getAllArticles(selectedTopic, selectedSort, selectedOrder).then((articles) => {
      setArticles(articles);
      setLoading(false)
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
      <SortBar setSearchParams={setSearchParams}/>
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
