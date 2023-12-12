import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
const CommentCard = ({ comment }) => {
  const {user} = useContext(UserContext);
  const [deleted, setDeleted] = useState(false);
  
  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-date">{comment.created_at}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">{comment.votes} votes</p>
      {user === comment.author && <button className="delete-comment-btn">Delete</button>}
    </div>
  );
};

export default CommentCard;
