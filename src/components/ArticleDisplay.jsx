import { formatDate, formatTime } from "../data/utils";
const ArticleDisplay = ({ article }) => {
    // console.log(article);
    const date = formatDate(article.created_at);
    const time = formatTime(article.created_at);
    return (
        <section className="article">
            <h3>{article.title}</h3>
            <div className="article-details">
                <p>{"arthor: " + article.author}</p>
                <p>{"topic: " + article.topic}</p>
            </div>
            <p>{"Published:" + date + " " + time}</p>
            <img
                alt="article image"
                src={article.article_img_url}
                className="article-img"
            />
            <p>{article.body}</p>
        </section>
    );
};
export default ArticleDisplay;
