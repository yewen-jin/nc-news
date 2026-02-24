import NavBar from "../components/NavBar";
import Articles from "../components/Articles";

const Home = () => {
    return (
        <>
            <NavBar destination={["/", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
            <Articles />
        </>
    );
};
export default Home;
