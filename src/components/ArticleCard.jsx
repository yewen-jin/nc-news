const ArticleCard = ({ article }) => {
    console.log(article);
    return (
        <section className="article-card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>{article.topic}</p>
            <p>{article.created_at}</p>
        </section>
    );
};

export default ArticleCard;
