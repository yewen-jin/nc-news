const ArticleDisplay = ({ article }) => {
    // console.log(article);
    return (
        <section className="article">
            <h3>{article.title}</h3>
            <div className="article-details">
                <p>{"arthor: " + article.author}</p>
                <p>{"topic: " + article.topic}</p>
            </div>
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
