import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";

const Header = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <section className="header">
            <Link to="/">
                <h1>NC NEWS </h1>
            </Link>
            {currentUser !== null && <UserInfo username={currentUser} />}
        </section>
    );
};
export default Header;
