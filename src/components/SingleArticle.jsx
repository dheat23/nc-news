import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import {getArticleById, patchArticleVotes} from "../utils/utils";
import CommentsList from "./CommentsList";
import CommentAdder from "./CommentAdder";

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getArticleById(article_id)
        .then((article) => {
            setArticle(article)
            setLoading(false)
        })
    }, []);
    function handleCommentsClick() {
        setShowComments((currShow)=>{return !currShow})
    };
    function handleVoteClick(voteType) {
        let newVotes
        if (voteType === "up") {
            newVotes = 1
        } 
        if (voteType === "down") {
            newVotes = -1
        }
        patchArticleVotes(article_id, newVotes)
        .then(()=>{
            setError(false)
        })
        .catch((err)=>{
            setError(true)
            setArticle((currArticle) => {
                return {...currArticle, votes: currArticle.votes - newVotes}
            })
        })

        setArticle((currArticle) => {
            return {...currArticle, votes: currArticle.votes + newVotes}
        })
    }
    if(loading) {
        return <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{"justifyContent": "center"}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    }
    return (
        <div id="single-article-page">
            <section id="single-article">
                <p className="single-article-author">{article.author}</p>
                <p className="single-article-date">{article.created_at}</p>
                <h2 className="single-article-title">{article.title}</h2>
                <img className="single-article-img" src={article.article_img_url} />
                <p className="single-article-body">{article.body}</p>
                <p className="single-article-votes">{article.votes} votes</p>
                
                <button className="upvote-btn" onClick={()=>{handleVoteClick("up")}}>Upvote!</button>
                <button className="downvote-btn" onClick={()=>{handleVoteClick("down")}}>Downvote!</button>
                {error === true && <p className="error">An error occurred when voting, try again later</p>}
                <p className="single-article-comments">{article.comment_count} comments</p>
                
            </section>
            <CommentAdder article_id={article_id} setComments={setComments}/>
            <button className="show-comments-btn" onClick={handleCommentsClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            {showComments === true && <CommentsList comments={comments} setComments={setComments}/>}
        </div>
    )
}

export default SingleArticle