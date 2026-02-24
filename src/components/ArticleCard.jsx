const ArticleCard = ({ article }) => {
    // console.log(article);
    const publishedDate = article.created_at.split("T")[0].split("-");
    const publishedTime = article.created_at.split("T")[1].split(".");
    const date =
        publishedDate[2] + "/" + publishedDate[1] + "/" + publishedDate[0];
    const time = publishedTime[0].slice(0, -3);
    console.log(publishedDate, publishedTime, date, time);
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
            <p>{"Published:" + date + " " + time}</p>
            <p>{"Votes:" + article.votes}</p>
            <p>{"Comments:" + article.comment_count}</p>
        </section>
    );
};

export default ArticleCard;
