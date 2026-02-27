import { useState } from "react";
import NavBar from "../components/NavBar";
import Articles from "../components/Articles";
import Login from "../components/Login";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <>
            <NavBar destination={["/articles", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
            {!isLoggedIn && <Login />}
            {isLoggedIn && <Articles />}
        </>
    );
};
export default Home;
