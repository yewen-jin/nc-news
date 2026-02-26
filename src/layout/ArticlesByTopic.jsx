import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const ArticlesByTopic = () => {
    const slug = useParams().slug;
    console.log(slug);
    return (
        <NavBar destination={["/articles", "/topics"]}>
            <p>Articles</p>
            <p>Topics</p>
        </NavBar>
    );
};
export default ArticlesByTopic;
