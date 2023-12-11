import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import getArticleById from "../utils/utils";

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [showComments, setShowComments] = useState(false)
    useEffect(()=>{
        getArticleById(article_id)
        .then((article) => {
            setArticle(article)
        })
    }, [])
    function handleCommentsClick() {
        setShowComments((currShowComments) => {
            return !currShowComments
        })
    }
    return (
        <div id="single-article-page">
            <section id="single-article">
                <h2>{article.title}</h2>
                <img src={article.article_img_url} />
                <p>{article.body}</p>
                <button onClick={handleCommentsClick}>Show Comments</button>
            </section>
            {showComments === true && 
                <section id="article-comments">
                <h3>{article.comment_count} comments</h3>
            </section>
            }
        </div>
    )
}

export default SingleArticle