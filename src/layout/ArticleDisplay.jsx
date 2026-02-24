import NavBar from "../components/NavBar";
const ArticleDisplay = () => {
    return (
        <>
            <NavBar destination={["/", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
        </>
    );
};

export default ArticleDisplay;
