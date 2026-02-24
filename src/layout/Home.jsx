import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar destination={["/", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
        </>
    );
};
export default Home;
