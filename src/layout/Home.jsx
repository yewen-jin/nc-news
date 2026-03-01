import NavBar from "../components/NavBar";
import Articles from "../components/Articles";
import Login from "../components/Login";

const Home = () => {
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
export default Home;
