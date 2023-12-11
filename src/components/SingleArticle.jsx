import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {getArticleById} from "../utils/utils";

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    useEffect(()=>{
        getArticleById(article_id)
        .then((article) => {
            setArticle(article)
        })
    }, [])
    
    return (
        <div id="single-article-page">
            <section id="single-article">
                <p className="single-article-author">{article.author}</p>
                <p className="single-article-date">{article.created_at}</p>
                <h2 className="single-article-title">{article.title}</h2>
                <img className="single-article-img" src={article.article_img_url} />
                <p className="single-article-body">{article.body}</p>
                <p className="single-article-votes">{article.votes} votes</p>
                <p className="single-article-comments">{article.comment_count} comments</p>
            </section>
        </div>
    )
}

export default SingleArticle