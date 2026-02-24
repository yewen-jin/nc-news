import NavBar from "../components/NavBar";

const Topics = () => {
    return (
        <>
            <NavBar destination={["/", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
        </>
    );
};
export default Topics;
