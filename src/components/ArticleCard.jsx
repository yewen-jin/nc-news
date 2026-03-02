import { formatDate, formatTime } from "../data/utils";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const date = formatDate(article.created_at);
    const time = formatTime(article.created_at);

    return (
        <section className="article-card">
            <Link to={"/topics/" + article.topic}>
                <p className="article-card-topic">
                    <span>{article.topic}</span>
                </p>
            </Link>

            <Link to={"/articles/" + article.article_id}>
                <h3 className="article-card-text-title">{article.title}</h3>
                <img
                    alt="article image"
                    src={article.article_img_url}
                    className="article-card-img-preview"
                />
            </Link>
            <p>
                <Link to={"/users/" + article.author}>
                    <img className="avatar-s" />
                    <span>{article.author}</span>
                </Link>
                <span className="date-time">{" • " + date + " " + time}</span>
            </p>
            <div className="interaction-counts">
                <p>{"Votes:" + article.votes}</p>
                <p>{"Comments:" + article.comment_count}</p>
            </div>
        </section>
    );
};

export default ArticleCard;
