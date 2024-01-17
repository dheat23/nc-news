import {Link} from 'react-router-dom'

const ArticleCard = ({ article }) => {
  const formattedTime = new Date(article.created_at).toLocaleString();
  return (
    <Link to={`/articles/${article.article_id}`}>
    <div className="article-card">
      <p className="article-card-author">{article.author}</p>
      <p className="article-card-date">{formattedTime}</p>
      <h3 className="article-card-title">{article.title}</h3>
      <img className="article-card-img" src={article.article_img_url} />
      <p className="article-card-votes">{article.votes} votes</p>
      <p className="article-card-comments">{article.comment_count} comments</p>
    </div>
    </Link>
  );
};

export default ArticleCard;
