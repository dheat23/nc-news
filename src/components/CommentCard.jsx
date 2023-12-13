import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils/utils";
const CommentCard = ({ comment }) => {
  const {user} = useContext(UserContext);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);

  function handleDelete() {
    setDeleting(true);
    setError(false)
    deleteComment(comment.comment_id)
    .then(()=>{
      setDeleting(false)
      setDeleted(true)
    })
    .catch((err)=>{
      setDeleting(false)
      setError(true)
    })
    
  }
  if (deleted) {
    return <p className="success">Comment Deleted</p>
  }
  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-date">{comment.created_at}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">{comment.votes} votes</p>
      {user === comment.author && (deleting ? <p className="delete-in-progress">Deleting comment..</p> : <button onClick={handleDelete} className="delete-comment-btn">Delete</button>)}
      {error === true && <p className="error delete-comment-error">Error deleting comment, try again later</p>}
    </div>
  );
};

export default CommentCard;
