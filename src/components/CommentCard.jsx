const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-date">{comment.created_at}</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">{comment.votes} votes</p>
    </div>
  );
};

export default CommentCard;
