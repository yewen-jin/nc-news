import { formatDate, formatTime } from "../data/utils";

const ArticleCard = ({ article }) => {
    const date = formatDate(article.created_at);
    const time = formatTime(article.created_at);

    return (
        <section className="article-card">
            <h3 className="text-title">{article.title}</h3>
            <img
                alt="article image"
                src={article.article_img_url}
                className="article-img-preview"
            />
            <p>{"Author:" + article.author}</p>
            <p>{"Topic:" + article.topic}</p>
            <p className="date-time">{"Published:" + date + " " + time}</p>
            <p>{"Votes:" + article.votes}</p>
            <p>{"Comments:" + article.comment_count}</p>
        </section>
    );
};

export default ArticleCard;
