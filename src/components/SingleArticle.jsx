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
                <h2>{article.title}</h2>
                <img src={article.article_img_url} />
                <p>{article.body}</p>
            </section>
        </div>
    )
}

export default SingleArticle