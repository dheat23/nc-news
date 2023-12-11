const ArticleCard = ({ article }) => {
  const formattedTime = new Date(article.created_at).toLocaleString();
  return (
    <div className="article-card">
      <p className="article-card-author">{article.author}</p>
      <p className="article-card-date">{formattedTime}</p>
      <h3 className="article-card-title">{article.title}</h3>
      <p className="article-card-votes">{article.votes} votes</p>
      <p className="article-card-comments">{article.comment_count} comments</p>
    </div>
  );
};

export default ArticleCard;
