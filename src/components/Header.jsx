// import { USERNAME } from "../data/user";
import { useContext } from "react";
import { UserContext } from "../context/User";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

const Header = () => {
    const username = useContext(UserContext);
    console.log("header username", username);
    return (
        <section className="header">
            <Link to="/">
                <h1>NC NEWS </h1>
            </Link>
            <UserInfo username={username} />
        </section>
    );
};
export default Header;
