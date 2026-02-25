// import { USERNAME } from "../data/user";
import { useContext } from "react";
import { UserContext } from "../context/User";
import UserInfo from "./UserInfo";

const Header = () => {
    const username = useContext(UserContext);
    console.log(username);
    return (
        <section className="header">
            <h1>NC NEWS </h1>
            <UserInfo username={username} />
        </section>
    );
};
export default Header;
