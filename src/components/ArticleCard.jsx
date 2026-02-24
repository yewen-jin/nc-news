const ArticleCard = ({ article }) => {
    console.log(article);
    return (
        <section className="article-card">
            <h3>{article.title}</h3>
            <img
                alt="article image"
                src={article.article_img_url}
                className="article-img-preview"
            />
            <p>{"Author:" + article.author}</p>
            <p>{"Topic:" + article.topic}</p>
            <p>{"Published:" + article.created_at}</p>
            <p>{"Votes:" + article.votes}</p>
            <p>{"Comments:" + article.comment_count}</p>
        </section>
    );
};

export default ArticleCard;
