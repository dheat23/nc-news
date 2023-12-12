import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getCommentsByArticleId } from "../utils/utils";
import CommentCard from "./CommentCard";
const CommentsList = () => {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        getCommentsByArticleId(article_id)
        .then((comments) => {
            setComments(comments)
        })
    }, [])
    return (
        <section id="comments-list">
    <h3>Comments</h3>
    <ul>
        {comments.map(comment=>{
            return <li key={comment.comment_id}><CommentCard comment={comment}/></li>
        })}
    </ul>
    </section>
    )
}

export default CommentsList