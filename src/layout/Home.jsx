import { useState } from "react";
import NavBar from "../components/NavBar";
import Articles from "../components/Articles";
import Login from "../components/Login";
import { useContext } from "react";
import { UserContext } from "../context/CurrentUser";

const Home = () => {
    const { isLoggedIn } = useContext(UserContext);
    console.log(isLoggedIn);
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
