import NavBar from "../components/NavBar";
import Articles from "../components/Articles";

const ArticlesLayout = () => {
    return (
        <>
            <NavBar destination={["/articles", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
            <Articles />
        </>
    );
};
export default ArticlesLayout;
